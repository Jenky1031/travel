const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
	devServer: {
		port: 4040, // 端口号
		host: "localhost"
		//https: false, // https:{type:Boolean}
		//open: true, //配置自动启动浏览器
		// proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
	},
	chainWebpack: config => {
		// 添加别名
		config.resolve.alias
			.set("vue$", "vue/dist/vue.esm.js")
			.set("@", resolve("src"))
			.set("@styles", resolve("src/assets/styles"));
		//   .set("@assets", resolve("src/assets"))
		//   .set("@scss", resolve("src/assets/scss"))
		//   .set("@components", resolve("src/components"))
		//   .set("@plugins", resolve("src/plugins"))
		//   .set("@views", resolve("src/views"))
		//   .set("@router", resolve("src/router"))
		//   .set("@store", resolve("src/store"))
		//   .set("@layouts", resolve("src/layouts"))
		//   .set("@static", resolve("src/static"));
	}
};
