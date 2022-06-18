import React,{Component} from "react";
import {Button, DatePicker} from "antd";
import {WechatOutlined, WeiboOutlined, SearchOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'
const { RangePicker } = DatePicker;

export default class App extends Component{
    render(){

        return(
            <div>
                <button >点我</button>
                <Button type="primary">按钮1</Button>
                <Button>按钮2</Button>
                <Button type="link">按钮3</Button>
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <WechatOutlined />
                <WeiboOutlined />
                <DatePicker />
                <RangePicker />
            </div>
        )
    }
}

/*
* 按需引入样式：
*   1. 安装
*      yarn add react-app-rewired customize-cra
*      yarn add babel-plugin-import
*   2. 修改 package.json
*      "scripts": {
*          "start": "react-app-rewired start",
*          "build": "react-app-rewired build",
*          "test": "react-app-rewired test",
*        }
*   3. 在项目根目录创建一个 config-overrides.js 用于修改默认配置，添加如下内容：
*      const { override, fixBabelImports } = require('customize-cra');
*      module.exports = override(
*            fixBabelImports('import', {
*            libraryName: 'antd',
*            libraryDirectory: 'es',
*            style: 'css',
*            }),
*      );
*   4. 移除前面在 src/App.css 里的 `import 'antd/dist/antd.css'`
*   5. 重启 yarn start 访问页面
* */

/*
* 自定义主题:
*   1. 安装
*      yarn add less less-loader
*
*   2. 修改 config-overrides.js
*      const { override, fixBabelImports, addLessLoader} = require('customize-cra');
*      module.exports = override(
*            fixBabelImports('import', {
*               libraryName: 'antd',
*               libraryDirectory: 'es',
*               style: true,
*            }),
*            addLessLoader({
*               lessOptions:{
*               javascriptEnabled: true,
*               modifyVars: { '@primary-color': 'orange' },
*              }
*            }),
*      );
*   3. 修改后重启 yarn start
* */