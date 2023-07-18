const {AUTHORIZATION_TOKEN} = require("../config");

const isAuthorized = (req, res, next) => {
    if (req.headers.authorization === AUTHORIZATION_TOKEN) {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized Access" });
    }
};

module.exports = {
    isAuthorized: isAuthorized,
};
