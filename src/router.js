import React,{Component} from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
//import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
//import LoginUser from './layouts/LoginUser/LoginUser';
import Home from './routes/home/home';
import ArticleClass from './routes/articleClass/articleClass';
import Articles from './routes/articles/articles';
import Aboutme from './routes/aboutme/aboutme'
export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Home/>} exact/>
                        <Route path="aboutme" element={<Aboutme/>} />
                        <Route path="articleclass" element={<ArticleClass/>} />
                        <Route path="articles" element={<Articles/>} />
                    </Routes>
                </HashRouter>
            </div>    
        )
    }
}
// export default RouterWrap
