// 注意：live2d_path 参数应使用绝对路径
const live2d_path = "https://cdn.jsdelivr.net/gh/wuuconix/live2d-cdn@main/";
// 模型texture图片地址
const modelTextures = "https://cdn.jsdelivr.net/gh/wuuconix/live2d-cdn@main/model/xiaomai/umaru2048/texture_00.png";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;
		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		} else if (type === "png") {
      tag = new Image()
      tag.src = url;
    }
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
      if (["js", "css"].includes(type)) {
        document.head.appendChild(tag);
      }
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
  loadExternalResource(modelTextures, "png").then(() => {         // 首先确保模型图片已经加载完成
    Promise.all([
      loadExternalResource(live2d_path + "waifu.css", "css"),
      loadExternalResource(live2d_path + "live2d.min.js", "js"),
      loadExternalResource(live2d_path + "waifu-tips.js", "js")
    ]).then(() => {
      initWidget({
        waifuPath: live2d_path + "waifu-tips.json",
        cdnPath: live2d_path
      });
    });
  });
}
// initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
// API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api
// 初始化看板娘会自动加载指定目录下的 waifu-tips.json