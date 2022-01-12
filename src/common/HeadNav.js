import React, {Component} from 'react'
import {Menu} from 'antd'

import './HeadNav.css'
import {GithubOutlined} from '@ant-design/icons';
export default class HeadNav extends Component{
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
                        <Menu mode="horizontal">
                                <Menu.Item key="home">
                                    首页
                                </Menu.Item>
                                <Menu.Item key="aboutme">
                                    关于我
                                </Menu.Item>
                                <Menu.Item key="articles">
                                    所有文章
                                </Menu.Item>
                                <Menu.Item key="articleClass">
                                    文章分类
                                </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}