// 导入Koa
const Koa = require('koa')
// 创建Koa应用程序对象 app
const app = new Koa()

const Router = require('koa-router')
const router = new Router()
router.get('/class',(ctx,next)=>{
    ctx.body={name:张三}
})
app.use(router.routes())


app.listen(3000)


