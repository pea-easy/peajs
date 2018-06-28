
let userService = require('../service/user-server');

exports.getUser = async (ctx) => {
    try {
        let body = ctx.params;
        let result = await userService.getUser(body);
        ctx.body = result;
    } catch (error) {
        ctx.body = error.toString();
    }
};

