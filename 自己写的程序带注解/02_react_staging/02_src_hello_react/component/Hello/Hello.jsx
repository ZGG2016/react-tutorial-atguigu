import React,{Component} from "react";
import './Hello.css'

/*
* 1. 组件名首字母大写
* 2. 将Hello组件相关的js\css等都放一个文件夹下
*    【理解组件的含义: 用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)】
* 3. 可以通过两种方式区分组件js文件和普通js文件
*   （1）将组件js文件名首字母大写，普通js文件小写
*   （2）将组件js文件后缀改成jsx
* 4. 如果Hello组件下的h2标签的className和Welcomme组件下的h2标签的className相同，那么在
*    App组件引入这两个组件渲染的时候，样式就会冲突，最后的结果就是谁在前面引入，就使用谁的样式。
*    解决方法：
*       （1）使用 less 解决：
*               .hello{
*                   .title{
*                        background-color: orange;
*                   }
*                }
*                .welcome{
*                   .title{
*                        background-color: orange;
*                   }
*                }
*       （2）将css文件重名为index.module.css，使用 import welcome from './Hello.module.css' 引入,
*           并这么 <h2 className={hello.hel}>welome!</h2> 使用
* */

export default class Hello extends Component{
    render() {
        return(
            <h2 className="hel">hello,react!</h2>
        )
    }
}