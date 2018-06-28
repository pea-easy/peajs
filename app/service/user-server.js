let userDao = require('../dao/user-dao');
let validateUser = require('./validate/validate-user');

class userService {

    static async getUser(condition) {
        await validateUser.getUser(condition);
        return await userDao.find(condition);
    }


}

module.exports = userService;