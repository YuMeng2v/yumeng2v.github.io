import {Component} from 'react';
import './home.css';
import OneMd from '../../components/OneMd';
import {Link} from 'react-router-dom';
import demo2 from '../../assets/demo2.jpg';
import HeadNav from '../../common/HeadNav';
/*
    读取文章 配置路由
*/
const markdownContext = require.context('../../articles/markdown',false,/\.md/);
const markdownFiles = markdownContext.keys().map((filename)=>markdownContext(filename))
console.log('home:',markdownFiles);
class home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="home">
                <div id="right-page">
                    <HeadNav/>
                    <div className="content-lists">
                    {

                        markdownFiles.map((file_path,index)=>
                            <div className="content-item" key={index}>
                            <Link to={{pathname:`/article/${index}`}} state={file_path} >
                                <img src={require(`../../articles/images/${file_path.split('/')[3].split('.')[0]}.jpg`)}></img>
                                <h2 style={{textAlign:'center',fontSize:'12px'}}>{file_path.split('/')[3].split('.')[0]}</h2>
                            </Link>
                            </div>   
                        )
                    }
                    </div>
                </div>
            </div>    
        )
    }
}
export default home;