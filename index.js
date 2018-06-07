const Koa = require('koa')
const route = require('koa-route')
const static = require('koa-static')
const views = require('koa-views')
const path = require('path')
const app = new Koa()
app.use(static(path.join(__dirname, '/static')))

const index = ctx => {
    ctx.body = 'hello'
}

const main = ctx => ctx.body = 'main'

app.use(route.get('/main', main))
app.use(route.get('/index', index))


app.listen(3000)
console.log('server starts')