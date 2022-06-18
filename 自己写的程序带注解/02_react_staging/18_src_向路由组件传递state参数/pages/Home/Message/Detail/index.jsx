import React, { Component } from 'react'
import qs from 'query-string' // 安装 npm i -save-dev query-string

const detailData = [
	{id:'01', content:'Math'},
	{id:'02', content:'Chinese'},
	{id:'03', content:'English'}
]

export default class Detail extends Component {

	render() {
		console.log(this.props)
		// 接收 params 参数
		// const {id,title} = this.props.match.params

		// 接收 search 参数
		// const {search} = this.props.location
		// const {id,title} = qs.parse(search.slice(1))

		// 接收 state 参数
		const {id,title} = this.props.location.state || {}

		const findResult = detailData.find((detailObj)=>{
			return detailObj.id === id
		}) || {}
		return (
			<ul>
				<li>id: {id}</li>
				<li>title: {title}</li>
				<li>content: {findResult.content}</li>
			</ul>
		)
	}
}
