
let plugin = require('../config/plugin');
module.exports = () => {
    let keys = Object.keys(plugin);
    for (let i = 0; i < keys.length; i++) {
        if (plugin[keys[i]].enable === true) {
            global.APP[keys[i]] = require(plugin[keys[i]].package);
            global.APP[keys[i]].connect(global.APP.config[keys[i]]);
            /*eslint no-console: */
            console.log(keys[i] + ' has init');
        }
    }
};
