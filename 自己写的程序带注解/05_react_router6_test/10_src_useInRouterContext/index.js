import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, useInRouterContext} from 'react-router-dom'
import App from './App'
import Demo from './components/Demo'

ReactDOM.render(
	<div>
		{/*Demo组件没有被 BrowserRouter 包裹，所以调用 useInRouterContext() 返回 false*/}
		<Demo/>
		<BrowserRouter>
			{/*App组件及其子组件调用 useInRouterContext() 返回 true*/}
			<App/>
		</BrowserRouter>
	</div>,
	document.getElementById('root')
)