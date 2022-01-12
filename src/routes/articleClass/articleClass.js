import {Component} from 'react';
import HeadNav from '../../common/HeadNav';
class ArticleClass extends Component{
    render(){
        return (
            <div id="article">
                <HeadNav/> 
                <div>
                    <h2>articleClass</h2>
                </div>
            </div>    
        )
    }
}
export default ArticleClass;