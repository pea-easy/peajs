const Koa = require('koa');
const app = new Koa();
const onerror = require('koa-onerror');

// app.use(koaStaticPlus(path.join(__dirname, './public'), {
//     pathPrefix: '/public'
// }));

require('./.core/index');
require('./lib/middleware/index')(app);
require('./app/routes/index')(app);
require('./lib/spec');

// error handler
onerror(app);

// error-handling
app.on('error', (err, ctx) => {
    /*eslint no-console: */
    console.error('server error', err, ctx);
});
module.exports = app;
