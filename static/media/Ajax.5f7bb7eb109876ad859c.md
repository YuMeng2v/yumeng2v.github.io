# Lecture1
```
    什么是Ajax?
    Ajax is short for Asynchronous javascript and XML
    常见应用
        懒加载
```
*   四种实现方式
    *   原生
    *   jQuery
    *   fetch
    *   axios
*   Ajax优缺点
    *   优点
        *   无需更新页面与服务器端进行通信
        *   允许根据用户事件更新部分页面内容
            *   点击/hover等
    *   缺点
        *   没有浏览历史，不能回退
        *   存在跨域问题
        *   SEO支持不好
            *   爬虫X
            *   搜索
# Lecture2: **HTTP**
*   请求报文
    *   行
        ```
        请求类型（GET/POST）
        + URL路径 + HTTP版本（1.1等）
        ```
    *   头
        ```
        Host: atguigu.com
        Cookie: name=guigu 
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
        ```
    *   空行
    *   请求体
        ```
        username=admin&password=admin
        ```
*   响应报文
    *   行
        ```
        HTTP/1.1 200 ok
        ```
    *   头
        ```
        Content-type: text/html;charset=utf-8
        content-length: 2048
        Content-encoding: gzip
        ```
    *   空行
    *   体
        ```
        <html>
            <head>...</head>
            <body>...</body>
        </html>
        ```
*   Express基本使用
    *   步骤
        *   引入express
            *   const express = require('express');
        *   创建应用对象
            *   const app = express();
        *   创建路由规则
            *   app.get('/server',(request,response)=>{})
    *   允许跨域
        ```
        response.setHeader('Access-Control-Allow-Origin','*');
        ```
    *   get请求的参数设置
        ```
            xhr.open('GET','http://127.0.0.1:8000/server?a=100&b=200&c=300')
        ```
*   POST请求
    *   参数设置
        ```
        xhr.open('POST','http://127.0.0.1:8000/server');
        xhr.send('a=100&b=200&c=300')
        xhr.send('a:100&b:200&c:300')        
        ```
*   设置请求头信息
    ```
    xhr.setRequestHeader('键','值');
    eg. 设置请求体类型
    xhr.setRequestHeader('Content-type','application/x-www-form');
    ```
*   JSON的处理
    *   方法1：手动转换
        ```
        JSON.stringtify({})
        JSON.parse(json)
        ```
    *   方法2：自动转换
        xhr.reponseType = 'json'
*   nodemon: 自动重启node.js when node.js changes
    ```
    $ nodemon server.js
    ```
*   AJAX的IE缓存
    IE浏览器默认缓存Ajax请求的结果
    在xhr.open 后面url中添加 ?t='+Date.now()'
*   请求超时与网络异常&取消请求
    ```
    xhr.timeout = 2000
    //两秒钟无结果请求就会cancel
    xhr.onTimeout = function(){

    }
    //超时回调
    xhr.onerror = function(){

    }
    //网络异常回调
    ```
    *   手动取消请求（在未完成的情况下）
        xhr.abort
*   请求重复发送
    *   创建一个变量记录是否有pending的Ajax请求
*   ***axios***发送Ajax
    *   优势
        *   promise
        *   拦截器等
    *   get请求
        *   
        ```
        axios.get(url,
            ,{
                //请求体
                //url参数
                params: {id:100,vip:7},
                //请求头信息
                headers: {name:'atguigu',age:20}
                //其他信息(请求体等)
        },//其他配置{}
        );
        ```
    *   通用方法
        *   axios({
            //url
            url: '/axios-server',
            //url参数
            params: {},
            headers: {},
            data: {}
        })
*   fetch函数发送Ajax
    *   格式
    ```
        fetch(url,{
            method: 'POST',
            headers: {
                name: 'atguigu'
            },
        })
    ```
    *   返回：promise
*   **同源策略**
    *   浏览器安全策略
        *   同源：协议、域名、端口号必须完全相同
        *   AJAX默认采用同源策略
    * **如何解决跨域**
        *   jsonp
            *   只支持get请求
            *   借助一些标签天生具有跨域功能，比如img，link，iframe，script
            *   默认发送请求
        *   原生jsonp
            
        *   **CORS**
            *   官方跨域资源共享方案
            *   新增HTTP首部字段
                *   允许服务器声明哪些源站通过浏览器有权访问哪些资源
                ```
                    response.setHeader("Access-Control-Allow-Origin","*");
                    response.setHeader("Access-Control-Allow-Origin","https://127.120.1.1:8000");
                ```
            *   设置选项
                *   允许的请求：（默认get post可以）
*   如何进行状态保存？
*   如果我碰到需要很多request，为了提升用户体验应该使用什么方法？




