const jwt = require("jsonwebtoken")

const userAuth = (req,res,next)=>{
    try{
        const token = req.header("user-auth")

        if(!token){
            return res.status(401).json({msg:"Acceso denegado por falta de token"})
        }
        const verified = jwt.verify(token,process.env.JWT_SECRET)
        if(!verified){
            return res.status(401).json({msg:"Acceso denegado por token caducado"})
        }
        req.user = verified.id
        next()
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}

module.exports = userAuth