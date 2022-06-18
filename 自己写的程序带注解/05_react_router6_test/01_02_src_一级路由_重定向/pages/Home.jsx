import {useState} from "react";
import {Navigate} from "react-router-dom";

export default function Home() {
	const [sum,setSum] = useState(1)

	return (
		<div>
			<h3>我是 Home 的内容</h3>
			{/*注意这里 Navigate 的用法*/}
			{ sum === 2 ? <Navigate to="/about"/> : <h4>当前的和是:{sum}</h4> }
			<button onClick={()=>setSum(2)}>点我将和变为2</button>
		</div>
	)

}