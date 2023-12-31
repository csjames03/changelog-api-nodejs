import jwt from 'jsonwebtoken'

export const createJWT = (user) =>{
    const token = jwt.sign({
        id: user.id, 
        username: user.username
    }, 
        process.env.JWT_SECRET
        )
    return token
    }

export const protect = (req, res, next) =>{
     const bearer = req.headers.authorization


     if(!bearer){
        res.status(401)
        res.json({ 'message': 'Not authorized' })
        return
     }

     const [, token] =  bearer.split(" ")

     if(!token){
        res.status(401)
        res.json({ 'message': 'Not valid Token' })
        return
     }

    try{
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
     }catch(err){
        console.log(err)
        res.status(401)
        res.json({ 'message': 'Not Valid Token' })
        return
     }
}