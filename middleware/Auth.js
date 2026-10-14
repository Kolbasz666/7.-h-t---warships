require('dotenv').config({ quiet: true })
const jwt = require('jsonwebtoken')

const SK = process.env.SECRET_KEY

function Auth() {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization
            if (!token)
                return res.status(401).json({message:'Hiányzó token'})
            const decodedToken = jwt.verify(token, SK)
            req.countryId = decodedToken.countryId
            req.divisionId = decodedToken.divisionId
            next()
        } catch (error) {
            console.log(error);
            return res.status(401).json({message:'Hibás token'})
        }
    }
}

module.exports = Auth