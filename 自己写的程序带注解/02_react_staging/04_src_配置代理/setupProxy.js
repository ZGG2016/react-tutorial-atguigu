const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){

	app.use(
		'/api1',   // 遇见 `/api1` 前缀的请求，就会触发该代理配置
		createProxyMiddleware({
			target: 'http://localhost:5000',   //请求转发给谁
			changeOrigin: true,    //控制服务器收到的请求头中Host的值
			pathRewrite: {'^/api1': ''}  //重写请求路径(必须)  将 `/api1` 替换成空字符串
		})
	);

	app.use(
		'/api2',createProxyMiddleware({
				target: 'http://localhost:5001',
				changeOrigin: true,
				pathRewrite: {'^/api2': ''}
			})
	);

}