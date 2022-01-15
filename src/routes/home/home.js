import {Component} from 'react';
import HeadNav from '../../common/HeadNav';
import './home.css';
import OneMd from '../../components/file';
import {HashRouter, Route, Routes} from 'react-router-dom'
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
                    </div>
                </div>
            </div>    
        )
    }
}
export default home;