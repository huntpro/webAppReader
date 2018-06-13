const Koa = require('koa')
const route = require('koa-route')
const static = require('koa-static')
const views = require('koa-views')
const path = require('path')
const url = require('url')
const qs = require('querystring')
const service = require('./service/data')

const app = new Koa()
app.use(static(path.join(__dirname, '/static')))
app.use(views(path.join(__dirname, '/views'), {
    map: {
        html: 'ejs'
    }
}))

app.use(route.get('/', ctx => ctx.render('index.html')))
app.use(route.get('/user', ctx => ctx.render('user.html')))
app.use(route.get('/book', ctx => ctx.render('book.html',{nav:'书籍详情'})))
app.use(route.get('/bookData', ctx => {
    const param = qs.parse(ctx.req._parsedUrl.query)
    const id = param.id || ''
    const data = JSON.parse(service.getBookData(id))
    const book = data.item
    book.state = book.finished ? '已完结' : '连载中'
    ctx.body = data
}))
app.use(route.get('/hot', ctx => ctx.body = service.getHotData()))

app.listen(3000)
console.log('server starts')