class validateUser {
    static async getUser(condition) {
        if (!condition.id) {
            throw 'id is Lost';
        }
    }
}

module.exports = validateUser;