// 'react' 中存在多种暴露方式
import React,{Component} from 'react';
import Hello from "./component/Hello/Hello";  // 第一种引入组件的方式
import Welcome from "./component/Welcome";    // 第二种引入组件的方式，将该文件夹下的文件都改名成index

// 创建，并暴露App组件
export default class App extends Component{

    render(){
        return(
            <div>
                {/*通过组件的形式引入，App仅作为一个外壳*/}
                <Hello />
                <Welcome />
            </div>
        )
    }
}