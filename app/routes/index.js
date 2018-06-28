const router = require('koa-router')();

module.exports = (app) => {
    app.use(router.routes(), router.allowedMethods());
    router.get('/', async (ctx) => {
        ctx.body = { name: 'Hello World '};
    });
    const user = require('./user');
    app.use(user.routes(), user.allowedMethods());

};
