import React, {Component} from 'react'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import './HeadNav.css'
import {GithubOutlined} from '@ant-design/icons';
export default class HeadNav extends Component{
    state = {
        current: 'home'
    }
    handleClick = (e)=>{
        this.setState({current:e.key})
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
                                    <Link to="/">首页</Link>
                                </Menu.Item>
                                <Menu.Item key="aboutme">
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