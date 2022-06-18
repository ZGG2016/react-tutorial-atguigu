import {Component,Fragment} from "react";

export default class Demo extends Component{

    render(){
        return(
            // Fragment 和空标签在渲染时都可以被忽略
            // 区别就是：Fragment可以（只能）接收 key 属性，而空标签不行
            // <Fragment key={1}>
            //     <input type="text"/>
            //     <input type="text"/>
            // </Fragment>
            <>
                <input type="text"/>
                <input type="text"/>
            </>
        )
    }


}