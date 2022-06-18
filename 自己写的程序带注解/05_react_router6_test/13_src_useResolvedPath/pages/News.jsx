import React from 'react'
import {useNavigationType,useResolvedPath} from 'react-router-dom'

export default function News() {
	console.log(useNavigationType())
	// 给定一个 URL值，解析其中的：path、search、hash值。
	// @@ {pathname: '/user', search: '?id=001&name=tom', hash: '#qwe'}
	console.log('@@',useResolvedPath('/user?id=001&name=tom#qwe'))
	return (
		<ul>
			<li>news001</li>
			<li>news002</li>
			<li>news003</li>
		</ul>
	)
}
