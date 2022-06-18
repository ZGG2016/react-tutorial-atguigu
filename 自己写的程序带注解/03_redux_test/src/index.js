import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

/*
* 临时打包上线：
*   1.打包: npm run build
*   2.安装serve: npm i serve -g
*   3.启动服务器: serve build
* 如果出现错误 `serve : 无法加载文件 C:\Users\zgg\AppData\Roaming\npm\serve.ps1，因为在此系统上禁止运行脚本。`
* ，那么打开管理员身份打开powershell，执行 `set-ExecutionPolicy RemoteSigned` 即可。
* */


ReactDOM.render(
	/* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)