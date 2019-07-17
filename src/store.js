import { observable, computed,action } from "mobx";
import React,{Component} from "react"
class Ticker extends Component{

    @observable tick = 0

    @action.bound
    increment() {
        // document.write(this.tick)
        this.tick++ // 'this' 永远都是正确的
       document.write(this.tick)
    }
}

const ticker = new Ticker()
setInterval(ticker.increment, 1000)
export default ticker;