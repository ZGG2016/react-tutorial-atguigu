
import {ADDPERSON} from "../constant"

// 5. 创建 Person 组件对应的 reducer
const initState = [{id:'001',name:'tom',age:18}]
export default function AddpersonReducer(preState=initState,action) {
    const {type,data} = action

    switch (type) {
        case ADDPERSON:
            // 这种方式更新状态，不会将状态更新到页面上，因为返回值都是 preState，地址是一样的，就不再更新
            // 此时，reducer 就不是纯函数了
            // preState.unshift(data)
            // return preState
            return [data,...preState]
        default:
            return preState
    }
}

// 纯函数
// 1.	一类特别的函数: 只要是同样的输入(实参)，必定得到同样的输出(返回) 【传一个1就得返回1，返回2就不行】
// 2.	必须遵守以下一些约束
//   1)	不得改写参数数据 【如上面reduer，传入preState，在里面`preState.unshift(data)`这样更新，就改写参数数据】
//   2)	不会产生任何副作用，例如网络请求，输入和输出设备【避免在里面写任何不靠谱的操作】
//   3)	不能调用Date.now()或者Math.random()等不纯的方法 【传入同样的参数，本次调用得到的结果和下次调用的结果不同】
// 3.	redux的reducer函数必须是一个纯函数


// 高阶函数
// 1.	理解: 一类特别的函数
//     1)	情况1: 参数是函数
//     2)	情况2: 返回是函数
// 2.	常见的高阶函数:
//     1)	定时器设置函数
//     2)	数组的forEach()/map()/filter()/reduce()/find()/bind()
//     3)	promise
//     4)	react-redux中的connect函数
// 3.	作用: 能实现更加动态, 更加可扩展的功能

