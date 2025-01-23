<div align="center"><a name="readme-top"></a>

# [GitHub 中文化插件][project-url]

> 本項目源自: [52cik/github-hans](https://github.com/52cik/github-hans)

[简体中文](./README.md) · **繁體中文**

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

## 💖 星標歷史

<a href="https://star-history.com/#maboloshi/github-chinese&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=maboloshi/github-chinese&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=maboloshi/github-chinese&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=maboloshi/github-chinese&type=Timeline" width="75%" />
  </picture>
</a>

## 🚩 功能

- 中文化 GitHub 菜單欄，標題，按鈕等公共組件
- 保留、完善正則功能
- 支持對 「項目描述」 進行人機翻譯 (參考: [k1995/github-i18n-plugin](https://github.com/k1995/github-i18n-plugin))

## 🌐 瀏覽器與腳本管理器

瀏覽器                               | 腳本管理器
:----------------------------------: | :---------:
Chrome 或 基於 Chromium 內核的瀏覽器 | [Tampermonkey][Tampermonkey] 或 [Violentmonkey][Violentmonkey]
Safari 瀏覽器（macOS, iOS, iPadOS）  | [Macaque][Macaque] 或 [Stay][Stay]
Firefox 或 基於 Gecko 內核的瀏覽器   | [Tampermonkey][Tampermonkey] 或 [Violentmonkey][Violentmonkey]
Via 瀏覽器（Android）                | 瀏覽器內自帶

## 💽 安裝

1. 安裝用戶腳本管理器。
1. 然後再點擊 [這裏][main_zh-TW.user.js]，安裝腳本即可。
1. 刷新下頁面，即可發現網站已中文化。

> [!NOTE]
> 1. **開發版**：通常比**發布版**更早進入開發和測試階段（重大版本更新前，還會專門創建新分支進行測試）。日常維護詞庫內容，並且詞庫版本號會在每周五淩晨自動更新。
>    > 註意: 
>    > - 如果版本號未更新，即使內容已更新，用戶腳本管理器仍會忽略這些更新，需要手動安裝以獲取最新內容。
> 1. **發布版**: 日常功能被凍結（除非由項目所有者進行更新）。通常在**開發版**詞庫版本號更新後的下周一淩晨，自動同步上一**開發版**的詞庫文件。通常情況下，**發布版**與**開發版**之間會存在一周的時間差。

> [!TIP]
> 1. 需要視頻教程的可以去看看[【這裏】](https://github.com/maboloshi/github-chinese/discussions/133)收錄的一些視頻

> [!IMPORTANT]
> ### 關於 「Chrome 127 及更高版本無法使用」 的問題
> 這是由於 Chrome 127 及更高版本逐步切換到 Manifest V3。目前已知腳本管理器 [Tampermonkey][Tampermonkey] 5.2.0 及以上版本能夠完美支持，而其他腳本管理器（如 Violentmonkey 等）可能無法正常運行此腳本。如果您使用的是其他腳本管理器，建議您改用支持 Manifest V3 的腳本管理器，或者將瀏覽器版本退回，等待相關腳本管理器開發者更新，或改用 Firefox 瀏覽器。詳情請參閱 [#234](https://github.com/maboloshi/github-chinese/issues/234) 討論。
> #### 解決方案：
> 1. 安裝 [Tampermonkey][Tampermonkey] 5.2.0 或更高版本。
> 1. 在瀏覽器的 「擴展程序」 管理中開啟 「開發者模式」。

## 詞庫本地調試方法

1. 安裝用戶腳本管理器 [Tampermonkey][Tampermonkey]。
1. 在瀏覽器擴展管理中，開啟 [Tampermonkey][Tampermonkey] 的 「允許訪問文件網址」。
1. 將修改的詞庫文件放到方便訪問的本地位置。
1. 安裝 [GitHub 中文化插件 - GitHub 托管【開發版】][main.user.js] 或 [GitHub 中文化插件 - GreasyFork 托管【發布版】][main(greasyfork).user.js]。
1. 回到腳本管理器，修改詞庫文件路徑，如將 `// @require      https://raw.githubusercontent.com/maboloshi/github-chinese/gh-pages/locals_zh-TW.js?v1.9.0` 改為本地路徑格式如 `file:///D:/APP/github%E9%A1%B9%E7%9B%AE/github-chinese/locals_zh-TW.js`。

> [!TIP]
> 直接將詞庫文件拖到瀏覽器的地址欄，再復製地址欄的中地址即可。

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📝 更新說明

### 2024-08-18 16:44:24

更新至 1.9.3

1. 新增功能：通過設置中文環境，自動本地化時間元素，僅保留`on`開頭的時間正則，並停用時間元素監視
1. 優化突變翻譯處理：
   - 引入`characterDataPage`規則，對特定頁面啟用`篩選字符數據`的變更
   - 引入`ignoreMutationSelectorPage`規則，忽略特定突變元素
1. 合並`reIgnoreClass，reIgnoreItemprop，ignoreId，ignoreTag`為`ignoreSelectorPage`規則，處理全局及特定頁面，忽略特定元素
1. 引入全局緩存模式，減少重復構建包括不限於基於`page`變化的忽略規則、正則規則數組等
1. 調整：更新訊飛聽見翻譯引擎v2.0
1. 優化：梳理、優化腳本
1. 調整：調整詞庫語言代碼為`zh-CN`, 與環境語言設置一致

### 2024-06-14 19:27:20

更新至 1.9.2

1. 適配`www.githubstatus.com`
1. 適配`skills.github.com`

### 2024-05-23 16:42:55

更新至 1.9.1

1. 更新`切換正則功能按鈕`

### 2023-12-09 20:46:16

 
更新至 1.9.0

> 其中, `1.9.0`: 主版本號(由項目所有者更新)

1. 重新定義版本號規則, 如`1.9.0-2023-12-09`
1. 加強: [GitHub 托管【開發版】][main.user.js]每周一淩晨自動更新`詞庫`發布版本號
1. 加強: [GreasyFork 托管【發布版】][main(greasyfork).user.js]每周五淩晨自動更新`詞庫`發布版本號, 詞庫內容同上一次[GitHub 托管【開發版】][main.user.js]
1. 加強：在 `README.md` 中自動更新貢獻者頭像
1. 更新: 忽略規則, 詞條等

### 2023-08-31 13:39:36

更新至 1.8.5

1. 優化: `transDesc 函數`代碼
1. 修復: 重復添加`translate-me`翻譯按鈕
1. 加強：`watchUpdate 函數`新增節點文本更新的情況
1. 調整: `transBySelector和transDesc函數`延遲執行時間
1. 更新: 忽略規則, 詞條等

### 2023-08-08 11:53:03

更新至 1.8.4

1. 修復: `Itemprop`過濾規則, 依然使用正則方式
1. 修復: `tooltipped`樣式提示, 依然使用正則方式

### 2023-08-07 14:41:17

更新至 1.8.3

1. 梳理、優化腳本
1. 更新: 忽略規則, 大量詞條等

### 2023-05-15 18:02:04

更新至 1.8.2

1. `greasyfork 托管`源切換到`按頁面精細化詞條模式`
1. 調整詞庫格式
1. 功能加強: 優化`元素篩選器`翻譯邏輯
1. 更新: 忽略規則, 大量詞條等

### 2023-01-22 22:01:39

更新至 1.8.1

1. 修復: #8 與 dark reader 擴展發生沖突，導致時間顯示出現問題
1. `GitHub`源開始切換到`按頁面精細化詞條模式(開發版)`, 詞庫未完全遷移適配
1. 停止`greasyfork`源詞庫文件的同步更新

### 2023-01-18 12:56:24

更新至 1.8.0

1. 刪除: `TURBO-FRAME`框架處理代碼. Github 已調整新動態加載模式, 直接檢測`url`的變化就能獲取對應的`page`信息
1. 新增: 支持時間元素的`Shadow DOM`翻譯, 並監聽變化
1. 新增: 啟用並更新`時間元素翻譯`專項正則詞條
1. 新增: 僅當`page`有效才翻譯頁面
1. 修復: 原`簡介翻譯`引擎`GitHub中文社區`失效, 改為`訊飛`引擎(測試)
1. 修復: 追加公共正則重復叠代的問題
1. 修復: 正則標記變量`RegExp`與構造函數`new RegExp`沖突
1. 更新: 忽略規則, 詞條等

預告, 下次將細化`page`匹配規則, 導致詞庫文件結構大調整, 詞庫文件會適當變大, 頁面正則更精細效率會提升

<details>
  <summary><h2>🎁 更多</h2></summary>

### 2022-07-17 14:04:44

更新至 1.7.9

GitHub 的 ajax 載入方式逐步從 [defunkt/jquery-pjax](https://github.com/defunkt/jquery-pjax) 切換到 [hotwired/turbo](turbo.hotwired.dev), 導致已有的動態監測方式逐步失效

目前, 通過以下修復:

1. 新增 `BODY` 元素新增監視
1. 解析 `TURBO-FRAME` 框架, 獲取對應的 `page`
1. 修復 github 新動態加載模式, 導致`翻譯描述`返回值無法插入
1. 修復 github 新動態加載模式, 導致`chrome`瀏覽器自帶翻譯功能卡死頁面

其他更新:

1. 修復`rePagePath`,`rePagePathRepo`,`rePagePathOrg`匹配規則，限製路徑匹配層次，排除幹擾
1. 直接使用網頁URL`document.URL`變化觸發`標題翻譯`和`JS 篩選器`翻譯
1. 修復`關閉正則`無法生效, 需要刷新頁面才生效
1. 日常更新詞庫和忽略規則
1. 更新`JS 篩選器`規則

### 2022-06-29 13:27:12

更新至 1.7.8

1. 緊急修復: GitHub 變更了`document.body`和`title`更新機製, 導致原有的`監測更新`規則部分失效, 目前使用`document.documentElement`監視整個頁面 DOM 的變更
1. 跳過`<HEAD>`標簽
1. `標題翻譯`和`JS 篩選器`翻譯, 依據 URL變化更新

### 2022-06-26 16:41:58

更新至 1.7.7

1. 新增`時間元素翻譯`功能
1. 重寫`頁面標題翻譯`函數
1. 梳理`遍歷節點`函數邏輯
1. 優化`transPage`函數，默認翻譯公共部分
1. 調整`getPage`函數, 使`ClassName匹配規則`優先
1. 優化`translate`函數, 跳過`不存在英文字母和符號,.`, 保留首尾空白部分等
1. 部分函數重命名，使用`es6`新語法
1. 日常更新詞庫和忽略規則，修復一個`JS 選擇器規則`

### 2022-05-12 13:53:46

更新至 1.7.6

1. 日常更新詞庫和忽略規則
1. 添加手動開啟/禁用正則翻譯，添加切換菜單
1. 優化翻譯文本函數：避免已翻譯詞匯二次匹配，提高效率；局部翻譯優先於全局

### 2022-02-26 12:36:14

更新至 1.7.5

### 2022-01-21 13:34:06

更新至 1.7.4

### 2021-12-26 12:01:11

更新至 1.7.3

### 2021-12-01 09:04:58

更新至 1.7.2

### 2021-11-23 10:51:22

更新許可證為 [GPL-3.0][license-url] 希望大家依據許可證使用

### 2021-10-31 21:49:00

正式發布 1.7.0 版本

### 2021-10-07 13:16:16

原作者[樓教主](https://github.com/52cik/github-hans)已停止維護多年，且近年來 GitHub 頁面結構的變化，導致原有的腳本無法正常工作。

雖然 GitHub 在被微軟售收購比較重視國際化，啟動並基本完成了GitHub 文檔的中文化。但是，關於 GitHub 頁面的中文化暫時還沒啟動。

對於，新手使用和高階使用仍會存在一定的障礙。故，本人依據個人興趣暫時進行了一定的修復和維護。

本次維護基本恢復和保留大部分功能如：頁面正則翻譯（含日期的正則）。頁面詞條可能被我切得太碎不方便後期維護（先這樣吧！）

</details>

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ✔ 待辦 (TODO)

1. 添加 GitHub 名詞解釋，新手可能不太理解部分名詞具體表達的意思，比如 `pull request`。
1. 整理部分 [Git](https://git-scm.com/) & [GitHub](https://github.com/) 學習資料, 幫助新手**更快**上手。
1. **本人英文渣渣，翻譯非常困難，急需大家 PR 共同翻譯**

## ✨ 貢獻

查看我們的[貢獻小技巧](https://github.com/maboloshi/github-chinese/issues/52)

目前已翻譯大部分常用頁面，歡迎補充完善，中文詞條在`locals.js`中。大家在補充完善的過程，請遵循以下文檔對相關術語進行翻譯：

### 相關概念及資料文檔:

1. [Pro Git 第二版 簡體中文](https://git-scm.com/book/zh/v2)
1. [Pro Git: 翻譯約定](https://github.com/progit/progit2-zh/blob/master/TRANSLATION_NOTES.asc)
1. [Git 官方軟件包的簡體中文翻譯](https://github.com/git/git/blob/master/po/zh_CN.po)
1. [GitHub 詞匯表官方譯本](https://docs.github.com/cn/get-started/quickstart/github-glossary)

## 🎨 預覽

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
  <summary><h2>🎁 打賞</h2></summary>

  <img src="https://cdn.jsdelivr.net/gh/maboloshi/maboloshi/img/weixin.jpg" alt="微信贊賞" width="30%">  <img src="https://cdn.jsdelivr.net/gh/maboloshi/maboloshi/img/alipay.jpg" alt="支付寶贊賞" width="30%">
  
</details>

## 💝 鳴謝

[maboloshi](https://github.com/maboloshi) - 項目作者

[wuyuncheng-26](https://github.com/wuyuncheng-26) - 項目協作者

[52cik](https://github.com/52cik) - 項目原作者

### 感謝所有貢獻者

一如既往，感謝我們出色的貢獻者❤️！

<!--AUTO_GENERATED_PLEASE_DONT_DELETE_IT-->
<a href="https://github.com/maboloshi" title="沙漠之子">
  <img src="https://avatars.githubusercontent.com/u/7850715?v=4" width="42;" alt="沙漠之子"/>
</a>
<a href="https://github.com/52cik" title="樓教主">
  <img src="https://avatars.githubusercontent.com/u/5033310?v=4" width="42;" alt="樓教主"/>
</a>
<a href="https://github.com/TC999" title="陳生雜物房">
  <img src="https://avatars.githubusercontent.com/u/88823709?v=4" width="42;" alt="陳生雜物房"/>
</a>
<a href="https://github.com/qznfbnj" title="其智乃反不能及">
  <img src="https://avatars.githubusercontent.com/u/100760086?v=4" width="42;" alt="其智乃反不能及"/>
</a>
<a href="https://github.com/pylover7" title="大葉子">
  <img src="https://avatars.githubusercontent.com/u/56282729?v=4" width="42;" alt="大葉子"/>
</a>
<a href="https://github.com/cat-kun" title="cat-kun">
  <img src="https://avatars.githubusercontent.com/u/8529528?v=4" width="42;" alt="cat-kun"/>
</a>
<a href="https://github.com/pecasha" title="Pecasha">
  <img src="https://avatars.githubusercontent.com/u/9607128?v=4" width="42;" alt="Pecasha"/>
</a>
<a href="https://github.com/ChinaGodMan" title="人民的勤務員">
  <img src="https://avatars.githubusercontent.com/u/96548841?v=4" width="42;" alt="人民的勤務員"/>
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

貢獻者列表，由 [GitHub Action][GitHub Action] 自動生成

<div align="right">

[![][back-to-top]](#readme-top)

</div>

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[project-url]: https://github.com/maboloshi/github-chinese "GitHub 中文化插件"
[issues-url]: https://github.com/maboloshi/github-chinese/issues "議題"
[issues-image]: https://img.shields.io/github/issues/maboloshi/github-chinese?style=flat-square&logo=github&label=Issue
[stars-url]: https://github.com/maboloshi/github-chinese/stargazers "星標"
[stars-image]: https://img.shields.io/github/stars/maboloshi/github-chinese?style=flat-square&logo=github&label=Star
[forks-url]: https://github.com/maboloshi/github-chinese/network "復刻"
[forks-image]: https://img.shields.io/github/forks/maboloshi/github-chinese?style=flat-square&logo=github&label=Fork
[license-url]: https://opensource.org/licenses/GPL-3.0  "許可證"
[license-image]: https://img.shields.io/github/license/maboloshi/github-chinese?style=flat-square&logo=github&label=License
[greasyFork-url]: https://greasyfork.org/scripts/435208  "GreasyFork - GitHub 中文化插件"
[greasyFork-image]: https://img.shields.io/badge/dynamic/json?style=flat-square&label=GreasyFork&query=total_installs&suffix=%20installs&url=https://greasyfork.org/scripts/435208.json
[Tampermonkey]: http://tampermonkey.net/ "篡改猴"
[Violentmonkey]: https://violentmonkey.github.io/ "暴力猴"
[Macaque]: https://macaque.app/ "獼猴"
[Stay]: https://apps.apple.com/cn/app/stay-for-safari-%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%B4%E4%BE%A3/id1591620171 "Stay"
[main_zh-TW.user.js]: https://github.com/maboloshi/github-chinese/raw/gh-pages/main_zh-TW.user.js "GitHub 中文化插件（繁體版） - GitHub 託管"
[main(greasyfork).user.js]: https://greasyfork.org/scripts/435208-github-%E4%B8%AD%E6%96%87%E5%8C%96%E6%8F%92%E4%BB%B6/code/GitHub%20%E4%B8%AD%E6%96%87%E5%8C%96%E6%8F%92%E4%BB%B6.user.js "GitHub 中文化插件 - GreasyFork 托管"
[GitHub Action]: https://github.com/maboloshi/github-chinese/blob/gh-pages/.github/workflows/update_contributors_images.yml
