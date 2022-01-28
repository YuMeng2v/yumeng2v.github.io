# 继承与原型链
    MDN：当谈到继承时，JavaScript只有一种结构：**对象**
    每个**实例**对象都有一个私有属性（__proto__）指向它的构造函数的原型对象（prototype）。该原型对象也有一个自己的原型对象（__proto__），层层向上知道一个对象的原型对象为null
    几乎所有JavaScript中的对象都是位于原型链顶端object的实例
    原型：new之前，对象
    实例：new之后，实例
### 继承属性
    ES6之后，可以使用方法Object.getPrototypeOf()和Object.setPrototypeOf()访问器来访问，等同于__proto__属性
* 示例1
    * 构造一个如下原型链
    ```   
    {a:1, b:2} ---> {b:3, c:4} ---> Object.prototype---> null
    ```
    * 代码如下：
    ```
    let f = function(){
    this.a = 1;
    this.b = 2;
    }
    let o = new f();
    f.prototype.b = 3;
    f.prototype.c = 4;
    ```
    * 执行如下代码：
    ```
    console.log(o.__proto__.__proto__.__proto__)
    //null
    console.log(o.__proto__.__proto__)
    //[Object: null prototype] {}
    console.log(o.__proto__)
    //{ b: 3, c: 4 }
    ```
* 示例2：继承属性
    * 使用Object.create(0)继承一个对象
        
        * 并不能单纯的认为对象的继承，只是一个“指针” ，指向的对象并不等同于可以像对象一样访问属性方法
        * 示例：指向一个函数对象
        ```
        let f = function(){
            this.a = 1;
            this.b = 2;
            return 1;
        }
        var x = Object.create(f);
        console.log(x.__proto__())
        //1
        console.log(x.__proto__.a)
        //undefined
        ```
        * 当继承的函数被调用时，this指向当前继承的对象，而不是原型对象，示例：
        ```
        var m = {
        a: 7,
        funco:function(){
            return this.a;
        }
        }
        var xx = Object.create(m);
        console.log(xx.funco());
        //7
        xx.a = 8;
        console.log(xx.funco());
        //8
        ```
        * 针对上一点，如果我是用箭头函数呢？
        ```
        var m = {
        a: 7,
        funco:()=>{
            console.log('here')
            return this.a;
        }
        }
        var xx = Object.create(m);
        console.log(xx.__proto__.funco())
        //undefined
        console.log(xx.funco());
        //undefined
        ```
### 在JavaScript中使用原型
* 所有函数都有一个__proto__属性
    * 应用1：为原型添加属性
        ```
        doSomething.prototype.foo = "bar";
        ```
        *  此时的new一个实例对象
        ```
        var x = new doSomething();
        ```
        * x.__proto__为doSomething.prototype
* 其它创建对象与生成原型链的方式
    ```
    //对象数据类型
    var o = {a:1}
    //数组,都继承于Array.prototype
    var a = []
    //函数,都继承于Function.prototype
    function f(){}
    //使用构造器创建的对象
    function g(){}
    g.prototype = {x: function(){}}
    var q = new g();
    //使用Object.create()
    //使用class关键字
    ```
### 如何理解原型链（面试）
    在JavaScript中没有类的概念，在实现属性（函数也是对象的属性）的继承时，就要使用原型链。
    在JavaScript当中，每个实例对象都有一个__proto__属性指向对象的原型，这样在访问实例的属性时，JavaScript就可以根据原型链，一层一层向上寻找这个属性
    在定义对象时，可以使用prototype对其原型进行拓展
### 疑问？
* 为什么是加在prototype上，比如Array.prototype.maximum，也即下面为什么不行
    ```
    Array.maximum = function(x){
    return Math.max(...x);
    }
    a = new Array([1,23])
    console.log(a)
    console.log(a.maximum(3))
    ```
    * 实现在原型上，在创建new Array时，只有数组本身
    

