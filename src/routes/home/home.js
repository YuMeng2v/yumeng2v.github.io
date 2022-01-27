import {Component} from 'react';
import './home.css';
import OneMd from '../../components/OneMd';
import {Link} from 'react-router-dom';
import demo2 from '../../assets/demo2.jpg';
/*
    读取文章 配置路由
*/
function importAll(r){
    r.keys.forEach(r);
}
const markdownContext = require.context('../../articles/markdown',false,/\.md/);
const markdownContext1 = require.context('../../articles/images',false,/\.png/);
const markdownFiles = markdownContext.keys().map((filename)=>markdownContext(filename))
//console.log('files:',markdownFiles);

class home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="home">
                <div id="right-page">
                    <OneMd/>  
                    {
                        markdownFiles.map((_,index)=>
                            <Link to={{pathname:`/article/${index}`, state:{id:index}}} >
                                <img src={demo2}></img>
                            </Link>   
                        )
                    }
                </div>
            </div>    
        )
    }
}
export default home;