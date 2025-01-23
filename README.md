<div align="center"><a name="readme-top"></a>

# [GitHub 中文化插件][project-url]

> 本项目源自: [52cik/github-hans](https://github.com/52cik/github-hans)

**简体中文** · [繁體中文](./README_zh-TW.md)

[![GitHub issues][issues-image]][issues-url]
[![GitHub stars][stars-image]][stars-url]
[![GitHub forks][forks-image]][forks-url]
[![license GPL-3.0][license-image]][license-url]
[![GreasyFork installs][greasyFork-image]][greasyFork-url]

<a href="https://hellogithub.com/repository/738d0abae49543f18d887a7e29ec9e90" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.hellogithub.com/v1/widgets/recommend.svg?rid=738d0abae49543f18d887a7e29ec9e90&claim_uid=zepvSg6Vwl4EqMr&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.hellogithub.com/v1/widgets/recommend.svg?rid=738d0abae49543f18d887a7e29ec9e90&claim_uid=zepvSg6Vwl4EqMr&theme=neutral" />
    <img alt="Featured｜HelloGitHub" src="https://api.hellogithub.com/v1/widgets/recommend.svg?rid=738d0abae49543f18d887a7e29ec9e90&claim_uid=zepvSg6Vwl4EqMr&theme=neutral" style="width: 250px; height: 54px;" />
  </picture>
</a>

</div>

## 💖 星标历史

<a href="https://star-history.com/#maboloshi/github-chinese&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=maboloshi/github-chinese&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=maboloshi/github-chinese&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=maboloshi/github-chinese&type=Timeline" width="75%" />
  </picture>
</a>

## 🚩 功能

- 中文化 GitHub 菜单栏，标题，按钮等公共组件
- 保留、完善正则功能
- 支持对 “项目描述” 进行人机翻译 (参考: [k1995/github-i18n-plugin](https://github.com/k1995/github-i18n-plugin))

## 🌐 浏览器与脚本管理器

浏览器                               | 脚本管理器
:----------------------------------: | :---------:
Chrome 或 基于 Chromium 内核的浏览器 | [Tampermonkey][Tampermonkey] 或 [Violentmonkey][Violentmonkey]
Safari 浏览器（macOS, iOS, iPadOS）  | [Macaque][Macaque] 或 [Stay][Stay]
Firefox 或 基于 Gecko 内核的浏览器   | [Tampermonkey][Tampermonkey] 或 [Violentmonkey][Violentmonkey]
Via 浏览器（Android）                | 浏览器内自带

## 💽 安装

1. 安装用户脚本管理器。
1. 然后再点击链接之一，安装脚本即可。
    - [GitHub 中文化插件 - GitHub 托管【开发版】][main.user.js]
    - [GitHub 中文化插件 - GreasyFork 托管【发布版】][main(greasyfork).user.js]
1. 刷新下页面，即可发现网站已中文化。

> [!NOTE]
> 1. **开发版**：通常比**发布版**更早进入开发和测试阶段（重大版本更新前，还会专门创建新分支进行测试）。日常维护词库内容，并且词库版本号会在每周五凌晨自动更新。
>    > 注意: 
>    > - 如果版本号未更新，即使内容已更新，用户脚本管理器仍会忽略这些更新，需要手动安装以获取最新内容。
> 1. **发布版**: 日常功能被冻结（除非由项目所有者进行更新）。通常在**开发版**词库版本号更新后的下周一凌晨，自动同步上一**开发版**的词库文件。通常情况下，**发布版**与**开发版**之间会存在一周的时间差。

> [!TIP]
> 1. 需要视频教程的可以去看看[【这里】](https://github.com/maboloshi/github-chinese/discussions/133)收录的一些视频

> [!IMPORTANT]
> ### 关于 “Chrome 127 及更高版本无法使用” 的问题
> 这是由于 Chrome 127 及更高版本逐步切换到 Manifest V3。目前已知脚本管理器 [Tampermonkey][Tampermonkey] 5.2.0 及以上版本能够完美支持，而其他脚本管理器（如 Violentmonkey 等）可能无法正常运行此脚本。如果您使用的是其他脚本管理器，建议您改用支持 Manifest V3 的脚本管理器，或者将浏览器版本退回，等待相关脚本管理器开发者更新，或改用 Firefox 浏览器。详情请参阅 [#234](https://github.com/maboloshi/github-chinese/issues/234) 讨论。
> #### 解决方案：
> 1. 安装 [Tampermonkey][Tampermonkey] 5.2.0 或更高版本。
> 1. 在浏览器的 “扩展程序” 管理中开启 “开发者模式”。

## 词库本地调试方法

1. 安装用户脚本管理器 [Tampermonkey][Tampermonkey]。
1. 在浏览器扩展管理中，开启 [Tampermonkey][Tampermonkey] 的 “允许访问文件网址”。
1. 将修改的词库文件放到方便访问的本地位置。
1. 安装 [GitHub 中文化插件 - GitHub 托管【开发版】][main.user.js] 或 [GitHub 中文化插件 - GreasyFork 托管【发布版】][main(greasyfork).user.js]。
1. 回到脚本管理器，修改词库文件路径，如将 `// @require      https://raw.githubusercontent.com/maboloshi/github-chinese/gh-pages/locals.js?v1.9.0` 改为本地路径格式如 `file:///D:/APP/github%E9%A1%B9%E7%9B%AE/github-chinese/locals.js`。

> [!TIP]
> 直接将词库文件拖到浏览器的地址栏，再复制地址栏的中地址即可。

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📝 更新说明

### 2024-08-18 16:44:24

更新至 1.9.3

1. 新增功能：通过设置中文环境，自动本地化时间元素，仅保留`on`开头的时间正则，并停用时间元素监视
1. 优化突变翻译处理：
   - 引入`characterDataPage`规则，对特定页面启用`筛选字符数据`的变更
   - 引入`ignoreMutationSelectorPage`规则，忽略特定突变元素
1. 合并`reIgnoreClass，reIgnoreItemprop，ignoreId，ignoreTag`为`ignoreSelectorPage`规则，处理全局及特定页面，忽略特定元素
1. 引入全局缓存模式，减少重复构建包括不限于基于`page`变化的忽略规则、正则规则数组等
1. 调整：更新讯飞听见翻译引擎v2.0
1. 优化：梳理、优化脚本
1. 调整：调整词库语言代码为`zh-CN`, 与环境语言设置一致

### 2024-06-14 19:27:20

更新至 1.9.2

1. 适配`www.githubstatus.com`
1. 适配`skills.github.com`

### 2024-05-23 16:42:55

更新至 1.9.1

1. 更新`切换正则功能按钮`

### 2023-12-09 20:46:16

 
更新至 1.9.0

> 其中, `1.9.0`: 主版本号(由项目所有者更新)

1. 重新定义版本号规则, 如`1.9.0-2023-12-09`
1. 加强: [GitHub 托管【开发版】][main.user.js]每周一凌晨自动更新`词库`发布版本号
1. 加强: [GreasyFork 托管【发布版】][main(greasyfork).user.js]每周五凌晨自动更新`词库`发布版本号, 词库内容同上一次[GitHub 托管【开发版】][main.user.js]
1. 加强：在 `README.md` 中自动更新贡献者头像
1. 更新: 忽略规则, 词条等

### 2023-08-31 13:39:36

更新至 1.8.5

1. 优化: `transDesc 函数`代码
1. 修复: 重复添加`translate-me`翻译按钮
1. 加强：`watchUpdate 函数`新增节点文本更新的情况
1. 调整: `transBySelector和transDesc函数`延迟执行时间
1. 更新: 忽略规则, 词条等

### 2023-08-08 11:53:03

更新至 1.8.4

1. 修复: `Itemprop`过滤规则, 依然使用正则方式
1. 修复: `tooltipped`样式提示, 依然使用正则方式

### 2023-08-07 14:41:17

更新至 1.8.3

1. 梳理、优化脚本
1. 更新: 忽略规则, 大量词条等

### 2023-05-15 18:02:04

更新至 1.8.2

1. `greasyfork 托管`源切换到`按页面精细化词条模式`
1. 调整词库格式
1. 功能加强: 优化`元素筛选器`翻译逻辑
1. 更新: 忽略规则, 大量词条等

### 2023-01-22 22:01:39

更新至 1.8.1

1. 修复: #8 与 dark reader 扩展发生冲突，导致时间显示出现问题
1. `GitHub`源开始切换到`按页面精细化词条模式(开发版)`, 词库未完全迁移适配
1. 停止`greasyfork`源词库文件的同步更新

### 2023-01-18 12:56:24

更新至 1.8.0

1. 删除: `TURBO-FRAME`框架处理代码. Github 已调整新动态加载模式, 直接检测`url`的变化就能获取对应的`page`信息
1. 新增: 支持时间元素的`Shadow DOM`翻译, 并监听变化
1. 新增: 启用并更新`时间元素翻译`专项正则词条
1. 新增: 仅当`page`有效才翻译页面
1. 修复: 原`简介翻译`引擎`GitHub中文社区`失效, 改为`讯飞`引擎(测试)
1. 修复: 追加公共正则重复迭代的问题
1. 修复: 正则标记变量`RegExp`与构造函数`new RegExp`冲突
1. 更新: 忽略规则, 词条等

预告, 下次将细化`page`匹配规则, 导致词库文件结构大调整, 词库文件会适当变大, 页面正则更精细效率会提升

<details>
  <summary><h2>🎁 更多</h2></summary>

### 2022-07-17 14:04:44

更新至 1.7.9

GitHub 的 ajax 载入方式逐步从 [defunkt/jquery-pjax](https://github.com/defunkt/jquery-pjax) 切换到 [hotwired/turbo](turbo.hotwired.dev), 导致已有的动态监测方式逐步失效

目前, 通过以下修复:

1. 新增 `BODY` 元素新增监视
1. 解析 `TURBO-FRAME` 框架, 获取对应的 `page`
1. 修复 github 新动态加载模式, 导致`翻译描述`返回值无法插入
1. 修复 github 新动态加载模式, 导致`chrome`浏览器自带翻译功能卡死页面

其他更新:

1. 修复`rePagePath`,`rePagePathRepo`,`rePagePathOrg`匹配规则，限制路径匹配层次，排除干扰
1. 直接使用网页URL`document.URL`变化触发`标题翻译`和`JS 筛选器`翻译
1. 修复`关闭正则`无法生效, 需要刷新页面才生效
1. 日常更新词库和忽略规则
1. 更新`JS 筛选器`规则

### 2022-06-29 13:27:12

更新至 1.7.8

1. 紧急修复: GitHub 变更了`document.body`和`title`更新机制, 导致原有的`监测更新`规则部分失效, 目前使用`document.documentElement`监视整个页面 DOM 的变更
1. 跳过`<HEAD>`标签
1. `标题翻译`和`JS 筛选器`翻译, 依据 URL变化更新

### 2022-06-26 16:41:58

更新至 1.7.7

1. 新增`时间元素翻译`功能
1. 重写`页面标题翻译`函数
1. 梳理`遍历节点`函数逻辑
1. 优化`transPage`函数，默认翻译公共部分
1. 调整`getPage`函数, 使`ClassName匹配规则`优先
1. 优化`translate`函数, 跳过`不存在英文字母和符号,.`, 保留首尾空白部分等
1. 部分函数重命名，使用`es6`新语法
1. 日常更新词库和忽略规则，修复一个`JS 选择器规则`

### 2022-05-12 13:53:46

更新至 1.7.6

1. 日常更新词库和忽略规则
1. 添加手动开启/禁用正则翻译，添加切换菜单
1. 优化翻译文本函数：避免已翻译词汇二次匹配，提高效率；局部翻译优先于全局

### 2022-02-26 12:36:14

更新至 1.7.5

### 2022-01-21 13:34:06

更新至 1.7.4

### 2021-12-26 12:01:11

更新至 1.7.3

### 2021-12-01 09:04:58

更新至 1.7.2

### 2021-11-23 10:51:22

更新许可证为 [GPL-3.0][license-url] 希望大家依据许可证使用

### 2021-10-31 21:49:00

正式发布 1.7.0 版本

### 2021-10-07 13:16:16

原作者[楼教主](https://github.com/52cik/github-hans)已停止维护多年，且近年来 GitHub 页面结构的变化，导致原有的脚本无法正常工作。

虽然 GitHub 在被微软售收购比较重视国际化，启动并基本完成了GitHub 文档的中文化。但是，关于 GitHub 页面的中文化暂时还没启动。

对于，新手使用和高阶使用仍会存在一定的障碍。故，本人依据个人兴趣暂时进行了一定的修复和维护。

本次维护基本恢复和保留大部分功能如：页面正则翻译（含日期的正则）。页面词条可能被我切得太碎不方便后期维护（先这样吧！）

</details>

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ✔ 待办 (TODO)

1. 添加 GitHub 名词解释，新手可能不太理解部分名词具体表达的意思，比如 `pull request`。
1. 整理部分 [Git](https://git-scm.com/) & [GitHub](https://github.com/) 学习资料, 帮助新手**更快**上手。
1. **本人英文渣渣，翻译非常困难，急需大家 PR 共同翻译**

## ✨ 贡献

查看我们的[贡献小技巧](https://github.com/maboloshi/github-chinese/issues/52)

目前已翻译大部分常用页面，欢迎补充完善，中文词条在`locals.js`中。大家在补充完善的过程，请遵循以下文档对相关术语进行翻译：

### 相关概念及资料文档:

1. [Pro Git 第二版 简体中文](https://git-scm.com/book/zh/v2)
1. [Pro Git: 翻译约定](https://github.com/progit/progit2-zh/blob/master/TRANSLATION_NOTES.asc)
1. [Git 官方软件包的简体中文翻译](https://github.com/git/git/blob/master/po/zh_CN.po)
1. [GitHub 词汇表官方译本](https://docs.github.com/cn/get-started/quickstart/github-glossary)

## 🎨 预览

  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/maboloshi/github-chinese/gh-pages/preview/img1.png"/>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/maboloshi/github-chinese/gh-pages/preview/img3.png"/>
    <img src="https://raw.githubusercontent.com/maboloshi/github-chinese/gh-pages/preview/img1.png" width="75%" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/maboloshi/github-chinese/gh-pages/preview/img2.png"/>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/maboloshi/github-chinese/gh-pages/preview/img4.png"/>
    <img src="https://raw.githubusercontent.com/maboloshi/github-chinese/gh-pages/preview/img2.png" width="75%" />
  </picture>

<details>
  <summary><h2>🎁 打赏</h2></summary>

  <img src="https://cdn.jsdelivr.net/gh/maboloshi/maboloshi/img/weixin.jpg" alt="微信赞赏" width="30%">  <img src="https://cdn.jsdelivr.net/gh/maboloshi/maboloshi/img/alipay.jpg" alt="支付宝赞赏" width="30%">
  
</details>

## 💝 鸣谢

[maboloshi](https://github.com/maboloshi) - 项目作者

[wuyuncheng-26](https://github.com/wuyuncheng-26) - 项目协作者

[52cik](https://github.com/52cik) - 项目原作者

### 感谢所有贡献者

一如既往，感谢我们出色的贡献者❤️！

<!--AUTO_GENERATED_PLEASE_DONT_DELETE_IT-->
<a href="https://github.com/maboloshi" title="沙漠之子">
  <img src="https://avatars.githubusercontent.com/u/7850715?v=4" width="42;" alt="沙漠之子"/>
</a>
<a href="https://github.com/52cik" title="楼教主">
  <img src="https://avatars.githubusercontent.com/u/5033310?v=4" width="42;" alt="楼教主"/>
</a>
<a href="https://github.com/TC999" title="陈生杂物房">
  <img src="https://avatars.githubusercontent.com/u/88823709?v=4" width="42;" alt="陈生杂物房"/>
</a>
<a href="https://github.com/qznfbnj" title="其智乃反不能及">
  <img src="https://avatars.githubusercontent.com/u/100760086?v=4" width="42;" alt="其智乃反不能及"/>
</a>
<a href="https://github.com/pylover7" title="大叶子">
  <img src="https://avatars.githubusercontent.com/u/56282729?v=4" width="42;" alt="大叶子"/>
</a>
<a href="https://github.com/cat-kun" title="cat-kun">
  <img src="https://avatars.githubusercontent.com/u/8529528?v=4" width="42;" alt="cat-kun"/>
</a>
<a href="https://github.com/pecasha" title="Pecasha">
  <img src="https://avatars.githubusercontent.com/u/9607128?v=4" width="42;" alt="Pecasha"/>
</a>
<a href="https://github.com/ChinaGodMan" title="人民的勤务员">
  <img src="https://avatars.githubusercontent.com/u/96548841?v=4" width="42;" alt="人民的勤务员"/>
</a>
<a href="https://github.com/buiawpkgew1" title="菾凴">
  <img src="https://avatars.githubusercontent.com/u/71136405?v=4" width="42;" alt="菾凴"/>
</a>
<a href="https://github.com/wyc-26" title="wyc-26">
  <img src="https://avatars.githubusercontent.com/u/154735436?v=4" width="42;" alt="wyc-26"/>
</a>
<a href="https://github.com/YiShengJunn" title="益生君">
  <img src="https://avatars.githubusercontent.com/u/134821571?v=4" width="42;" alt="益生君"/>
</a>
<a href="https://github.com/3DMXM" title="小莫">
  <img src="https://avatars.githubusercontent.com/u/28587093?v=4" width="42;" alt="小莫"/>
</a>
<a href="https://github.com/xuexb" title="前端小武">
  <img src="https://avatars.githubusercontent.com/u/3872051?v=4" width="42;" alt="前端小武"/>
</a>
<a href="https://github.com/wang4yu6peng13" title="wang4yu6peng13">
  <img src="https://avatars.githubusercontent.com/u/10207042?v=4" width="42;" alt="wang4yu6peng13"/>
</a>
<a href="https://github.com/pangshitong" title="pangshitong">
  <img src="https://avatars.githubusercontent.com/u/41714457?v=4" width="42;" alt="pangshitong"/>
</a>
<a href="https://github.com/daydaygo" title="dayday">
  <img src="https://avatars.githubusercontent.com/u/3986303?v=4" width="42;" alt="dayday"/>
</a>
<a href="https://github.com/heicks" title="create new ██████╗  ██╔══██╗ ██████╔╝ ██╔══██╗ ██████╔╝ ╚═════╝  　　██╗ 　  ██╗ 　　██║ 　  ██║ 　　██║  　 ██║ 　　██║  　 ██║ 　　╚█████╔╝  　　╚═════╝  ███████╗ ██╔════╝　 ██║████═╗　 ██║　   ██　║ ╚██████╔╝　 　╚══════╝">
  <img src="https://avatars.githubusercontent.com/u/12287943?v=4" width="42;" alt="create new ██████╗  ██╔══██╗ ██████╔╝ ██╔══██╗ ██████╔╝ ╚═════╝  　　██╗ 　  ██╗ 　　██║ 　  ██║ 　　██║  　 ██║ 　　██║  　 ██║ 　　╚█████╔╝  　　╚═════╝  ███████╗ ██╔════╝　 ██║████═╗　 ██║　   ██　║ ╚██████╔╝　 　╚══════╝"/>
</a>
<a href="https://github.com/KS-OTO" title="KS-OTO">
  <img src="https://avatars.githubusercontent.com/u/6616413?v=4" width="42;" alt="KS-OTO"/>
</a>
<a href="https://github.com/swsoyee" title="InfinityLoop">
  <img src="https://avatars.githubusercontent.com/u/20528423?v=4" width="42;" alt="InfinityLoop"/>
</a>
<a href="https://github.com/ImgBotApp" title="Imgbot">
  <img src="https://avatars.githubusercontent.com/u/31427850?v=4" width="42;" alt="Imgbot"/>
</a>
<a href="https://github.com/CN-traveler" title="CN-traveler">
  <img src="https://avatars.githubusercontent.com/u/55753029?v=4" width="42;" alt="CN-traveler"/>
</a>
<!--AUTO_GENERATED_PLEASE_DONT_DELETE_IT-END-->

贡献者列表，由 [GitHub Action][GitHub Action] 自动生成

<div align="right">

[![][back-to-top]](#readme-top)

</div>

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[project-url]: https://github.com/maboloshi/github-chinese "GitHub 中文化插件"
[issues-url]: https://github.com/maboloshi/github-chinese/issues "议题"
[issues-image]: https://img.shields.io/github/issues/maboloshi/github-chinese?style=flat-square&logo=github&label=Issue
[stars-url]: https://github.com/maboloshi/github-chinese/stargazers "星标"
[stars-image]: https://img.shields.io/github/stars/maboloshi/github-chinese?style=flat-square&logo=github&label=Star
[forks-url]: https://github.com/maboloshi/github-chinese/network "复刻"
[forks-image]: https://img.shields.io/github/forks/maboloshi/github-chinese?style=flat-square&logo=github&label=Fork
[license-url]: https://opensource.org/licenses/GPL-3.0  "许可证"
[license-image]: https://img.shields.io/github/license/maboloshi/github-chinese?style=flat-square&logo=github&label=License
[greasyFork-url]: https://greasyfork.org/scripts/435208  "GreasyFork - GitHub 中文化插件"
[greasyFork-image]: https://img.shields.io/badge/dynamic/json?style=flat-square&label=GreasyFork&query=total_installs&suffix=%20installs&url=https://greasyfork.org/scripts/435208.json
[Tampermonkey]: http://tampermonkey.net/ "篡改猴"
[Violentmonkey]: https://violentmonkey.github.io/ "暴力猴"
[Macaque]: https://macaque.app/ "猕猴"
[Stay]: https://apps.apple.com/cn/app/stay-for-safari-%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%B4%E4%BE%A3/id1591620171 "Stay"
[main.user.js]: https://github.com/maboloshi/github-chinese/raw/gh-pages/main.user.js "GitHub 中文化插件 - GitHub 托管"
[main(greasyfork).user.js]: https://greasyfork.org/scripts/435208-github-%E4%B8%AD%E6%96%87%E5%8C%96%E6%8F%92%E4%BB%B6/code/GitHub%20%E4%B8%AD%E6%96%87%E5%8C%96%E6%8F%92%E4%BB%B6.user.js "GitHub 中文化插件 - GreasyFork 托管"
[GitHub Action]: https://github.com/maboloshi/github-chinese/blob/gh-pages/.github/workflows/update_contributors_images.yml
