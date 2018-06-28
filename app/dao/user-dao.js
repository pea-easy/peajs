

class serviceDao {
    static async find(condition) {
        let result;
        let users = [{
            id:1,
            name:'tim'
        }, { id:2,
            name: 'lisa'}];
        users.forEach((e) => {
            if(e.id == condition.id) result = e;
        });
        return result;
    }
}
module.exports = serviceDao;




