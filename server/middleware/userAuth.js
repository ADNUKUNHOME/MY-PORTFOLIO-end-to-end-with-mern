const jwt = require('jsonwebtoken');


const userAuth = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(500).json({
            success: false,
            message: 'Not Autherized. Login Again'
        })
    }

    try {

        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecoded.id) {
            req.body.userId = tokenDecoded.id
        } else {
            return res.status(500).json({
                success: false,
                message: 'Not Autherized. Login Again'
            })
        }

        next();

    } catch (e) {
        console.log(e);
        res.status(404).json({
            success: false,
            message: 'error occured'
        })
    }
}


module.exports = userAuth;