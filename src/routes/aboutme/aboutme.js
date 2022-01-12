import {Component} from 'react';
import HeadNav from '../../common/HeadNav'
import './aboutme.css'
import {GithubOutlined} from '@ant-design/icons';

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
                                                        YU Meng 余萌
                                                    </p>
                                                    <p id="email" className="p-center">
                                                        u3590526@connect.hku.hk / yumeng8@outlook.com
                                                    </p>
                                                    <p>
                                                        我在 
                                                        <span className="emphasis">香港大学（the University of Hong Kong）
                                                        </span>
                                                        攻读研究生
                                                    </p>
                                                    <p>
                                                        我的开发兴趣是前端web开发
                                                    </p>
                                                    <p className="p-center">
                                                        <a href="https://github.com/YuMeng2v"><GithubOutlined  type="global" className="nav-logo"/></a>
                                                    </p>
                                                </td>
                                                <td className="td-with-padding"></td>    
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="sub-table">
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