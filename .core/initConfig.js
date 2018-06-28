let env = process.env.NODE_ENV || 'development';
let baseConfig = require('../config/config');
global.APP = {}; global.APP.config = require('../config/' + env);
global.APP.config = Object.assign(baseConfig, global.APP.config);