const jsonwebtoken = require("jsonwebtoken");

async function verifyToken(req, res, next) {
    try {
        let token = req.headers["authorization"];
        const bearer = token.split(" ");
        const realToken = bearer[1];

        if (realToken) {
            req.token = realToken;

            jsonwebtoken.verify(req.token, process.env.JWT_KEY, (err, deco) => {
                if (err) return res.sendStatus(404);

                next();
            });
        } else {
            res.sendStatus(403);
        }
    } catch (err) {
        res.sendStatus(400);
    }
}

module.exports = verifyToken