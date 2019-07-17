import React from 'react'
// import {Component} from 'react'
// import {observer} from 'mobx-react'
// import {observable,action,computed} from 'mobx'
import ReactDOM from 'react-dom'
import App from './App'
// import Axios from 'axios';
// import 'antd/dist/antd.css';

// let timerData=observable({
//     secondsPassed:0
// });

// setInterval(()=>{
//     timerData.secondsPassed++;
// },1000);

// @observer
// class Timer extends Component{

//     @action.bound reseTime(){
//         this.props.timerData.secondsPassed=0;
//     }
//     @observable length=2;
//     @computed get squared(){
//         return this.length*this.length;
//     }
//     set squared(value){
//         this.length=Math.sqrt(value);
//     }
//     render(){
//         return (
//             <div>
//                 <span>Seconds passed:{this.props.timerData.secondsPassed}</span>
//                 <br/>
//                 <button onClick={this.reseTime}>复位</button>
//                 <div>{this.squared}</div>
//             </div>

//         )
//     }
// };
ReactDOM.render(<App></App>,document.getElementById('root'));
// function tick() {
//     ReactDOM.render(
//      <App/>,
//       document.getElementById('root')
//     );
//   }
// setInterval(tick,1000)

