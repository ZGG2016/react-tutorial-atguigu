import {useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";

export default function Message() {

    const [messages] = useState([
        {id:'001',title:'消息1',content:'锄禾日当午'},
        {id:'002',title:'消息2',content:'汗滴禾下土'},
        {id:'003',title:'消息3',content:'谁知盘中餐'},
        {id:'004',title:'消息4',content:'粒粒皆辛苦'}
    ])
    // 编程式路由导航
    const navigate = useNavigate()
    function showDetails(m) {
        navigate('detail',{
            replace:false,
            // 仅支持 state，不支持params\search
            state: {
                id: m.id,
                title: m.title,
                content: m.content
            }
        })
    }

    return (
        <div>
            <ul>
                {
                    messages.map((m)=>{
                        return (
                            // 路由链接
                            <li key={m.id}>
                                <Link
                                    to="detail"
                                    state={{
                                        id:m.id,
                                        title:m.title,
                                        content:m.content,
                                    }}
                                    >{m.title}</Link>
                                <button onClick={()=>showDetails(m)}>查看详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet/>
        </div>
    )

}
