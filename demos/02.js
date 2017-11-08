const Koa = require('koa');
const app = new Koa();

// Context.response.body属性就是发送给用户的内容
// ctx.response代表 HTTP Response。同样地，ctx.request代表 HTTP Request。
const main = ctx => {
  ctx.response.body = 'Hello World';
};
// 使用app.use方法加载main函数。
app.use(main);
app.listen(3000);
