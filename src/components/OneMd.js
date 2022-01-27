import React,{Component} from 'react'
import ReactMarkdown from 'react-markdown'
import './file.css'
import HeadNav from '../common/HeadNav'

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
console.log('Onemd',markdownFiles[0]);
class OneMd extends Component {
    constructor(props){
        super(props)  
        //初始化状态，每次刷新也会调用这个函数
        this.state = {src:'',posts:['# loading']};
    }
    componentDidMount(){
        if(this.props.match!=undefined){
            this.setState({src:this.props.match.url.split('/')[2]})
            //无法立即输出更新后的值
        }
    }
    componentDidUpdate(){
        console.log('OneMd:',this.state);
    }
    render(){
        return  (
            <div>
                    <HeadNav/>
                    <ReactMarkdown source={markdownFiles[this.state.src]}/>
            </div>
            )
        }
}
export default OneMd;
