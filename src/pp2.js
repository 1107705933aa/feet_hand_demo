import React, { Component } from 'react'
import './App.css'
import Fom from './fom'

export default class  extends Component {
    render() {
        return (
            <div>
                <h1 className='h7'>欢迎访问iam产品!</h1>
                <div className='ha'><Fom /></div>
            </div>
        )
    }
}
