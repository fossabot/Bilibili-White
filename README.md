# Bilibili 旧播放页
---
### Bilibili 旧播放页新版重构中……

- 将html、json等大型且不轻易变更的内容独立到单独的模块中
- 将md5、crc等按需加载的接口独立到单独的模块中
- 暴露大部分接口到window.BLOD对象下方便调试

重构尚未完成，可能存在部分问题，不推荐使用
- 原脚本部分功能可能无法使用
- 可能存在部分语法错误
- ……

ps：原来是想通过`import()`方法实现全模块化，但该方法返回一个`promise`，只能异步使用。而本脚本重写页面所使用的`document.write()`方法必须同步使用，否则无法阻止B站原生页面脚本的干扰导致页面载入崩溃。所以很悲哀，重构完主脚本似乎没缩小多少……
- [main.user.js](https://github.com/MotooriKashin/Bilibili-Old/blob/master/main.user.js)当前进度样品
- [failed.user.js](https://github.com/MotooriKashin/Bilibili-Old/blob/master/main.user.js)全模块化样品，重构到bangumi，发现bangumi页面十有八九重写异常，B站原生脚本大肆破坏页面结构，只能忍痛放弃ಥ_ಥ