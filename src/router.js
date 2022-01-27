import React,{Component} from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './routes/home/home';
import ArticleClass from './routes/articleClass/articleClass';
import Articles from './routes/articles/articles';
import Aboutme from './routes/aboutme/aboutme';
import OneMd from './components/OneMd';

class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <BrowserRouter>
                    <Route path="/" component={Home} exact/>
                    <Route path="/aboutme" component={Aboutme} exact/>
                    <Route path="/articleclass" component={ArticleClass} exact/>
                    <Route path="/articles/" component={Articles} exact/>
                    <Route path="/article/:id" component={OneMd}/>
                </BrowserRouter>
            </div>    
        )
    }
}
export default RouterWrap
// export default RouterWrap
//组件名要大写！