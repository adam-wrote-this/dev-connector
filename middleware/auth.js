import jwt from 'jsonwebtoken'
import config from 'config'

export default function (req, res, next) {
  const token = req.header('x-auth-token')

  if (!token) {
    return res.status(401).json({
      msg: 'No token, authorization denied'
    })
  }

  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({
          msg: 'Token is not valid'
        })
      } else {
        req.user = decoded.user
        next()
      }
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}
