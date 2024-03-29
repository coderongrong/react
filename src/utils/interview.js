/**
 * Set 和 Map 主要的应用场景在于 数据重组 和 数据储存。
 * 
 * 
*/

/**
 *  普通函数 -> 箭头函数
1、外形不同：箭头函数使用箭头定义，普通函数中没有。
2、 箭头函数全都是匿名函数：普通函数可以有匿名函数，也可以有具名函数
3、箭头函数不能用于构造函数：普通函数可以用于构造函数，以此创建对象实例。
4、箭头函数中 this 的指向不同：在普通函数中，this 总是指向调用它的对象，如果用作构造函数，它指向创建的对象实例。
5、箭头函数不具有 arguments 对象：每一个普通函数调用后都具有一个
   arguments 对象，用来存储实际传递的参数。但是箭头函数并没有此对象。
6、其他区别：箭头函数不具有 prototype 原型对象。箭头函数不具有 super。
箭头函数不具有 new.target
先说明下new.target是干嘛的，这家伙是用来检测函数是否被当做构造函数使用，他会返回一个指向构造函数的引用。
因为箭头函数不能当做构造函数使用，自然是没有new.target的。
*/

/**
 * 
 * 
第1次握手：客户端发送一个带有SYN（synchronize）标志的数据包给服务端；                       web(SYN) -> serve    (SYN   Ack)

第2次握手：服务端接收成功后，回传一个带有SYN/ACK标志的数据包传递确认信息，表示我收到了；      serve(SYN/ACK) -> web

第3次握手：客户端再回传一个带有ACK标志的数据包，表示我知道了，握手结束。                     web(ACK) -> serve

其中：SYN标志位数置1，表示建立TCP连接；ACK标志表示验证字段。

三次握手过程详细说明：

1、客户端发送建立TCP连接的请求报文，其中报文中包含seq序列号，是由发送端随机生成的，并且将报文中的SYN字段置为1，表示需要建立TCP连接。（SYN=1，seq=x，x为随机生成数值）；

2、服务端回复客户端发送的TCP连接请求报文，其中包含seq序列号，是由回复端随机生成的，并且将SYN置为1，而且会产生ACK字段，ACK字段数值是在客户端发送过来的序列号seq的基础上加1进行回复，以便客户端收到信息时，知晓自己的TCP建立请求已得到验证。（SYN=1，ACK=x+1，seq=y，y为随机生成数值）这里的ack加1可以理解为是确认和谁建立连接；

3、客户端收到服务端发送的TCP建立验证请求后，会使自己的序列号加1表示，并且再次回复ACK验证请求，在服务端发过来的seq上加1进行回复。（SYN=1，ACK=y+1，seq=x+1）。
 * 
第1次挥手：客户端发送一个FIN，用来关闭客户端到服务端的数据传送，客户端进入FIN_WAIT_1状态；                                                  web(FIN) -> serve  (FIN ACK)

第2次挥手：服务端收到FIN后，发送一个ACK给客户端，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），服务端进入CLOSE_WAIT状态；            serve(ACK) -> web

第3次挥手：服务端发送一个FIN，用来关闭服务端到客户端的数据传送，服务端进入LAST_ACK状态；                                                     serve(FIN) -> web

第4次挥手：客户端收到FIN后，客户端t进入TIME_WAIT状态，接着发送一个ACK给Server，确认序号为收到序号+1，服务端进入CLOSED状态，完成四次挥手。       web(FIN) -> serve
*/

