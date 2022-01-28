# Promise
    ES6新特性
    promise是一个构造函数，可以封装异步操作并获取其成功和失败的结果值
### 异步编程
* fs文件操作
    ```
    require('fs').readline('./index.html',(err,data)=>{})
    回调函数
    ```
* 数据库
* Ajax
* 定时器（settimeout）
### ```支持链式调用，解决回调地狱问题```
*   回调地狱：
    ```
    回调函数嵌套调用，外部回调函数异步执行的结果是嵌套回调执行的条件
    ```
    Q? 链式调用的例子？

### 一个promise
    传入的函数
    ```
       const p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let q = rand(1,100);

                if(q<=30){
                    resolve(); //将promise对象的状态设置为成功
                    //成功的回调函数
                }
                else{
                    reject(); //~设为失败
                    //失败的回调函数
                }
            },1000)
       });
       //调用then方法
       //两个回调，第一个回调为成功时调用，第二个为失败时
       p.then(()=>{
            console.log('从过了')
       },()=>{
        console.log('受不了')
       })
    });
    ```
### 将回调函数转换为promise：   
    util.promisify
### promise 对象
*   promise实例对象状态属性
    ```[PromiseState]```

    pending->resolved
    
    pending->rejected

    resolved rejected不会互相转换

    ```每个实例仅有一次状态转变```
*   Promise对象的值
    ```[PromiseResult]```
    
    存储对象【成功/失败】的结果
    只能使用resolve/reject（成功/失败的回调）进行修改
*   Promise相关API
    *   Promise构造函数
        *   参数：执行器
            ```
            (resolve,reject)=>{}
            ```
            执行器为同步调用，会立即执行
            ```
            let p = new Promise((a,b)=>{
                console.log(111)
            })
            console.log(222)
            //输出： 111 222
            ```
        *   执行器的参数1：resolve
            ```
            内部定义成功时调用的函数 value=>{}
            ```
        *   执行器的参数2：
        reject
            ```
            内部定义失败时调用的函数reason=>{}
            ```
    *   Promise.prototype.then(onresolved,onrejected)=>{}
        *   onresolved
            ```
            成功时的回调函数
            (value)=>{}
            ```
        *   onrejected
            ```
            失败时的回调函数
            (reason)=>{}
            ```
    *   Promise.prototype.catch(onrejected)
        ```
        只能指定失败的回调
        ```
### Promise的基本流程
    1.new Promise():Pending
    2.异步操作（在promise内部封装异步操作（函数））
    3.1成功：执行resolve（成功的回调）
        4.1 成功（resolved），调用then()
    3.2失败：执行reject（）
        4.2 失败（rejected），调用catch()/then()
    5.返回一个新的promise对象
### 面试问题
*   字节跳动
    ```
    题目描述
       实现一个函数getPromise，再请求n次promise之后返回reject
    a = settPromise(getPromise,times)
    getPromise = ()=>{
        a = math.random()
        if(a>0.5){
            return Promise.resolve(111);
        }
        return Promise.reject(111);
    }
    ```
    ```
    setPromise = (getP,times)=>{
        if(times==0) return Promise.reject(111);
        let q = new getP(resolve,reject);
        q.then((value)=>{
            return Promise.resolve(value);
        },(reason)=>{
            return setPromise(getP,times-1);
        })
    }
    ```



