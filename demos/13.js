const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

// ctx.response.redirect()方法可以发出一个302跳转，将用户导向另一个路由
const redirect = ctx => {
  ctx.response.redirect('/');
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/redirect', redirect));

app.use(main);
app.listen(3000);
