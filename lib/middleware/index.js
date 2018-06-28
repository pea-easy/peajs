const ResponseJSON = require('./responseJSON');
const json = require('koa-json');
// const path = require('path');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const koaStaticPlus =require('koa-static-plus');
const path = require('path');

// const path = require('path');
module.exports = (app) => {
    app.use(ResponseJSON());
    app.use(bodyParser({
        enableTypes: ['json', 'form', 'text']
    }));
    app.use(cors());
    app.use(json());
    app.use(require('koa-static')(__dirname+'/public'));
    app.use(koaStaticPlus(path.join(__dirname, './public'), {
        pathPrefix: '/public'
    }));
    // logger
    app.use(async (ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        /*eslint no-console: */
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });

    
};