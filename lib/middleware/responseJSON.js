module.exports = function () {
    return async function (ctx, next) {
        try {
            await next();
        } catch (err) {
            logger.info(err.stack);
        }
    };
};
