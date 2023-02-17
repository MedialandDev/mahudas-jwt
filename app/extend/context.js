const jwt = require('../../lib/jwt');
module.exports = (app) => {
    return {
        jwt: new jwt(app)
    }
}
