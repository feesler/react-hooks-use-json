const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const { nanoid } = require('nanoid');

const ticketsData = [{
  id: nanoid(), company: 'KLM', departure: 'St.Petersburg', departureTime: '06:50', arrival: 'Amsterdam', arrivalTime: '12:30', price: 11350,
}, {
  id: nanoid(), company: 'KLM', departure: 'St.Petersburg', departureTime: '09:20', arrival: 'Amsterdam', arrivalTime: '19:45', price: 9750,
}, {
  id: nanoid(), company: 'KLM', departure: 'St.Petersburg', departureTime: '15:40', arrival: 'Amsterdam', arrivalTime: '21:15', price: 14800,
}];

const app = new Koa();
app.use(cors());
app.use(koaBody());

const router = new Router();
router.get('/data', async (ctx, next) => {
  ctx.response.body = { status: "ok" };
});
router.post('/error', async (ctx, next) => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  ctx.response.status = 500;
  ctx.response.body = { status: "Internal Error" };
});
router.get('/loading', async (ctx, next) => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  ctx.response.body = {
    status: "ok",
    tickets: ticketsData,
  };
});

app.use(router.routes())
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);