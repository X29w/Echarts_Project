// 计算服务器消耗时长的中间件
// 向外导出
module.exports = async (ctx, next) => {
    // 记录服务器开始运行时间
    const start = Date.now();
    // 让其他中间件跑起来
    await next();
    // 记录结束时间
    const end = Date.now();
    // 设置响应头X-Response-Time
    const duration = end - start;
    // ctx.set 设置响应头
    ctx.set('X-Response-Time',duration+'ms')
}