import React, { Component } from 'react'

const detailData = [
	{id:'01', content:'Math'},
	{id:'02', content:'Chinese'},
	{id:'03', content:'English'}
]

export default class Detail extends Component {

	render() {
		// console.log(this.props)
		// 接收 params 参数
		const {id,title} = this.props.match.params
		const findResult = detailData.find((detailObj)=>{
			return detailObj.id === id
		})
		return (
			<ul>
				<li>id: {id}</li>
				<li>title: {title}</li>
				<li>content: {findResult.content}</li>
			</ul>
		)
	}
}
