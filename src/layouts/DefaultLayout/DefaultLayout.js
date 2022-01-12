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
                {//console.log(this.props.toString())
                }
                {/*
                <div>
                    <Route path={this.props.match.url+'/'} component={home} exact/>
                    <Route path={this.props.match.url+'/about'} component={aboutme}/>
                    <Route path={this.props.match.url+'/articles'} component={articles} exact/>
                    <Route path={this.props.match.url+'/articleclass'} component={articleClass}/>
                </div>
                */}
                <div>
                    <Routes>
                        <Route path='/' component={home} exact/>
                        <Route path='about' component={aboutme}/>
                        <Route path='articles' component={articles} exact/>
                        <Route path='/articleclass' component={articleClass}/>
                    </Routes>
                </div>
            </div>    
        )
    }
}
export default DefaultLayout;