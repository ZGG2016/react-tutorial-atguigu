//引入Count的UI组件
import CountUI from '../../components/count'
//引入connect用于连接UI组件与redux
import {connect} from "react-redux"
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from "../../redux/count_action_creator";


/*
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
    return {count:state}
}
/*
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch) {
    return {
        jia: number=> dispatch(createIncrementAction(number)),
        jian:number => dispatch(createDecrementAction(number)),
        jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
    }
}


// 2. 创建容器组件，只有它使用 redux api，即负责和redux通信，将结果交给UI组件。创建完后，容器组件就连接到了UI组件
// 使用connect()()创建并暴露一个Count的容器组件
// 6. 容器组件通过 props 将 “状态”和“操作状态的方法”（redux中的，具体是通过store传reducer中的） 传给UI组件，即父给子传
// 添加这两个参数后，就把它们的返回值作为props传给了子组件，即UI组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI) // 给connect()函数的返回值传参数

// const CountContainer =  connect()(CountUI)
// export default CountContainer