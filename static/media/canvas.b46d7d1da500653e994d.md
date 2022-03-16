# canvas
### 如何理解canvas？和svg有什么区别
### 为什么使用requestAnimationFrame而不是Settimeout/setInterval
    requestAnimationFrame是HTML5新增的api
RAF的特点
*   按帧对网页进行重绘，根据浏览器的固有的刷新频率进行重绘
*   
    settimeout/setinterval 宏任务，不一定按照指定的时间间隔执行，如果交叉着微任务，那么就会有误差。
    参考事件队列
*   与屏幕的刷新步调可能不一致

*   canvas性能优化
    *   对对象进行计算，而非直接操作context
    *   分层canvas
        *   生成多个canvas实例
        *   使用z-index决定堆叠的次序   
    *   离屏canvas
        *   myx.offscreenCanvas
            *   设置高和宽
        *   myx.offscreenContext
        *   myx.render()
        *   使用drawImage，将待绘制的区域提前裁剪好，也就是不要在drawImage时缩放图像
        *   相似的图像，操作，提前绘制好
    *   只渲染（可见or部分）canvas
        *   计算可见的部分
    *   避免使用浮点数坐标点而使用整数
        *   画一个没有整数坐标点的对象时会发生子像素渲染


