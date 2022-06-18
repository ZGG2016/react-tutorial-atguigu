import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import App from "./App";

ReactDOM.render(
    // 注意这里包了一层BrowserRouter
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root"))