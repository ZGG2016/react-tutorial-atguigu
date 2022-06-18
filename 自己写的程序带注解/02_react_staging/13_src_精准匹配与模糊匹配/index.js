import React from 'react';
import ReactDOM from "react-dom";
import {HashRouter} from 'react-router-dom'
import App from "./App";

ReactDOM.render(
    // 注意这里包了一层BrowserRouter
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById("root"))