import React, {Component} from 'react'
import {Menu} from 'antd'

import './Foott.css'
import {GithubOutlined} from '@ant-design/icons';
export default class Foott extends Component{
    state = {
        current: 'home'
    }
    render(){
        return (
            <div>
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                    <GithubOutlined  type="global" className="nav-logo"/>
                    </div>
                    <div className="nav-list-wrap">
                    </div>
                </div>
            </div>
        </div>
        )
    }
}