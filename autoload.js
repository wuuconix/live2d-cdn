const live2d_path = "https://fastly.jsdelivr.net/gh/wuuconix/live2d-cdn@latest/";
const modelTextures = "https://fastly.jsdelivr.net/gh/wuuconix/live2d-cdn@latest/model/xiaomai/umaru2048/texture_00.png";

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
			// 配置选项的具体用法见 https://github.com/stevenjoezhang/live2d-widget/blob/master/README.md
			initWidget({
				waifuPath: live2d_path + "waifu-tips.json",
				cdnPath: live2d_path,
				tools: ["hitokoto", "asteroids", "photo", "info", "quit"]
			});
		});
	});
}