import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// import ticker from './store'
import { observer } from "mobx-react"
import Axios from 'axios';
import Home from './home'
import Pp from './pp'
import Pp2 from './pp2'
import Chan from './chanpin'
// import Clock from './prop'
import Zhu from './zhu'

@observer
class App extends Component {
  
  componentDidMount() {
    // 为给定 ID 的 user 创建请求
    // Axios.get('http://jsonplaceholder.typicode.com/posts')
    //   .then(function (response) {
    //     return response.data
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // 发送 POST 请求
    // Axios.post('http://jsonplaceholder.typicode.com/posts', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response.data);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
  render() {
    return (
      <div className="App">
hbvfusdbvisb
 {/* <Clock date={new Date()} />, */}

        {/* 路由和组件 */}
        {/* <Router>
          <div>
            <div className='header'>
              <ul>
                <li>
                  <Link className='h1' to="/">首页</Link>
                </li>
                <li>
                  <Link className='h2' to="/Chan">产品</Link>
                </li>
              </ul>
            </div>

            <Route exact path="/" component={Home} />
            <Route path="/Chan" component={Chan} />

          </div>
        </Router> */}




        {/* axios 和 mobx @observer、@action、@compute */}
        {/* {ticker.increment} */}
      </div>
    );
  }
}

export default App;
