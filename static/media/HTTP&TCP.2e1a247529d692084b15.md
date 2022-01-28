# HTTP
        HTTP是基于TCP/IP协议的应
    用层协议
        规定客户端与服务器之间的通
    信格式
### 报文格式
    1. 起始行
        描述请求或响应的基本信息
    2. 头部字段合集（header）
        使用key-value的形式更详细的说明报文
    3. 消息正文（entity）
        实际传输的数据
#### 图解：
![图解](https://static001.geekbang.org/infoq/72/729ca82aac598f042a848f9ba59293f9.png)
### 请求/响应格式
*   请求报文格式
    ![请求报文格式](https://static001.geekbang.org/infoq/f7/f71d705041c02d0b1887cd8d5fc19760.png)
*   响应报文格式
    ![响应报文格式](https://static001.geekbang.org/infoq/94/94c457bf22bcba348313c53c41493ede.png)
    *   content-type字段：
        告诉客户端数据的格式
        *   text/html
        *   text/css
        *   image/png
        *   audio/mp4
        *   application/javascript
        *   application/pdf
### HTTP状态码
*   1xx: 待处理
*   2xx: 请求成功
*   3xx: 重定向，需要进一步操作
*   4xx: 客户端错误
*   5xx: 服务器端错误
### 常见方法说明
*   GET: 请求指定的页面信息
*   POST：向指定资源提交数据进行处理请求（eg.提交表单或上传文件）。数据被包含在请求体entity中
*   PUT：
    从客户端向服务器传送的数据，取代指定的文档内容（eg.添加）
*   HEAD：用于快速获取资源，与get方法类似，服务器响应只返回实体的头部份
### HTTP1.1 keep alive
    默认connection：keep-alive

#   TCP
    数据传输->多个局域网如何互通(IP)->可靠传输(TCP)
### TCP数据包的大小
        以太网数据包（packet）大
    小固定，1522字节，22头信息，1500字节负载
        IP数据包在负载里，头部信息
    至少20字节，负载最多1480字节
        TCP数据包在IP数据包负载
    里，头部信息最少为20字节，因此最大负载为1460字节
### TCP数据包的编号
    一个包1400字节，发送大文件，要给包编号
    每个包包含：自身的编号+下一个包的编号
    组装：由操作系统完成
### 拥塞控制
![](https://img-blog.csdn.net/20160912223524372?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)
### ACK+遗失处理
    默认情况下，接收方每收到两个TCP数据包，就发送一个确认消息ACK。
    ACK携带
    *   期待收到的下一个数据包的编号，没有收到则不会改变
    *   接收方接收窗口的剩余容量
    *   连续三次重复ACK，判定包遗失，重发
### TCP请求响应头
    头定义：
    源端口号、目标端口号
    顺序号seq（发送数据的长度计数）、确认序号ack（期望收到下一段的第一个字节）、头部长度、窗口大小等
    
