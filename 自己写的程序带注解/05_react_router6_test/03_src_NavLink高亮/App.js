import {Navigate, NavLink, Route, Routes} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  function computedClassName(isActive) {
    return isActive ? "list-group-item atguigu" : "list-group-item"
  }
  return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*这里实现 NavLink 高亮*/}
              <NavLink className={computedClassName} to="/about"> About </NavLink>
              <NavLink className={computedClassName} to="/home"> Home </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*注意这里，不是switch了*/}
                <Routes>
                  {/*注意这里 element 的写法变化了，不是 components 了 */}
                  <Route path="/about" element={<About/>}/>
                  {/* 路径 大小写敏感 */}
                  {/*<Route path="/ABOUT" caseSensitive element={<About/>}/>*/}
                  <Route path="/home" element={<Home/>}/>
                  {/*注意这里，不是 redirect 了*/}
                  <Route path="/" element={<Navigate to={"/about"}/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
