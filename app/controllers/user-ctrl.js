
let userService = require('../service/user-server');

exports.getUser = async (ctx) => {
    let body = ctx.params;
    let result = await userService.getUser(body);
    ctx.body = result;
};

