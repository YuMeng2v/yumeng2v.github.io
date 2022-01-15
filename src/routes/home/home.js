import {Component} from 'react';
import HeadNav from '../../common/HeadNav';
import './home.css';
import OneMd from '../../components/file';
import {HashRouter, Route, Routes} from 'react-router-dom'
//const glob = require('glob');
//const mdfiles = '../../articles'
//const fs1 = require('fs-extra')
//应该在这儿读取全部文件夹
class home extends Component{
    constructor(props){
        super(props)
        //读取文件夹下面每一个，注意id的使用
        //this.state = this.readfile(mdfiles); 
    }
    render(){
        return (
            <div id="home">
                <div id="right-page">
                    <HeadNav/> 
                    <div id="page-content">
                        <OneMd/>
                        {
                        //<OneMd />
                        }
                    </div>
                </div>
            </div>    
        )
    }
}
export default home;