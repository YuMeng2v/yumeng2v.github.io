import React, {Component} from 'react'
import {Menu} from 'antd'
import './HeadNav.less'
import './HeadNav.css'
import {SmileOutlined} from '@ant-design/icons';
export default class HeadNav extends Component{
    state = {
        current: 'home'
    }
    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                    {//<SmileOutlined type="global" className="nav-logo"></SmileOutlined>
                    }
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
                                <Menu.Item key="ArticleClass">
                                    文章分类
                                </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>    
        )
    }
}
