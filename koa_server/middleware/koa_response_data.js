// 处理业务逻辑的中间件，读取某个json文件的数据
const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
    // 根据url读取内容
    const url = ctx.request.url
    let filePath = url.replace('/api', '')
    filePath = '../data' + filePath + '.json'
    filePath = path.join(__dirname, filePath)
    try {
        const ret = await fileUtils.getFileJsonData(filePath)
        ctx.response.body = ret
    } catch (error) {
        const errorMsg = {
            message: '"Monday提示您:"未能获取到您想要的文件，有可能并不存在',
            status:404
        }
        ctx.response.body = JSON.stringify(errorMsg)
    }
    console.log(filePath);
    await next()
}
