require('dotenv').config();
const PORT = process.env.PORT || 3000;

const Koa = require('koa');
const app = new Koa();

// Middleware
const logResponseTime = require(`./server/middleware/logResponseTime`);
const startResponseTime = require(`./server/middleware/startResponseTime`);
const router = require('./server/router');

app.use(logResponseTime)
    .use(startResponseTime)
    .use(router.routes());

app.listen(PORT, console.log(`Koa listenting on port ${PORT}`));
