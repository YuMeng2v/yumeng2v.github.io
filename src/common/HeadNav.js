import React, {Component} from 'react'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import './HeadNav.css'
import {FireOutlined} from '@ant-design/icons';
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
                    <FireOutlined  type="global" className="nav-logo"/>
                    </div>
                    <div className="nav-list-wrap">
                        <Menu mode="horizontal">
                                <Menu.Item key="home">
                                    <Link to="/">全部文章</Link>
                                </Menu.Item>
                                <Menu.Item key="aboutme">
                                    <Link to="/aboutme">关于我</Link>
                                </Menu.Item>
                                {/* <Menu.Item key="articles">
                                    <Link to="/articles">所有文章</Link>
                                </Menu.Item>
                                <Menu.Item key="articleClass">
                                    <Link to="/articleclass">文章分类</Link>
                                </Menu.Item> */}
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}