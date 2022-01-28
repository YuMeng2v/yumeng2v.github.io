import React,{Component} from 'react'
import ReactMarkdown from 'react-markdown'
import './file.css'
import HeadNav from '../common/HeadNav'
//import * as fs from 'fs';//fs in node not in browser
//如何让子组件知道自己是哪一篇
import {useLocation} from 'react-router-dom';
//将所有markdown都引入
function importAll(r){
    r.keys().forEach(r);
}
//require.context： 代表达式的require语句
//
const markdownContext = require.context('../articles/markdown',false,/\.md/);
const markdownContext1 = require.context('../articles/images',false,/\.png/);
const markdownFiles = markdownContext.keys().map((filename)=>markdownContext(filename))
console.log('Onemd',markdownFiles);

let contents = [];
class OneMd extends Component {
    constructor(props){
        super(props)  
        //初始化状态，每次刷新也会调用这个函数
        this.state = {src:-1,posts:''};
    }
    componentWillMount(){
        console.log('match:',this.props.match)
        if(this.props.match!=undefined){
            this.setState({src:Number(this.props.match.url.split('/')[2])})
        }
    }
    componentDidMount(){
        if(this.state.src!=-1)fetch(markdownFiles[this.state.src]).then(res=>res.text()).then(text=>this.setState({posts:text}));
    }
    componentDidUpdate(){
        //const content = fileReader.readAsText(markdownFiles[this.state.src])
        //this.setState({posts:contents[this.state.src]})
        //console.log(content);
        console.log('OneMd:',this.state);
    }
    render(){
        return  (
            <div>
                <div className="markdown-headNav">
                    <HeadNav/>
                </div>
                <div className="markdown-body">
                    <div className="markdown-content">
                        <ReactMarkdown source={this.state.posts}/>
                    </div>
                </div>
            </div>
            )
        }
}
export default OneMd;
