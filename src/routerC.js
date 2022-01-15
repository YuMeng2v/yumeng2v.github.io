//copy from file.js 
// not used
import React,{Component} from 'react'
import ReactMarkdown from 'react-markdown'
import { Fragment } from 'react/cjs/react.production.min';
//import AppMarkdown from '../articles/01/try1.md'
import {Link} from 'react-router-dom'
import HeadNav from './common/HeadNav'
import demo2 from './assets/demo2.jpg'
import {HashRouter, Route, Routes} from 'react-router-dom'
//通过import + fetch的方式，成功读取到了文件
// 不import ，fetch到的就是最后的页面
function importAll(r){
    r.keys.forEach(r);
}
//读取markdown 文件
const markdownContext = require.context('./articles/markdown',false,/\.md/);
console.log(markdownContext);
//读取images对应的images文件
const markdownContext1 = require.context('./articles/images',false,/\.png/);
const markdownFiles = markdownContext.keys().map((filename)=>markdownContext(filename))
console.log('files:',markdownFiles);

class RouterContent extends Component {
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
                                <HashRouter>
                                { 
                                    posts.map((post,idx)=>(
                                        <div className="card" key={idx}>
                                            <div className="card-content">
                                                <div className="content">
                                                    {//
                                                    }
                                                    <img src={demo2}></img>
                                                    <Link to={`${idx}`} component={<HeadNav/>}></Link>
                                                    {/*
                                                        <ReactMarkdown>{post}</ReactMarkdown>
                                                    */}   
                                                    </div>
                                            </div>
                                        </div>

                                    ))
                                }
                                </HashRouter>
                                
                                 {
                                            //basic idea
                                            //<RouterWrap>
                                            //      <HashRouter>
                                                        //<Route path="">
                                                        //</Route>
                                            //      </HashRouter>
                                            // 可不可以生成route的同时，生成对应link
                                            // 所以都放在file.js组件文件夹下面
                                        }
                            </div>
                        </section>
                </Fragment>
            )
        }
}
export default RouterContent;
/*
@ para1: markdown文件的路径
@ para2: 页面的img文件，大小统一为 250px(w)*200px(h)
*/

// export default RouterWrap
//组件名要大写！