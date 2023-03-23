# live2d-cdn

内置小埋模型的live2d-widget

<img src="https://gzw.sinaimg.cn/large/007YVyKcly1hc9lbgfb67j30li0mpk0i.jpg" width="200px">

在线预览: [https://wuuconix.github.io/live2d-cdn/](https://wuuconix.github.io/live2d-cdn/)
## 来源

项目主体代码来自 [stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)，同时做了以下魔改:

+ 修改了waifu.css使模型出现在右侧
+ 修改了看板娘的z-index使得她出现在页面最上层
+ 让[模型图片](https://jsd.onmicrosoft.cn/gh/wuuconix/live2d-cdn@latest/model/xiaomai/umaru2048/texture_00.png)加载完毕后再加载live2d与widget（避免了模型图片还没加载出来就已经在说话了的诡异场面）
+ 修改了原代码中不合理的默认modelId值，并向原仓库提交了[issue](https://github.com/stevenjoezhang/live2d-widget/issues/135)和[PR](https://github.com/stevenjoezhang/live2d-widget/pull/136)

模型来自 [imuncle/live2d](https://github.com/imuncle/live2d)

+ 压缩了小埋的texture图片 **2.21MB -> 226KB** 可以极大提高加载速度与大幅节省CDN流量

## 使用方法

在html文件中引入一个js文件即可。

```html
<script src="https://jsd.onmicrosoft.cn/gh/wuuconix/live2d-cdn@v0.1.8/autoload.js"></script>
```

## 感谢

十分[渺软公益 CDN](https://cdn.onmicrosoft.cn/)对此项目的加速