// ==UserScript==
// @name         GitHub 中文化插件
// @namespace    https://github.com/maboloshi/github-chinese
// @description  中文化 GitHub 界面的部分菜单及内容。原作者为楼教主(http://www.52cik.com/)。
// @copyright    2021, 沙漠之子 (https://maboloshi.github.io/Blog)
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @version      1.9.3-2025-01-26
// @author       沙漠之子
// @license      GPL-3.0
// @match        https://github.com/*
// @match        https://skills.github.com/*
// @match        https://gist.github.com/*
// @match        https://education.github.com/*
// @match        https://www.githubstatus.com/*
// @require      https://raw.githubusercontent.com/maboloshi/github-chinese/gh-pages/locals.js?v1.9.3-2025-01-26
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_notification
// @connect      fanyi.iflyrec.com
// @supportURL   https://github.com/maboloshi/github-chinese/issues
// ==/UserScript==

(function (window, document, undefined) {
    'use strict';

    /****************** 全局配置区（开发者可修改部分） ******************/
    const FeatureSet = {
        enable_RegExp: GM_getValue("enable_RegExp", true),
        enable_transDesc: GM_getValue("enable_transDesc", true),
    };
    const CONFIG = {
        LANG: 'zh-CN',
        // 站点域名 -> 类型映射
        PAGE_MAP: {
            'gist.github.com': 'gist',
            'www.githubstatus.com': 'status',
            'skills.github.com': 'skills',
            'education.github.com': 'education'
        },
        // 需要特殊处理的站点类型
        SPECIAL_SITES: ['gist', 'status', 'skills', 'education'],
        // 简介 css 筛选器规则
        DESC_SELECTORS: {
            repository: ".f4.my-3",
            gist: ".gist-content [itemprop='about']"
        },
        OBSERVER_CONFIG: {
            childList: true,
            subtree: true,
            characterData: true,
            attributeFilter: ['value', 'placeholder', 'aria-label', 'data-confirm']
        },
    };

    let PageConfig = {
        currentPageType: null,
        staticDict: {},
        regexpRules: [],
        ignoreMutationSelectors: [],
        ignoreSelectors: [],
        characterData: null,
        tranSelectors: [],
    };

    function updatePageConfig() {
        const pageType = getPageType();

        // 如果页面类型不一致且pageType有效，则重建整个PageConfig对象
        if (PageConfig.currentPageType !== pageType && pageType) return {
            // 当前页面类型
            currentPageType: pageType,
            // 静态词库
            staticDict: {
                ...I18N[CONFIG.LANG].public.static,
                ...(I18N[CONFIG.LANG][pageType]?.static || {})
            },
            // 正则词库
            regexpRules: [
                ...I18N[CONFIG.LANG].public.regexp,
                ...(I18N[CONFIG.LANG][pageType]?.regexp || [])
            ],
            // 忽略突变元素选择器
            ignoreMutationSelectors: [
                ...I18N.conf.ignoreMutationSelectorPage['*'],
                ...(I18N.conf.ignoreMutationSelectorPage[pageType] || [])
            ],
            // 忽略元素选择器规则
            ignoreSelectors: [
                ...I18N.conf.ignoreSelectorPage['*'],
                ...(I18N.conf.ignoreSelectorPage[pageType] || [])
            ],
            // 字符数据监视开启规则
            characterData: I18N.conf.characterDataPage.includes(pageType),
            // CSS 选择器规则
            tranSelectors: [
                ...(I18N[CONFIG.LANG].public.selector || []),
                ...(I18N[CONFIG.LANG][pageType]?.selector || [])
            ],
        };
        // 如果条件不满足，则返回原本的 PageConfig，不做更改
        return PageConfig;
    }

    /**
     * watchUpdate 函数：监视页面变化，根据变化的节点进行翻译
     */
    function watchUpdate() {
        // 检测浏览器是否支持 MutationObserver
        const MutationObserver =
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver;

        // 缓存当前页面的 URL
        let previousURL = location.href;

        // 监听 document.body 下 DOM 变化，用于处理节点变化
        new MutationObserver(mutations => {
            const currentURL = location.href;

            // 如果页面的 URL 发生变化
            if (currentURL !== previousURL) {
                previousURL = currentURL;
                PageConfig = updatePageConfig();
                console.log(`DOM变化触发: 链接变化 pageType= ${PageConfig.currentPageType}`);
            }

            if (PageConfig.currentPageType) {

                // 平铺突变记录并过滤需要处理的节点（链式操作）
                // 使用 mutations.flatMap 进行筛选突变:
                //   1. 针对`节点增加`突变，后期迭代翻译的对象调整为`addedNodes`中记录的新增节点，而不是`target`，此举大幅减少重复迭代翻译
                //   2. 对于其它`属性`和特定页面`文本节点`突变，仍旧直接处理`target`
                //   3. 使用`.filter()`筛选丢弃特定页面`特定忽略元素`内突变的节点
                mutations.flatMap(({ target, addedNodes, type }) => {
                    // 处理子节点添加的情况
                    if (type === 'childList' && addedNodes.length > 0) {
                        return Array.from(addedNodes); // 将新增节点转换为数组
                    }
                    // 处理属性和文本内容变更的情况
                    else if (type === 'attributes' || (PageConfig.characterData && type === 'characterData')) {
                        return [target]; // 否则，仅处理目标节点
                    }
                    return []
                })
                // 过滤需要忽略的突变节点
                .filter(node =>
                    !PageConfig.ignoreMutationSelectors.some(selector =>
                        // 检查节点是否在忽略选择器的父元素内
                        node.parentElement?.closest(selector)
                    )
                )
                // 处理每个变化
                .forEach(node =>
                    // 递归遍历节点树进行处理
                    traverseNode(node)
                );
            }
        }).observe(document.body, CONFIG.OBSERVER_CONFIG);
    }

    /**
     * traverseNode 函数：遍历指定的节点，并对节点进行翻译。
     * @param {Node} node - 需要遍历的节点。
     */
    function traverseNode(node) {
        // 跳过忽略的节点
        const skipNode = node => PageConfig.ignoreSelectors.some(selector => node.matches?.(selector));
        if (skipNode(node)) return;

        if (node.nodeType === Node.ELEMENT_NODE) { // 元素节点处理

            // 处理不同标签的元素属性翻译
            switch (node.tagName) {
                case "RELATIVE-TIME": // 翻译时间元素
                    transTimeElement(node.shadowRoot);
                    watchTimeElement(node.shadowRoot);
                    return;

                case "INPUT":
                case "TEXTAREA": // 输入框 按钮 文本域
                    if (['button', 'submit', 'reset'].includes(node.type)) {
                        transElement(node.dataset, 'confirm'); // 翻译 浏览器 提示对话框
                        transElement(node, 'value');
                    } else {
                        transElement(node, 'placeholder');
                    }
                    break;

                case "BUTTON":
                    if (/tooltipped/.test(node.className)) transElement(node, 'ariaLabel'); // 翻译 浏览器 提示对话框
                    transElement(node, 'title'); // 翻译 浏览器 提示对话框
                    transElement(node.dataset, 'confirm'); // 翻译 浏览器 提示对话框 ok
                    transElement(node.dataset, 'confirmText'); // 翻译 浏览器 提示对话框 ok
                    transElement(node.dataset, 'confirmCancelText'); // 取消按钮 提醒
                    transElement(node, 'cancelConfirmText'); // 取消按钮 提醒
                    transElement(node.dataset, 'disableWith'); // 按钮等待提示
                    break;

                case "OPTGROUP":
                    transElement(node, 'label'); // 翻译 <optgroup> 的 label 属性
                    break;

                case "A":
                    transElement(node, 'title'); // title 属性
                    transElement(node, 'ariaLabel'); // aria-label 属性
                    break;

                case "SPAN":
                    transElement(node, 'title'); // title 属性
                    if (/tooltipped/.test(node.className)) transElement(node, 'ariaLabel');
                    transElement(node.dataset, 'visibleText'); // 按钮提示
                    break;

                default:
                    // 仅当 元素存在'tooltipped'样式 aria-label 才起效果
                    if (/tooltipped/.test(node.className)) transElement(node, 'ariaLabel'); // 带提示的元素，类似 tooltip 效果的
            }

            node.childNodes.forEach(child => traverseNode(child)); // 遍历子节点

        } else if (node.nodeType === Node.TEXT_NODE && node.length <= 500) { // 文本节点且长度小于等于 500
            transElement(node, 'data');
        }
    }

    /**
     * getPageType 函数：获取页面的类型。
     * @returns {string|boolean} 页面的类型，如果无法确定类型，那么返回 false。
     */
    function getPageType() {
        const { PAGE_MAP, SPECIAL_SITES } = CONFIG;
        const url = new URL(window.location.href);
        const { hostname, pathname } = url;

        // 基础配置 ===============================================
        const site = PAGE_MAP[hostname] || 'github'; // 通过站点映射获取基础类型
        const isLogin = document.body.classList.contains("logged-in");
        const metaLocation = document.head.querySelector('meta[name="analytics-location"]')?.content || '';

        // 页面特征检测 ============================================
        const isSession = document.body.classList.contains("session-authentication");
        const isHomepage = pathname === '/' && site === 'github';
        const isProfile = document.body.classList.contains("page-profile") || metaLocation === '/<user-name>';
        const isRepository = /\/<user-name>\/<repo-name>/.test(metaLocation);
        const isOrganization = /\/<org-login>/.test(metaLocation) || /^\/(?:orgs|organizations)/.test(pathname);

        // 正则配置 ================================================
        const { rePagePathRepo, rePagePathOrg, rePagePath } = I18N.conf;

        // 核心判断逻辑 ============================================
        let pageType;
        switch (true) { // 使用 switch(true) 模式处理多条件分支
            // 1. 登录相关页面
            case isSession:
                pageType = 'session-authentication';
                break;

            // 2. 特殊站点类型（gist/status/skills/education）
            case SPECIAL_SITES.includes(site):
                pageType = site;
                break;

            // 3. 个人资料页
            case isProfile:
                const tabParam = new URLSearchParams(url.search).get('tab');
                pageType = pathname.includes('/stars') ? 'page-profile/stars'
                         : tabParam ? `page-profile/${tabParam}`
                         : 'page-profile';
                break;

            // 4. 首页/仪表盘
            case isHomepage:
                pageType = isLogin ? 'dashboard' : 'homepage';
                break;

            // 5. 代码仓库页
            case isRepository:
                const repoMatch = pathname.match(rePagePathRepo);
                pageType = repoMatch ? `repository/${repoMatch[1]}` : 'repository';
                break;

            // 6. 组织页面
            case isOrganization:
                const orgMatch = pathname.match(rePagePathOrg);
                pageType = orgMatch ? `orgs/${orgMatch[1] || orgMatch.slice(-1)[0]}` : 'orgs';
                break;

            // 7. 默认处理逻辑
            default:
                const pathMatch = pathname.match(rePagePath);
                pageType = pathMatch ? (pathMatch[1] || pathMatch.slice(-1)[0]) : false;
        }

        // 词库校验 ================================================
        if (pageType === false || !I18N[CONFIG.LANG]?.[pageType]) {
            console.warn(`[i18n] 页面类型未匹配或词库缺失: ${pageType}`);
            return false; // 明确返回 false 表示异常
        }

        return pageType;
    }

    /**
     * transTitle 函数：翻译页面标题
     */
    function transTitle() {
        const text = document.title; // 获取标题文本内容
        let translatedText = I18N[CONFIG.LANG]['title']['static'][text] || '';
        if (!translatedText) {
            const res = I18N[CONFIG.LANG]['title'].regexp || [];
            for (const [pattern, replacement] of res) {
                translatedText = text.replace(pattern, replacement);
                if (translatedText !== text) break;
            }
        }
        document.title = translatedText;
    }

    /**
     * transTimeElement 函数：翻译时间元素文本内容。
     * @param {Element} el - 需要翻译的元素。
     */
    function transTimeElement(el) {
        const text = el.childNodes.length > 0 ? el.lastChild.textContent : el.textContent;
        const translatedText = text.replace(/^on/, "");
        if (translatedText !== text) {
            el.textContent = translatedText;
        }
    }

    /**
     * watchTimeElement 函数：监视时间元素变化, 触发和调用时间元素翻译
     * @param {Element} el - 需要监视的元素。
     */
    function watchTimeElement(el) {
        const MutationObserver =
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver;

        new MutationObserver(mutations => {
            transTimeElement(mutations[0].addedNodes[0]);
        }).observe(el, {
            childList: true
        });
    }

    /**
     * transElement 函数：翻译指定元素的文本内容或属性。
     * @param {Element|DOMStringMap} el - 需要翻译的元素或元素的数据集 (node.dataset)。
     * @param {string} field - 需要翻译的属性名称或文本内容字段。
     */
    function transElement(el, field) {
        const text = el[field]; // 获取需要翻译的文本
        if (!text) return false; // 当 text 为空时，退出函数

        const translatedText = transText(text); // 翻译后的文本
        if (translatedText) {
            el[field] = translatedText; // 替换翻译后的内容
        }
    }

    /**
     * transText 函数：翻译文本内容。
     * @param {string} text - 需要翻译的文本内容。
     * @returns {string|boolean} 翻译后的文本内容，如果没有找到对应的翻译，那么返回 false。
     */
    function transText(text) {
        // 判断是否需要跳过翻译
        //  1. 检查内容是否为空或者仅包含空白字符或数字。
        //  2. 检查内容是否仅包含中文字符。
        //  3. 检查内容是否不包含英文字母和符号。
        const shouldSkip = text => /^[\s0-9]*$/.test(text) || /^[\u4e00-\u9fa5]+$/.test(text) || !/[a-zA-Z,.]/.test(text);
        if (shouldSkip(text)) return false;

        // 清理文本内容
        const trimmedText = text.trim(); // 去除首尾空格
        const cleanedText = trimmedText.replace(/\xa0|[\s]+/g, ' '); // 去除多余空白字符（包括 &nbsp; 空格 换行符）

        // 尝试获取翻译结果
        const translatedText = fetchTranslatedText(cleanedText);

        // 如果找到翻译并且不与清理后的文本相同，则返回替换后的结果
        if (translatedText && translatedText !== cleanedText) {
            return text.replace(trimmedText, translatedText); // 替换原字符，保留首尾空白部分
        }

        return false;
    }

    /**
     * fetchTranslatedText 函数：从特定页面的词库中获得翻译文本内容。
     * @param {string} text - 需要翻译的文本内容。
     * @returns {string|boolean} 翻译后的文本内容，如果没有找到对应的翻译，那么返回 false。
     */
    function fetchTranslatedText(text) {

        // 静态翻译
        let translatedText = PageConfig.staticDict[text]; // 默认翻译 公共部分

        if (typeof translatedText === 'string') {
            return translatedText;
        }

        // 正则翻译
        if (FeatureSet.enable_RegExp) {
            for (const [pattern, replacement] of PageConfig.regexpRules) {
                translatedText = text.replace(pattern, replacement);
                if (translatedText !== text) {
                    return translatedText;
                }
            }
        }

        return false; // 没有翻译条目
    }

    /**
     * transDesc 函数：为指定的元素添加一个翻译按钮，并为该按钮添加点击事件。
     * @param {string} selector - CSS选择器，用于选择需要添加翻译按钮的元素。
     */
    function transDesc(selector) {
        // 使用 CSS 选择器选择元素
        const element = document.querySelector(selector);

        // 如果元素不存在 或者 translate-me 元素已存在，那么直接返回
        if (!element || document.getElementById('translate-me')) return false;

        // 在元素后面插入一个翻译按钮
        const buttonHTML = `<div id='translate-me' style='color: rgb(27, 149, 224); font-size: small; cursor: pointer'>翻译</div>`;
        element.insertAdjacentHTML('afterend', buttonHTML);
        const button = element.nextSibling;

        // 为翻译按钮添加点击事件
        button.addEventListener('click', () => {
            // 获取元素的文本内容
            const descText = element.textContent.trim();

            // 如果文本内容为空，那么直接返回
            if (!descText) return false;

            // 调用 transDescText 函数进行翻译
            transDescText(descText, translatedText => {
                // 翻译完成后，隐藏翻译按钮，并在元素后面插入翻译结果
                button.style.display = "none";
                const translatedHTML = `<span style='font-size: small'>由 <a target='_blank' style='color:rgb(27, 149, 224);' href='https://fanyi.iflyrec.com/text-translate'>讯飞听见</a> 翻译👇</span><br/>${translatedText}`;
                element.insertAdjacentHTML('afterend', translatedHTML);
            });
        });
    }

    /**
     * transDescText 函数：将指定的文本发送到讯飞的翻译服务进行翻译。
     * @param {string} text - 需要翻译的文本。
     * @param {function} callback - 翻译完成后的回调函数，该函数接受一个参数，即翻译后的文本。
     */
    function transDescText(text, callback) {
        // 使用 GM_xmlhttpRequest 函数发送 HTTP 请求
        GM_xmlhttpRequest({
            method: "POST", // 请求方法为 POST
            url: "https://fanyi.iflyrec.com/TJHZTranslationService/v2/textAutoTranslation", // 请求的 URL
            headers: { // 请求头
                'Content-Type': 'application/json',
                'Origin': 'https://fanyi.iflyrec.com',
            },
            data: JSON.stringify({
                "from": 2,
                "to": 1,
                "type": 1,
                "contents": [{
                    "text": text
                }]
            }), // 请求的数据
            responseType: "json", // 响应的数据类型为 JSON
            onload: (res) => {
                try {
                    const { status, response } = res;
                    const translatedText = (status === 200) ? response.biz[0].sectionResult[0].dst : "翻译失败";
                    callback(translatedText);
                } catch (error) {
                    console.error('翻译失败', error);
                    callback("翻译失败");
                }
            },
            onerror: (error) => {
                console.error('网络请求失败', error);
                callback("网络请求失败");
            }
        });
    }

    /**
     * transBySelector 函数：通过 CSS 选择器找到页面上的元素，并将其文本内容替换为预定义的翻译。
     */
    function transBySelector() {
        if (PageConfig.tranSelectors) {
            // 遍历每个翻译规则
            for (const [selector, translatedText] of PageConfig.tranSelectors) {
                // 使用 CSS 选择器找到对应的元素
                const element = document.querySelector(selector);
                // 如果找到了元素，那么将其文本内容替换为翻译后的文本
                if (element) {
                    element.textContent = translatedText;
                }
            }
        }
    }

    /**
     * registerMenuCommand 函数：注册菜单。
     */
    function registerMenuCommand() {
        const createMenuCommand = (config) => {
            const { label, key, callback } = config;
            let menuId;

            const getMenuLabel = (label, isEnabled) =>
                `${isEnabled ? "禁用" : "启用"} ${label}`;

            const toggle = () => {
                const newFeatureState = !FeatureSet[key];
                GM_setValue(key, newFeatureState);
                FeatureSet[key] = newFeatureState;
                GM_notification(`${label}已${newFeatureState ? '启用' : '禁用'}`);

                // 调用回调函数
                if (callback) callback(newFeatureState);

                // 更新菜单命令的标签
                GM_unregisterMenuCommand(menuId);
                menuId = GM_registerMenuCommand(
                    getMenuLabel(label, newFeatureState),
                    toggle
                );
            };

            // 初始注册菜单命令
            menuId = GM_registerMenuCommand(
                getMenuLabel(label, FeatureSet[key]),
                toggle
            );
        };

        const menuConfigs = [
            {
                label: "正则功能",
                key: "enable_RegExp",
                callback: (newFeatureState) => {
                    if (newFeatureState) traverseNode(document.body);
                }
            },
            {
                label: "描述翻译",
                key: "enable_transDesc",
                callback: (newFeatureState) => {
                    if (newFeatureState && CONFIG.DESC_SELECTORS[PageConfig.currentPageType]) {
                        transDesc(CONFIG.DESC_SELECTORS[PageConfig.currentPageType]);
                    } else {
                        document.getElementById('translate-me')?.remove();
                    }
                }
            }
        ];

        // 注册所有菜单项
        menuConfigs.forEach(config => createMenuCommand(config));
    };

    /**
     * init 函数：初始化翻译功能。
     */
    function init() {
        // 获取当前页面的翻译规则
        PageConfig = updatePageConfig();
        console.log(`开始pageType= ${PageConfig.currentPageType}`);

        if (PageConfig.currentPageType) traverseNode(document.body);

        // 监视页面变化
        watchUpdate();
    }

    // 设置中文环境
    document.documentElement.lang = CONFIG.LANG;

    // 监测 HTML Lang 值, 设置中文环境
    new MutationObserver(mutations => {
        if (document.documentElement.lang === "en") {
            document.documentElement.lang = CONFIG.LANG;
        }
    }).observe(document.documentElement, {
        attributeFilter: ['lang']
    });

    // 监听 Turbo 完成事件
    document.addEventListener('turbo:load', () => {
        if (!PageConfig.currentPageType) return;

        transTitle(); // 翻译页面标题
        transBySelector();

        if (FeatureSet.enable_transDesc && CONFIG.DESC_SELECTORS[PageConfig.currentPageType]) {
            transDesc(CONFIG.DESC_SELECTORS[PageConfig.currentPageType]);
        }
    });

    // 初始化菜单
    registerMenuCommand();

    // 在页面初始加载完成时执行
    window.addEventListener('DOMContentLoaded', init);

})(window, document);
