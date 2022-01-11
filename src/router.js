import React,{Component} from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import LoginUser from './layouts/LoginUser/LoginUser';
export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<DefaultLayout/>} exact/>
                        <Route path="/login" element={<LoginUser/>} />
                    </Routes>
                </HashRouter>
            </div>    
        )
    }
}