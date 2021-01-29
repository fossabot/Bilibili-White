![Windows 8](https://img.shields.io/badge/Microsoft_Windows_8-pass-green.svg?longCache=true) ![Chrome 87](https://img.shields.io/badge/Google_Chrome_87-pass-green.svg?longCache=true) ![Firefox 83](https://img.shields.io/badge/Mozilla_Firefox_83-pass-green.svg?longCache=true) ![Tampermonkey 4.10](https://img.shields.io/badge/Tampermonkey_4.10-pass-green.svg?longCache=true)  

[Tampermonkey](https://www.tampermonkey.net/)（chrome）脚本，通过重写网页框架的方式还原B站旧版页面。
尽量调用B站原生脚本进行重写，再尝试修复一些失效功能。   
版本更新时部分涉及原生脚本的修改以及其他模块的改进由于CDN可能会有24h以内的延迟。

---
### 效果预览
![binguo.png](https://cdn.jsdelivr.net/gh/MotooriKashin/Bilibili-Old/src/preview.png)

### 脚本实现
- 重写
   + B站主页：[www.bilibili.com](https://www.bilibili.com)
   + av/BV：[av50619577](https://www.bilibili.com/video/av50619577 "Brambly Boundaries")、[BV1w4411b7ph](https://www.bilibili.com/video/BV1w4411b7ph "Brambly Boundaries")
   + Bangumi(ss/ep)：[ss3398](https://www.bilibili.com/bangumi/play/ss3398 "冰菓") 、 [ep84776](https://www.bilibili.com/bangumi/play/ep84776 "深具传统的古典文学部之重生") 、 [ss12116](https://www.bilibili.com/bangumi/play/ss12116/ "声之形")
   + 稍后再看：[list](https://www.bilibili.com/watchlater/#/list "播放列表")、[watchlater](https://www.bilibili.com/medialist/play/watchlater "播放全部")
   + 收藏播放：[ml182603655](https://www.bilibili.com/medialist/play/ml182603655 "bilibili moe 2018 日本动画场应援")
   + 嵌入播放器：[blackboard](https://www.bilibili.com/blackboard/topic/activity-2020bangumiQ1_web.html "bilibili 2020 一月新番导视")、[campus](https://campus.bilibili.com/index.html "哔哩哔哩校园招聘")、[biligame](https://www.biligame.com/detail/?id=101644 "魔法纪录  魔法少女小圆外传")、[moegirl](https://zh.moegirl.org/%E4%B8%9C%E6%96%B9M-1%E6%BC%AB%E6%89%8D "东方M-1漫才")、~~[mylist](https://www.bilibili.com/mylist8 "缘之空")~~
   + 排行榜：[ranking](https://www.bilibili.com/ranking)、[popular](https://www.bilibili.com/v/popular)
   + ~~播单：[pl769](https://www.bilibili.com/playlist/video/pl769 "bilibili moe 2018 日本动画场应援")、[detail](https://www.bilibili.com/playlist/detail/pl769 "bilibili moe 2018 日本动画场应援")~~
- 其他
   + 旧版顶栏/底栏
   + BV=>av
   + 分集数据
   + 旧版页面点赞
   + 下载视频
   + 移除付费预览框
   + 查询注册时间
   + 评论楼层
   + 失效视频
   + 直播拦截
   + 新版弹幕/实时弹幕
   + 字幕弹幕
   + 视频历史
   + 查询弹幕发送者
   + 自动宽频
   + 自动关弹幕
   + 自动滚动到播放器

*功能详情请在设置里查看，部分功能默认不生效也请在设置里启用*

---
### 设置相关
**设置入口比较隐蔽，动图指导请戳[这个动图](https://s1.ax1x.com/2020/04/07/GgUKUS.gif)。**   
上面所列出的部分功能默认不会生效，需要在设置里自行启用。  
设置入口是页面右下角一个白色贴边的浮动块，鼠标放上去会滑出来。  
设置里为每个功能都提供了一个开关，并在鼠标焦点时显示详细说明，切换开关状态并刷新页面即可。  
设置数据储存在脚本管理器中，与登录与否、账号不挂钩，可在脚本管理器中查看。

---
### 下载视频
在播放器画面上右键选择下载视频，可以调出页面底部的下载面板：

![dash](https://cdn.jsdelivr.net/gh/MotooriKashin/Bilibili-Old/src/download.png)

右键另存为即可。需要注意的是：
1. 脚本只提供下载链接，右键调用的是浏览器自带的下载功能。当然也可以右键“使用IDM下载链接”，前提是安装了IDM程序及扩展。
2. 不要使用左键点击，因为B站资源服务器与主站主机不一致，浏览器的同源策略拒绝承认下载标签，只会跳转到对应链接而不会触发下载功能。当然IDM可以突破这种限制，直接捕获下载链接，前提资源文件的拓展名在IDM自动下载类型列表之内。
3. 直接复制视频链接到第三方下载工具是无效的，错误码：403。因为B站资源服务器防盗链策略，需要的话请配置`referer`为在B站主域名（*.bilibili.com）下并设置任意有效的`user agent`即可。IDM捕获和右键调用会自动传递这两项，所以也不要直接复制链接地址。  
   *当然对于无法在线播放的APP限制视频，这样传递给IDM的内容也是无效的，需要修改为APP端UA`Bilibili Freedoooooom/MarkII`并清空referer。*
4. 下载内容分为5档，缺少某档说明没获取到对应类型文件。

| 类型 | 后缀 | 说明 |
| ---- | ---- | ---- |
| mp4 | .mp4 | mp4格式的视频文件，只提供一档画质，标称1080P实际对于低画质视频就是最高画质。 |
| flv | .flv | flv格式的视频文件，不分段基本等同mp4，分段则须自行合并所有分段。 |
| avc | .m4v | avc(h.264)编码的视频轨道，单独下下来的话就是一个没有音频部分的视频文件，所以需要额外下载aac音频轨道，再自行封装成完整视频文件。 |
| hev | .m4v | hevc(h.265)编码的视频轨道，也需要额外下载aac音频轨道并自行封装成完整视频文件。比avc格式拥有更高的压缩效率(即相同画质下文件大小更小)，但对兼容性较差，目前大部分浏览器都不支持在线播放这种格式的视频，下载下来本地播放的话就无所谓了。另外B站目前提供的视频最高画质“HDR”只有hev的版本，就更没得选择了。 |
| aac | .m4a | aac格式音频轨道，也只提供这种格式。音频文件相比于视频来说也不大，三种码率选择码率最高(即文件最大)的即可。 |

*设置里启用“其他下载”将在下载面板上提供媒体资源之外的内容下载选项，包括弹幕、封面、CC字幕。对于弹幕额外开启“新版弹幕”的话提供的是新版proto弹幕转化而来的xml文件。*

---
### 已知问题
*以下问题这里可能处于并将长期处于无法解决状态，请多担待！如能提供相关帮助，不胜感激！*  
1. 刷新能解决一半问题，**页面载入异常时请先尝试刷新，硬刷新更佳(`Shift + F5`或`Ctrl + Shift + R`)。** 跨版本升级脚本报错可能是模块未同步更新导致的，可以尝试卸载本脚本，然后重新安装以刷新模块缓存。  
2. 由于实现机制做不到在浏览器访问新版页面之前启用旧版页面，所以旧版页面载入比较慢且新版页面可能一闪而过，主要取决于网络连接速度及网络延迟。
3. Firefox 79及后续部分版本无法良好支持旧版播放页面，但目前83版已恢复正常。
3. 旧版播放器已失去官方维护，版本停留在`2019-10-31 07:38:36`，所以新版播放器互动视频、全景视频、高能进度条等功能是不支持的，互动视频脚本已主动忽略不会启用旧版，全景视频无法移动视角，CC字幕有[Bilibili CC字幕工具](https://greasyfork.org/scripts/378513)提供第三方支持。
4. 对于HDR画质，由于只有hev(h.265)格式，绝大部分浏览器都不支持，所以虽然已经使旧版播放器获取到了该画质选项，也是切换不了的，即使提示切换成功，播放的仍是切换之前的画质。
5. 主页内容改版极大，旧版很多接口已出现问题，脚本已将被废弃的广告区替换为资讯区的内容，但B站并不提供资讯区的排行所以右边排行榜无法获取。推荐视频不再提供三日/昨日/一周分类，已屏蔽对应的切换按钮。
6. 旧版播放页面的充电接口是失效的，为避免财产损失请不要使用，新版播放页面也不提供充电入口，需要给UP主充电请移步对应的空间。
7. 替换嵌入播放器后顶层页面对于播放器的控制将失效，脚本也无暇去一一适配，不过涉及的页面也不多，已知的只有拜年祭2020专题页面。
8. 收藏列表的播放页面并不存在对应的旧版，脚本使用重定向到av页并载入稍后再看列表进行模拟，但并不完美，请尽量不要在播放列表太大时启用。已知稍后再看列表上限是100，用来模拟容量为999的收藏列表极为卡顿。
9. 查询弹幕发送者功能是通过哈希反推，存在哈希碰撞的可能性，所以结果未必可靠，仅供参考。
10. 10月港澳台新番为生肉+CC字幕形式，要使旧版播放器支持CC字幕请务必安装[Bilibili CC字幕工具](https://greasyfork.org/scripts/378513)以载入字幕。
11. 旧版弹幕默认接口已获取不到90分钟以后的弹幕数据，对于时长大于90分钟的电影等视频，会出现90分钟以后无弹幕的情况，只能在设置里启用“新版弹幕”解决。另外旧版实时弹幕也已失效，同样可在设置里启用“实时弹幕”加以修复。

---
### 兼容相关
个人目前主要使用平台数据如下
```
Microsoft Windows 8 (Build 6.2.9200.16384) （64 位）  
Google Chrome 88.0.4324.104 (正式版本) （64 位） (cohort: Stable)  
Tampermonkey BETA 4.10.6125
```
平台
- Firefox 79 及等部分版本的浏览器无法重写旧版播放页面。
- 不支持Greasemonkey 4。

脚本及扩展

其实主要是`document.write()`方法的影响：将导致其他以`run-at document-start`注入的其他脚本异常。
- `GM_setValue()`方法失效，无法保存数据到脚本管理器
- `addEventListener`、`document.onclick`等回调失效

| 脚本/扩展 | 兼容性 | 详细 |
| ---- | ---- | ---- |
| [Bilibili Evolved](https://github.com/the1812/Bilibili-Evolved) | 部分失效 | 在旧版页面无法修改设置 “简化主页”冲突 快捷键拓展部分未适配|
| [解除B站区域限制](https://greasyfork.org/scripts/25718) | 正常 | 偶尔不会在旧版页面绘制设置入口 可前往媒体页调整设置 |
| [Bilibili 修车插件](https://greasyfork.org/scripts/374449) | 正常 | 建议`run-at document-start` 建议只在需要时启用该脚本|
| [IDM Integration Module](http://www.internetdownloadmanager.com) | 浮动条失效 | 无法嗅探旧版页面媒体 |
| [smoothscroll](http://iamdustan.com/smoothscroll/) | 完全失效 | 平滑滚动失效 |

---
### 隐私相关
脚本会读取您的部分信息
- cookies
   - DedeUserID：用于判断是否登录
   - bili_jct：用于与B站后端进行操作验证

脚本申请了跨域资源
- `GM_xmlhttpRequest`：xhr跨域，相关`@connect`元数据如下：
   - [BiliPlus](https://www.biliplus.com/)/[Bilibilijj](https://www.jijidown.com/)：用于获取缓存的失效视频标题和封面
   - [mcbbs](https://www.mcbbs.net)：用于获取APP端的鉴权`access_key`，只在解除限制功能同时开启“会员授权”时
   - [bilibili](https://www.bilibili.com)：用于获取无[CROS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS "Cross-origin resource sharing")权限B站数据

- `GM_getResourceURL`/`GM_getResourceURL`：资源跨域，相关`@resource`元数据如下：

| 文件名 | 类型 | 说明 |
| ---- | ---- | ---- |
| [av.html](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/av.html) | html | 原生旧版av页备份，保留普适性框架，自动生成内容 |
| [watchlater.html](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/watchlater.html) | html | 原生旧版稍后再看备份，保留普适性框架，自动生成内容 |
| [bangumi.html](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/bangumi.html)/[cinema.html](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/cinema.html) | html | 原生旧版Bangumi页备份，保留普适性框架，自动生成内容 |
| [playlist.html](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/playlist.html)/[playlist.html](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/playlistdetail.html) | html | 原生旧版播单页备份，保留普适性框架，自动生成内容 |
| [index.html](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/index.html) | html | 原生旧版主页备份，保留普适性框架，自动生成内容 |
| [ui.css](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/ui.css) | css | 全局层叠样式表 |
| [crc.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/crc.js) | js | 弹幕反查crc逆向引擎 |
| [md5.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/md5.js) | js | MD5哈希引擎 |
| [initialstate.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/initialstate.js) | js | \_\_INITIAL\_STATE\_\_配置模块，补全网页框架所需特异性信息 |
| [ui.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/ui.js) | js | UI模块，负责脚本设置界面绘制和设置调整功能 |
| [debug.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/debug.js) | js | 调试模块，基本上是`console`的再封装 |
| [xhr.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/xhr.js) | js | xhr模块，`XMLHttpRequest`的封装，集成了`GM_xmlhttpRequest` |
| [download.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/download.js) | js | 下载模块，负责下载内容获取、构造，以及下载面板绘制 |
| [rewrite.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/rewrite.js) | js | 重写模块，调用对应网页框架进行页面重写 |
|[reset.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/reset.js) | js | 处理模块，负责一般的非重写处理 |
| [define.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/define.js) | js | 函数模块，定义了一些可能用到的小函数 |
| [xhrhook.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/xhrhook.js) | js | xhrhook模块，负责xhr包括jsonp的拦截、修改 |
| [config.json](https://github.com/MotooriKashin/Bilibili-Old/tree/master/config.json) | json | 默认设置，包含设置的详细说明 |
| [playlist.json](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/playlist.json) | json | 一例播单\_\_INITIAL\_STATE\_\_数据存档以作留念 |
| [sort.json](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/sort.json) | json | 分区对照表，用于修复旧版页面无法识别的分区 |
| [search.json](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/search.json) | json | 无效参数表，用于识别无效链接参数 |
| [protobuf.json](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/protobuf.json) | json | 弹幕proto表，用于解析proto弹幕 |

脚本引用了部分公开库
- [protobuf](https://github.com/protobufjs/protobuf.js)：解码新版proto弹幕
- [toastr](https://github.com/CodeSeven/toastr/)：实现通知模块

脚本使用了部分原生脚本历史版本并可能进行了修改
- [comment.min.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/comment.min.js) 2019年12月的备份，进行了部分修改用以找回新版移除评论区小页码区域及恢复旧版评论排序
- [video.min.js](https://github.com/MotooriKashin/Bilibili-Old/tree/master/src/video.min.js) 2019年12月的备份，进行了部分修改以支持4K、HDR清晰度

---
### 参考致谢
- [protobuf](https://github.com/protobufjs/protobuf.js)（BSD 3-Clause许可）：protobuf.js库
- [toastr](https://github.com/CodeSeven/toastr/)（BSD 3-Clause许可）：toastr库，使用原生JavaScript重新实现
- [Wayback Machine](https://archive.org/web/)：B站旧版网页源代码
- [indefined](https://github.com/indefined/)：脚本原型及指导
- [BiliPlus](https://www.biliplus.com/)/[Bilibilijj](https://www.jijidown.com/)：第三方数据接口
- [哔哩哔哩注册时间查询助手](https://greasyfork.org/zh-CN/scripts/382542)：注册时间样式参考
- [mcfx](https://www.zhihu.com/question/381784377/answer/1099438784)：av/BV转化算法的python源码
- [Bilibili番剧显示单集信息](https://greasyfork.org/scripts/37970)：番剧分集信息接口
- [Bilibili Evolved](https://github.com/the1812/Bilibili-Evolved)：兼容问题启发及部分实现参考
- [Bilibili\_video\_download](https://github.com/Henryhaohao/Bilibili_video_download)：playurl接口算法
- [解除B站区域限制](https://greasyfork.org/scripts/25718)：BPplayurl接口参考、授权登录接口
- [YouTube Links](https://greasyfork.org/zh-CN/scripts/5566)：下载面板参考
- [js-md5](https://github.com/emn178/js-md5)（MIT许可）：md5哈希算法
- [MoePus](https://moepus.oicp.net/2016/11/27/crccrack/ "用crc彩虹表反向B站弹幕“匿名”？我不想浪费内存，但是要和彩虹表一样快！")：弹幕哈希反查算法
- [esterTion](https://github.com/esterTion/BiliBili_crc2mid)（GFUL许可）：弹幕哈希反查算法的JavaScript实现
- [miyouzi](https://github.com/miyouzi/bilibili-helper/raw/0316840c56b3295377fc0f6b7095daa54bc6ac9d/packages/unblock-area-limit/src/api/biliplus.ts)（MIT许可）：APP端DASH sidx解析

---
### B站记忆
- 2019年12月09日：改版av、Bangumi页面，旧版播放页面入口从此消失。
- 2019年12月24日：改版稍后再看，使用稍后再看找回旧版播放器的方法失效。
- 2020年03月23日：启用BV号，av号也不再自增。
- 2020年04月04日：改版B站主页，刚好那天是清明节。
- 2020年04月23日：开启4K灰度测试，幸好旧版播放器可以兼容。
- 2020年04月28日：404播单，从此再无原生旧版播放页面。
- 2020年05月21日：启用proto弹幕，旧版接口只能获取90分钟以内的弹幕。
- 2020年07月13日：稍后再看再改，使用的是收藏播放页面同一套模版。
- 2020年07月29日：新版播放器小电视抖动图消失。
- 2020年08月25日：旧版番剧信息接口被风控，旧版接口一一失效的开始。
- 2020年09月23日：启用新版播放器弹幕叠加层。
- 2020年10月14日：重定向排行榜页面，旧版排行榜消失。
- 2020年10月27日：评论区右上角小页码区消失。
- 2020年11月20日：评论区av/BV链接替换为标题。
- 2020年12月03日：404 mylist，少了个考古工具

---
### 版本历史
**注：部分功能可能需要先在设置里启用！**  
- 2021-01-29
   + 不再复制下载链接到剪切板
   + 重构APP DASH数据：支持播放APP端DASH源(默认仍取flv源)。*Thailand源仍需在对应地区*（[sidx解析](https://github.com/miyouzi/bilibili-helper/raw/0316840c56b3295377fc0f6b7095daa54bc6ac9d/packages/unblock-area-limit/src/api/biliplus.ts)）
- 2021-01-25
   + 禁用番剧默认防挡字幕
- 2021-01-23
   + 添加还原评论跳转链接功能，需要在设置里启用
- 2021-01-22
   + 修复评论跳转链接无法正确处理大写AV号问题 *原生`comment.js`脚本问题：`index.of`方法区分大小写*
- 2021-01-18
   + 不再使用`replaceAll`方法以兼容 85- 内核的浏览器
   + 禁用直播间一些影响体验的功能（可能需要在设置里启用）：
      - p2p上传 *小水管难以承受为他人奉献带宽*
      - 天选时刻 *所以弹窗上的叉是摆设吗*
      - 大乱斗 *只想干干净净看直播*
- 2021-01-15
   + 修复Bangumi默认epid
- 2021-01-12
   + 修复HDR下载支持
   + 修复拦截直播间挂机检测
     *我就想挂后台听音乐，这点要求不过分吧*
- 2021-01-10
   + 尝试修复“字幕弹幕”显示效果 (推荐视频：[av75432](https://www.bilibili.com/video/av75432)，[av41401](https://www.bilibili.com/video/av41401))
- 2021-01-08
   + 引入[toastr](https://github.com/CodeSeven/toastr/)通知模块，使用原生JavaScript重新实现
- 2021-01-06
   + 重构主页\_\_INITIAL\_STATE\_\_
   + 移除在线数据及最新投稿
- 2021-01-03
   + 优化xhrhook方法，不再全局hook `XMLHttpRequest.prototype.send`以减少污染
- 2020-12-27
   + ~~添加特殊地区番剧下载（需在对应地区）~~，如[ss36377](https://www.bilibili.com/bangumi/play/ss36377)  
- 2020-12-25
   + 去除对象拓展运算符以兼容Firefox 54
- 2020-12-24
   + 修复嵌入式播放器出错
   + 禁用直播间挂机检测
- 2020-12-23
   + 改进flv视频画质识别方式
   + 无区域限制也单解除app限制
- 2020-12-21
   + 添加自动播放功能，延时1秒
- 2020-12-16
   + 过滤旧版播放器强制初始化代码，以兼容Bilibili CC字幕工具
   + 不再托管bilibiliPlayer.min.js以尝试处理"蓝条消失术"
- 2020-12-14
   + 修复评论查看更多错误
   + 修复无效bvid导致的视频播放出错
   + 修复区域限制番剧“请求被拦截”错误
- 2020-12-13
   + 修复按时间排序置顶评论楼中楼
- 2020-12-11
   + 添加拦截视频功能，可以在不播放视频的情况下进入播放页调用视频下载功能，用完请立刻关闭！切记！
- 2020-12-10
   + 使用new Function()模块化脚本，脚本主体从此只负责引入模块、初始化及暴露接口
   + 修复评论区点赞/点踩误伤
- 2020-12-08
   + 改进评论区楼层修复方式
      + 支持上古评论按评论数排序
      + 支持任意楼中楼
- 2020-12-07
   + 优化xhr send响应模拟
- 2020-12-06
   + 提供未登录情况下所能播放的画质，仅DASH模式下，虽然仍显示为480P，实际载入的为能获取到载入的最高画质
   + 移除画质切换列表的“登录”和“大会员”提示框，只是移除，不是破解！
- 2020-12-05
   + 修复生成xml弹幕时因没有转义弹幕中的特殊字符而产生的各种问题
- 2020-12-04
   + 使用模块化版本重构主体版本以方便维护
   + 修复失效视频支持使用缓存数据直接重写av页（甚至评论还在！如[av51568](https://www.bilibili.com/video/av51568)）
   + 主动跳转av到可能有效的bangumi（主要针对区域限制番剧，如[av713102937](https://www.bilibili.com/video/av713102937)）
- 2020-12-03
   + 修复排行榜页面无数据
- 2020-11-30
   + 修复评论跳转问题
   + 清除上古顶栏动态数量
   + 修复aid重定义错误
- 2020-11-27
   + 移除评论区多余的样式
   + 修复部分av页tag数据丢失错误
   + 重新实现跳过充电鸣谢功能
- 2020-11-26
   + 修复评论区bangumi跳转
- 2020-11-23
   + 修复评论区缺失的样式（B站前端工程师抄CSS抄漏了！大概）
   + BV转av支持页面所有链接并清理多余参数
- 2020-11-22
   + 修复评论区av/BV标题转化功能（未开启旧版评论时）
- 2020-11-21
   + 修复旧版退出登录功能
   + 添加恢复“旧版评论”设置选项
   + 修复忽略互动视频错误
- 2020-11-18
   + 回复旧版评论样式，先“全部评论”再“按热度排序”
- 2020-11-16
   + 修复新版播放器设置刷新被覆盖的问题
- 2020-11-15
   + 弹幕反查功能支持历史弹幕池
   + 支持下载历史弹幕
   + 切P时刷新弹幕下载数据
   + 不再使用dateURL调用原生脚本
   + 修复"开启新版弹幕时，BAS弹幕不能载入"的问题
- 2020-11-12
   + 修复Bangumi播放记录
- 2020-11-09
   + 模块化部分代码
   + 修复举报弹幕时提示出错:"弹幕不存在"
- 2020-11-03
   + 修改原生`video.min.js`脚本以添加4K、HDR清晰度信息，不再因其二次初始化播放器
   + 播单相关已完全失效，保留相关代码只去除对应设置选项
- 2020-11-02
   + 修复部分Bangumi切换季度信息丢失
   + 视频地址错误不再弹播放器消息
- 2020-10-29
   + 修复旧版页面评论区的小页码区，用的是旧版评论相关脚本，不负责非重写页面的评论区(如动态等)
- 2020-10-18
   + 旧版播放器支持HDR视频（需要浏览器支持）
   + 为美观下载面板中视频外的部分内容需额外在设置中开启下载
- 2020-10-15
   + 优化排行榜页面，对应到跳转前的分区
   + 修复部分情况下嵌入视频aid获取错误
   + 重写排行榜页面
   + 初步引入大会员授权功能以支持大会员的区域限制番剧(未完全测试)
- 2020-10-13
   + 修复因接口改版而失效的直播流拦截功能
   + 对于空白子页面不再写入全局样式
- 2020-10-12
   + 添加自动滚动到播放器/自动关闭弹幕/自动宽屏功能
   + 添加查询弹幕发送者信息的功能
- 2020-10-11
   + 修复Bangumi番剧推荐
   + 对于非APP限制的区域限制Bangumi不再强制获取flv格式
   + 在加载新版弹幕时不再关闭Web Worker，恢复网页性能，提高新版弹幕加载速度
   + 初步修复评论中的时间坐标跳转功能
- 2020-10-08
   + 未登录时不再请求点赞与否
   + 添加播放结束停留在最后一帧的功能
- 2020-10-07
   + 修复Bangumi\_\_INITIAL\_STATE\_\_重构错误
- 2020-10-06
   + 解除限制支持某些被404的Bangumi（[ss5970](https://www.bilibili.com/bangumi/play/ss5970)）
   + 优化嵌入播放器cid获取
   + 改进xhr返回值(json)转化
   + 播单页不再进行跳转而是直接重写
- 2020-10-03
   + 修复主页导航栏广告区定位错误
- 2020-10-02
   + 修正部分纪录片不显示集数的问题（[ss28333](https://www.bilibili.com/bangumi/play/ss28333)）
   + 修复aid监听成cid的错误（上古bug！）
   + 优化新版页面下载功能，现在能完美捕获\_\_playinfo\_\_
   + 解除限制支持APP专享非会员番剧（flv）
- 2020-09-23
   + 修复视频下载功能
- 2020-09-21
   + 修复旧版Bangumi追番数据
   + 修复部分节点误伤
- 2020-09-20
   + 修复一个正则表达式错误
   + 优化调试数据
- 2020-09-14
   + 优化样式添加方式：使用异步方法
   + 重构av页\_\_INITIAL\_STATE\_\_以规避网页中未内嵌\_\_INITIAL\_STATE\_\_的情况
- 2020-09-13
   + 修复旧版顶栏图片高分辨率适配问题
- 2020-09-12
   + 修复换P后没有切换到对应的实时弹幕服务器
- 2020-09-11
   + 修复旧版主页分区排行：电影、电视剧、纪录片
- 2020-09-06
   + 修复旧版播放器实时弹幕
- 2020-08-26
   + 改进旧版播放器设置维护
   + 下载视频主动获取flv格式
- 2020-08-25
   + 重构Bangumi的\_\_INITIAL\_STATE\_\_以绕开B站风控
   + 修复嵌入播放器替换失败的问题
- 2020-08-23
   + 不再预隐藏av页播放器，以优化Firefox79体验(未根本解决)
- 2020-08-18
   + 修复4k画质初始化播放器
- 2020-08-16
   + xhrhook选项调整为只控制send(open因为太多功能依赖默认开启)
   + 修改话题、活动主页顶栏类型
   + 添加跳过充电鸣谢功能
- 2020-08-14
   + 补全下载清晰度信息
- 2020-08-11
   + 提供xhrhook关闭选项，关闭后部分依赖功能将一并被关闭
   + 下载就算左键误点也将在新标签页打开
- 2020-08-10
   + 下载视频支持弹幕、封面等
- 2020-08-09
   + 精确获取评论楼中楼层号
   + 更新最新的分区信息
   + 修复不含音频的dash导致下载出错
- 2020-08-08
   + 支持修复评论楼中楼的楼层号
- 2020-08-07
   + 修复bv超链接
   + 优化收藏列表模拟，排序、加快载入速度
- 2020-08-06
   + 添加历史记录只显示视频播放历史的功能
   + 更新bangumi框架以处理页面部分请求重复的问题
- 2020-08-05
   + 下载面板flv类型也显示画质
   + 优化脚本结构和注释便于维护
- 2020-08-04
   + 实现旧版播放器支持新版弹幕 (感谢wly5556)
- 2020-08-03
   + 修复点赞功能
- 2020-07-31
   + 优化评论楼层功能
   + 优化失效视频功能
   + 下载视频将随切P而更新
- 2020-07-30
   + 添加解除区域限制功能(大概不支持会员视频)
- 2020-07-29
   + 添加屏蔽直播间视频及轮播视频的功能
   + 改进播放通知信息生成方法
- 2020-07-28
   + 修复主页\_\_INITIAL_STATE\_\_错误
- 2020-07-27
   + 修复分集数据错误
   + 替换失效的嵌入式播放器
- 2020-07-15
   + 将下载按钮移动到播放器右键菜单
- 2020-07-14
   + 修复新版av页\_\_playinfo\_\_报错
- 2020-07-13
   + 修复一个三目运算语法错误
   + 改进视频下载功能
   + 修复新版稍后再看改版引发的布局问题
   + 重定向新版稍后再看
- 2020-07-11
   + 改进去除首页广告功能
   + 改进bv=>av功能，使大部分模块直接显示av号
   + 修复主页部分分区问题
- 2020-07-07
   + 修复设置界面在部分页面布局错乱
   + 改进嵌入式播放框架选择
   + 添加去除旧版主页广告选项
- 2020-07-02
   + 修复新版播放页面样式误删
- 2020-07-01
   + 修复部分av页播放器被隐藏问题
- 2020-06-29
   + 修复av页\_\_INITIAL_STATE\_\_错误导致页面渲染失败
- 2020-06-28
   + 改进视频下载功能
- 2020-06-26
   + 修复av页带评论跳转锚点时mini播放器错位
   + 修复[HTML5播放器帮助页](https://www.bilibili.com/blackboard/html5playerhelp.html)视频cid错误
- 2020-06-25
   + 修复稍后再看顶栏
- 2020-06-11
   + 改用脚本管理器存储设置数据(需要重新自定义自己的设置选项)
   + 下载视频支持新版播放页
   + 忽略互动番剧
- 2020-06-10
   + 添加了个下载视频的功能
- 2020-06-07
   + 广告区被404，初步用资讯替代广告区
- 2020-06-06
   + 收藏播放页支持刷新评论区
   + 改进刷新播放器的方法
- 2020-06-04
   + 修复主页特别推荐位，主动生成默认数据
- 2020-05-31
   + 二次初始化av视频以便默认启用4K画质
- 2020-05-29
   + 添加替换视频心跳选项，若播放历史被广告插件等误伤时刻尝试打开
   + 修复正在直播链接
   + 由于B站关闭相关接口，移除恢复在线数据功能
- 2020-05-27
   + 修复播放器上方通知信息
   + 修复直播间轮播视频错误
   + 修复av页数据读取错误
- 2020-05-26
   + 修复首页正在直播数据
- 2020-05-25
   + 引入xhr hook以支持4k视频
   + 添加静态视频页面跳转普通av页选项
   + 添加点赞取消功能
- 2020-05-18
   + 修改一个正则表达式以改善兼容问题
   + 修复点赞功能
- 2020-05-17
   + 将av页playinfo中提供的flv链接替换为安全版本
- 2020-05-16
   + 使用稍后再看列表实现收藏播放页
- 2020-05-15
   + 通过绕过404的方式恢复旧版播单页
- 2020-05-14
   + 修复从稍后再看列表页进入稍后再看播放页面仍为新版的问题
   + 添加隐藏播放器上方通知区选项
- 2020-05-13
   + 修复播放页资讯视频分区信息
   + 修复稍后再看未登录时跳转错误
- 2020-05-10
   + 修复动态更新提醒不消失的问题
   + 评论楼层显示现支持按热度排序
- 2020-05-08
   + 修改av页框架以延迟评论加载速度
- 2020-05-06
   + 添加稍后再看点赞功能
   + 改进修改部分载入时机
- 2020-04-28
   + 撤销所有播单页失效修改，将播单直接重定向播放器
- 2020-04-26
   + 修复评论链接获取错误
- 2020-04-25
   + 修复bv2av锚的部分丢失的问题
   + 修复稍后再看右侧列表载入失败的问题
   + 修复稍后再看宽屏或网页全屏模式下弹幕滚动区域没有重绘的问题
   + 修复稍后再看页没有mini播放器的问题
- 2020-04-24
   + 配置av(BV)\_\_playinfo\_\_以提供4K画质选项
- 2020-04-20
   + 主动忽略互动视频
- 2020-04-15
   + 备份旧版播放器设置以免被新版页面置空
   + 修复部分页面设置界面被遮挡问题
- 2020-04-11
   + 优化新版顶栏和底栏替换方式
- 2020-04-09
   + 优化av(BV)页播放器出现的时机
- 2020-04-08
   + 优化av(BV)页播放器载入速度
- 2020-04-07
   + 修复未启用旧版av(BV)页时新版播放器自毁问题
- 2020-04-06
   + 修复旧版主页部分版块数据错误
   + 忽略某同域脚本创建的子页面
- 2020-04-05
   + 实现旧版B站主页
   + 修复mylist页写入异常
   + 修复搜索及排行榜中BV号误伤
- 2020-04-04
   + 将视频简介中BV号转化为av号以便跳转
- 2020-03-30
   + 修改av(BV)页失效顶栏处理方法，缓解双顶栏“一闪而过”的现象
- 2020-03-28
   + 修复一个强制类型转化错误
   + 修正无效av(BV)页判定以缓和与其他同域脚本的冲突
- 2020-03-27
   + 修复bvid导致的嵌入式播放器替换失败
- 2020-03-26
   + 添加初始化设置选项
   + 修复点赞数少打了个零的问题
   + 在av(BV)页添加点赞功能
   + 修复部分设置项无效的错误
   + 修复新版主页中设置界面异常
- 2020-03-25
   + 引入设置界面以供自定义功能开关
   + 修正选择弹幕列表功能
   + 修复BV号导致的稍后再看页错误
- 2020-03-24
   + 修复因BV改版而失效的功能
   + 默认启用BV强制重定向(非二次请求)到原av页功能
   + 修复BV转av时未带上参数的问题
- 2020-03-23
   + 紧急适配新版BV号
- 2020-03-19
   + 修复存在类似`index.html`后缀时的主页判定
- 2020-03-17
   + 修复已付费时付费信息未配置的问题
   + 将搜索页搜索框字号改回旧版大小
- 2020-03-09
   + 固定失效视频信息防止被页面顽固地改回去
   + 修复评论楼层信息
- 2020-03-08
   + 修复稍后再看页面重写错误
   + 修复带参数情况下B站主页判定失误
- 2020-03-06
   + 不再对子页面进行多余处理以降低性能需求
   + 修复了跨域请求未带协议时可能请求错误的问题
   + 初步引入错误收集功能以缓解因报错而导致脚本完全瘫痪的情况
- 2020-03-05
   + 使用第三方接口修复了失效视频信息
- 2020-03-04
   + 修改元数据以缓解与其他同域脚本的冲突
   + 添加番剧分集播放和弹幕显示
- 2020-03-03
   + 修复播单页失效顶栏并统一播放器布局
   + 恢复B站首页在线数统计和投稿数统计
- 2020-03-02
   + 添加了当前登录的B站账号注册时间信息显示
   + 初步修复空间收藏和频道中的失效视频信息
- 2020-03-01
   + 重写嵌入式播放器替换逻辑，解决了子页面的跨域问题
- 2020-02-22
   + 修复顶栏替换问题
- 2020-02-06
   + 对av页也主动写入\_\_INITIAL_STATE\_\_字段
- 2020-01-24
   + 紧急修复部分页面(拜年祭)嵌入式播放器替换失败问题
- 2020-01-20
   + 修正大会员及付费提示
- 2020-01-19
   + 修复稍后再看无法读取标题导致报错
   + 主动构造了ep页番剧\_\_INITIAL_STATE\_\_
   + 主动写入标题
- 2020-01-18
   + 主动构造了番剧\_\_INITIAL_STATE\_\_，解决ss番剧页”开播提醒“问题
   + 添加了av页的\_\_INITIAL_STATE\_\_，防止注入过快导致缺少相关数据使播放器启动失败
- 2020-01-17
   + 修复了av页分离错误
   + 重写了内嵌播放器替换逻辑
- 2020-01-16
   + 实现了部分嵌入播放器页面
   + 实现了部分顶栏和底栏
- 2020-01-11
   + 去掉了一个正则表达式以改善兼容问题
- 2020-01-03
   + 添加bangumi页实现
- 2019-12-31
   + 处理av页顶栏问题
- 2019-12-30
   + 修复高分辨率下av页播放器布局问题
   + 缓解了稍后再看页面播放器容易初始化失败的问题
   + 实现自动切换到弹幕列表
- 2019-12-29
   + 实现稍后再看页面
- 2019-12-27
   + 实现av页
