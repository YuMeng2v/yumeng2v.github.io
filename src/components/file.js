import React,{Component} from 'react'
import ReactMarkdown from 'react-markdown'
import { Fragment } from 'react/cjs/react.production.min';
//import AppMarkdown from '../articles/01/try1.md'
import Helmet from 'react-helmet'
import './file.css'
//通过import + fetch的方式，成功读取到了文件
// 不import ，fetch到的就是最后的页面
function importAll(r){
    r.keys.forEach(r);
}
//读取markdown 文件
const markdownContext = require.context('../articles/01/',false,/\.md$/);
const markdownFiles = markdownContext.keys().map((filename)=>markdownContext(filename))
console.log('files:',markdownFiles);

class OneMd extends Component {
    constructor(props){
        super(props)
        //初始化状态，每次刷新也会调用这个函数
        //console.log(props);
        this.state = {src:this.props.src,posts:['# loading']};
    }
    async componentDidMount(){
        const postss = await Promise.all(markdownFiles.map((file)=>fetch(file).then((res)=>{
            //console.log(res.text())
            return res.text()
        }))).catch((err)=>console.log(err));
        //console.log(postss);
        this.setState((state)=>({posts:postss}));
        //我改变了state
    }
    render(){
        const {posts} = this.state;
        console.log('posts now:',posts);
        return(
                <Fragment>
                        <section className="article-title">
                            按时间排序时间
                        </section>
                        <section className="article-content">
                            <div className='containers'>
                                {
                                    posts.map((post,idx)=>(
                                        <div className="card" key={idx}>
                                            <div className="card-content">
                                                <div className="content">
                                                    <ReactMarkdown>{post}</ReactMarkdown>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                </Fragment>
            )
        }
}
export default OneMd;
/*
@ para1: markdown文件的路径
@ para2: 页面的img文件，大小统一为 250px(w)*200px(h)
*/
