# BFC笔记
### 定义
    BFC是一个独立的布局环境，可以理解为一个容器，容器内按照一定规则进行物品摆放，并且不会影响其他环境中的物品
    如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。
### 特点
* 垂直方向上，自上而下排列，和文档流一致
* BFC中，上下相邻的两个容器的margin重叠
* 计算BFC高度时，需要计算浮动元素的高度
* BFC区域不会与浮动容器发生重叠
* BFC为独立的容器，不受外部影响
### 创建BFC的条件，满足其一即可
* 根元素：body
* 元素设置浮动：float除none以外的值
* 元素位置绝对定位：position（absolute，fixed）
* display：inline-block、table-cell、table-caption、flex等
* overflow：hidden、auto、scroll；
### 解决的问题
* 解决margin重叠问题，将两个元素变为两个BFC，解决了margin重叠问题
	* 什么时候会发生margin重叠？

		垂直方向，正常文档流（非float、fixed），取大的margin
* 解决高度塌陷问题，把父元素设为BFC，子元素浮动也不会造成BFC，常用方法，给父元素设置overflow：hidden
* 创建自适应两栏布局
左边为float，右边设置overflow：hidden，右边触发BFC
### 应用举例
* 解决margin叠加问题
    * 需要主要的是，解决的是BFC与其他元素，而非BFC内部，对于解决方案，如果div标签包含三个p，依然会发生margin叠加问题
    * 以下代码发生外边距叠加，p内容间距为50px;
```
    <!DOCTYPE html>
    <head>
    </head>
    <body>
        <div class="box">
            <p>lllei</p>
            <p>lllei</p>
            <p>lllei</p>
        </div>
    </body>
    <style>
        p{
            color: block;
            background: #FF0000;
            width: 200px;
            line-height: 100px;
            text-align:center;
            margin: 50px;
        }
    </style>
```
    解决：添加父元素，并触发BFC
```
    <!DOCTYPE html>
    <head>
    </head>
    <body>
        <div class="box">
            <p>lllei</p>
        </div>
            <p>lllei</p>
            <p>lllei</p>
        
    </body>
    <style>
        .box{
            overflow:hidden;
        }
        p{
            color: block;
            background: #FF0000;
            width: 200px;
            line-height: 100px;
            text-align:center;
            margin: 50px;
        }
    </style>
```
* 用于布局（BFC不会与浮动盒子叠加）
    ```<!DOCTYPE html>
    <head>
    </head>
    <body>

        <div class="aside"></div>
        <div class="main"></div>
    </body>
    <style>

        body {
            width: 300px;
            position: relative;
        }
        .aside {
            width: 100px;
            height: 150px;
            float: left;
            background: blue;
        }
        .main {
            height: 200px;
            background: #f00;
            overflow:hidden;
        }
    </style>```
* 用于清除浮动，计算BFC高度（计算BFC高度时，浮动元素也会参与计算）
    * 一个高度塌陷的例子
    ```
        <!DOCTYPE html>
        <head>
        </head>
        <body>
            <div class="BFC">
                <div class="box"></div>
                <div class="box"></div>
            </div>
        </body>
        <style>
            .BFC{
                border: 5px solid #f00;
                width:300px;
            }
            .box{
                border: 5px solid blue;
                width: 100px;
                height: 100px;
                float: left;
            }
        </style>
    ```
    * 解决方法：将父元素设置为BFC
        * overflow:hidden;
*   实现两列布局
    *   左列定宽 + 右列自适应
    *   
*   Q&A
    *   既然body自身就是BFC，那么为什么还会发生高度坍塌？
    *   并不会参与计算
    

