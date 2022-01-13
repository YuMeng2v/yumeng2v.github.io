import {Component} from 'react';
import HeadNav from '../../common/HeadNav';
import './home.css';
import OneMd from '../../components/file';
//const glob = require('glob');
//const mdfiles = '../../articles'
//const fs1 = require('fs-extra')
class home extends Component{
    constructor(props){
        super(props)
        //读取文件夹下面每一个，注意id的使用
        //this.state = this.readfile(mdfiles); 
    }
    render(){
        return (
            <div id="home">
                <div id="left-nav">
                    {
                        //写一个可以折叠的面板
                        //固定宽度也行
                    }
                    我难道无法显示？
                </div>
                <div id="right-page">
                    <HeadNav/> 
                    <div id="page-content">
                        {
                            //写一个router
                        }
                        <OneMd />
                    </div>
                </div>
            </div>    
        )
    }
}
export default home;