import {Component} from 'react';
import HeadNav from '../../common/HeadNav'
import './DefaultLayout.less'
import {Route,Routes} from 'react-router-dom';
import home from '../../routes/home/home';
import articleClass from '../../routes/articleClass/articleClass';
import articles from '../../routes/articles/articles';
import aboutme from '../../routes/aboutme/aboutme'
class DefaultLayout extends Component{
    render(){
        return (
            <div id="DefaultLayout">
                <HeadNav/>
                <h2>这是哪儿</h2>
                <div>
                <Routes>
                        <Route path='/' component={home} exact/>
                        <Route path='aboutme' component={aboutme}/>
                        <Route path='articles' component={articles} exact/>
                        <Route path='articleclass' component={articleClass}/>
                    </Routes>
                </div>
            </div>    
        )
    }
}
export default DefaultLayout;