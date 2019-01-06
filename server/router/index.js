const Router = require('koa-router');
const router = new Router();

const controllers = require('../../controllers');

router.all('/comments', (ctx) => controllers.comments(ctx));

module.exports = router;
