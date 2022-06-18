/*
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
	  在reducer中，会初始化状态和更新状态，
	  而当第一个传入参数时，那么preState是undefined，action是类似@@init@@
*/

import {INCEMENT} from "./constant";
import {DECEMENT} from "./constant";

// 2. reducer 接收 store dispatch 方法传来的 action，更新状态
const initState = 0 //初始化状态
export default function CountReducer(preState=initState, action) {

    // console.log(preState)  // 0
    // console.log(action)    // {type: '@@redux/INITd.q.0.b.v.h'}

    //从action对象中获取：type、data
    const {type,data} = action

    //根据type决定如何加工数据
    switch (type) {
        case INCEMENT: //如果是加
            return preState + data
        case DECEMENT: //若果是减
            return preState - data
        default:
            return preState
    }
}