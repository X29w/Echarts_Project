// 服务器的入口文件

// 创建koa的实例对象

const koa = require("koa")
const app = new koa()
// 绑定中间件
// 第一个中间件
const resDurationMiddleware = require('./middleware/koa_response_duration')
app.use(resDurationMiddleware)

// 第二个中间件
const resHeaderMiddleware = require('./middleware/koa_response_header.js')
app.use(resHeaderMiddleware)
// 第三个中间件
const resDataMiddleware = require('./middleware/koa_response_data.js')
app.use(resDataMiddleware)
// 绑定端口号为8888

app.listen(8888)

const webSocketService = require('./service/web_socket_service')
// 开启服务端的监听, 监听客户端的连接
// 当某一个客户端连接成功之后, 就会对这个客户端进行message事件的监听
webSocketService.listen()