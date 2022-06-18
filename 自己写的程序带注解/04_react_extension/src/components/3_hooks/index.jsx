import React from "react";
import ReactDOM from 'react-dom'

//类式组件
/* class Demo extends React.Component {

	state = {count:0}

	myRef = React.createRef()

	add = ()=>{
		this.setState(state => ({count:state.count+1}))
	}

	unmount = ()=>{
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	show = ()=>{
		alert(this.myRef.current.value)
	}

	componentDidMount(){
		this.timer = setInterval(()=>{
			this.setState( state => ({count:state.count+1}))
		},1000)
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.myRef}/>
				<h2>当前求和为{this.state.count}</h2>
				<button onClick={this.add}>点我+1</button>
				<button onClick={this.unmount}>卸载组件</button>
				<button onClick={this.show}>点击提示数据</button>
			</div>
		)
	}
} */

function Demo() {

    // 第一次初始化指定的值在内部作缓存
    // 第1个为内部当前状态值, 第2个为更新状态值的函数
    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()

    React.useEffect(()=> {
        // 1. 不写 useEffect 第二个参数，就监测所有状态，就相当于 componentDidMount() 和 componentDidUpdate()
        // 在第一次挂载的时候执行一次，然后在每次更新页面的时候都执行
        // setInterval(()=>{
        //     setCount(count+1)
        // }, 1000)
        // })

        // 2. useEffect 第二个参数是监测哪个状态，
        // 指定为 count，就是监测状态 count，那么就相当于 componentDidMount() 和 componentDidUpdate()
        // 如果是 []，就是什么状态都不监测，回调函数只会在第一次render()后执行，当于 componentDidMount()
    //     setInterval(() => {
    //         // setCount(count + 1)
    //     }, 1000)
    // },[count])
        // 3. 让 useEffect 返回一个函数，可以实现 componentWillUnmount()
        let timer = setInterval(() => {
            // setCount(count + 1)
        }, 1000)
        return ()=>{
            clearInterval(timer)
        }
    },[count])

    function add() {
        // setCount(count+1)  // 第一种写法
        setCount(count => count+1)  // 第二种写法
    }

    function show() {
        alert(myRef.current.value)
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    }

    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}

export default Demo