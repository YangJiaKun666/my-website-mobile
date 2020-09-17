import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
// 适配
import 'lib-flexible'
// 全局样式
import './utils/glabel-style.less'
// 路由表
import router from './router/index'

function Index() {
    return (
        <Router>
            <Redirect to="/home" />
            <Switch>
                {router.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        render={(props) => (
                            <route.component {...props} routes={route.routes} />
                        )}
                    />
                ))}
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))
