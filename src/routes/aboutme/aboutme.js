import {Component} from 'react';
import HeadNav from '../../common/HeadNav'
import './aboutme.css'
import {GithubOutlined,MailOutlined,LinkedinOutlined} from '@ant-design/icons';

class Aboutme extends Component{
    render(){
        return (
            <div id="aboutme">
                <HeadNav/>
                <div>
                    <table id='main-table'>
                        <tbody>
                            <tr>
                                <td>
                                    <table className="sub-table">
                                        <tbody>
                                            <tr>
                                                <td className="td-with-padding">
                                                    <p id='name' className="p-center">
                                                        YU Meng <br/>余萌
                                                    </p>
                                                    <p id="email" className="p-center">
                                                       常用邮箱： u3590526@connect.hku.hk  yumeng8@outlook.com
                                                    </p>
                                                    <p className="p-center">
                                                        正在
                                                        <span className="emphasis">香港大学（the University of Hong Kong）
                                                        </span>
                                                        攻读研究生
                                                    </p>
                                                    <p className="p-center">
                                                        我的开发兴趣是<span className="emphasis">web前端开发</span>
                                                    </p>
                                                    <p className="p-center">联系方式
                                                        <a href="https://github.com/YuMeng2v"><GithubOutlined  type="global" className="nav-logo" /></a>
                                                        <a href="mailto:u3590526@connect.hku.hk"><MailOutlined type="global" className="nav-logo"/></a>
                                                        <a href="https://www.linkedin.com/in/%E8%90%8C-%E4%BD%99-42460217b/"><LinkedinOutlined type="global" className="nav-logo"/></a>
                                                    </p>
                                                </td>
                                                <td className="td-with-padding">
                                                    <img id="daily-photo" src="https://s2.loli.net/2022/01/12/3WORuPUz12mr9H6.jpg"></img>
                                                </td>    
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="sub-table">
                                        <tbody>
                                            <tr>
                                                <td className="td-with-padding">
                                                    <h3>项目经历</h3>
                                                    <ul>
                                                        <li>个人博客搭建</li>
                                                        <ul>使用的技术栈
                                                            <li>React/Create-React-App/Reate-Router</li>
                                                            <li>Less</li>
                                                            <li>Ant-Design</li>
                                                            <li>React-markdown</li>
                                                            <li><a href="">教程</a></li>
                                                        </ul>
                                                        <li>课程评价微信小程序</li>
                                                        <ul>待续</ul>
                                                        <li>静态页面仿写</li>
                                                        <ul>电商页面仿写</ul>
                                                        <ul>使用的技术栈
                                                            <li>JavaScript+HTML+CSS</li>    
                                                        </ul>             
                                                        <li>音乐-键盘交互</li>
                                                        <ul>
                                                            <li>使用JavaScript响应键盘敲击事件，播放音乐</li>
                                                            <li>在canvas画布上随机生成小球</li>
                                                            <li>响应屏幕大小变化事件</li>
                                                            <li><a href="https://github.com/YuMeng2v/web-project">项目地址</a></li>
                                                        </ul>                                       
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="td-with-padding">
                                                    <h3>实习经历</h3>
                                                    <ul>待续</ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="td-with-padding">
                                                    <h3>教育经历</h3>
                                                    <ul>
                                                        <li>
                                                            <p>香港大学（2021.9-2022.12）</p>
                                                            <ul>
                                                                <li>计算机科学与技术</li>
                                                                <li>
                                                                    主要课程：计算金融，无人系统，UML设计与应用，多媒体计算，可视化分析
                                                                </li>
                                                            </ul>
                                                            </li>
                                                            <li>
                                                            <p>上海交通大学（2017.9-2021.6）</p>
                                                            <ul>
                                                                <li>电子工程系</li>
                                                                <li>
                                                                    主要课程：高等数学(top 5%),线性代数(top 5%)，数字信号处理，信号与系统，图像处理与内容处理，视觉定位与感知
                                                                </li>
                                                                <li>
                                                                    奖学金：中远海运奖学金，校级优秀生奖学金，优秀团员等
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>    
        )
    }
}
export default Aboutme;