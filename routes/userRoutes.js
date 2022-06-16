const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userAuth = require("../middleware/userAuth")
const Usuario = require("../models/Usuario")

router.post("/login",async(req,res)=>{
    const { email, password } = req.body

    if(!email || !password){
        return res.status(400).json({msg: "Falta usuario o contraseña"})
    }
    const user = {} // Buscar por email
    const isMatch = await bcrypt.compare(password, user.password)
    if(!user || !isMatch){
        return res.status(400).json({msg: "Usuario o contraseña incorrectos"})
    }
    const amistades = {} //Buscar amistades por ID usuario
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
    res.json({
        token,
        user: {
            id: user._id,
            nombre: user.nombre,
            apellidos: user.apellidos,
            telefono: user.telefono,
            email: user.email,
            fecha: user.nacimiento,
            saldo: user.saldo,
            amigos: amistades
        }
    })
})

router.post("/logout",async(req,res)=>{
    try{
        res.json({
            token:undefined,
            user:undefined
        })
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

function checkBirth(date){
    let today = new Date(), birth = new Date(date)
    let diff = (today - birth)/(1000*3600*24*365)
    
    return diff >= 18.0
}

router.put("/newUser", async(req,res)=>{
    const { name, surname, phone, email, birthdate, password1, password2 } = req.body

    if(!name || !surname || !phone || !email || !birthdate || !password1 || !password2){
        return res.status(400).json({msg:"Faltan campos por rellenar"})
    }
    const user = Usuario.find({telefono:phone}) //Buscar en USUARIOS por TELÉFONO
    if(user){
        res.status(400).json({msg: "Este teléfono ya tiene cuenta"})
    }
    if(password1 !== password2){
        res.status(400).json({msg: "Las contraseñas no son iguales"})
    }
    if(password1.length < 8){
        res.status(400).json({msg: "La contraseña debe tener 8 o más caracteres"})
    }
    if(!checkBirth(birthdate)){
        res.status(400).json({msg: "La edad mínima de usuario debe ser 18 años"})
    }
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password1,salt)
    const newUser = Usuario.create({
        nombre: name,
        apellido: surname,
        telefono: phone,
        email,
        nacimiento: birthdate,
        saldo: 100.00,
        password: passwordHash
    })//Crear Usuario
})

router.put("/actualizarPerfil",userAuth,async(req,res)=>{
    const { user, name, surname, phone, email, birthdate, password } = req.body
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        res.status(400).json({msg: "Introduzca la contraseña para realizar los cambios"})
    }
    Usuario.update(user,{
        nombre: name,
        apellido: surname,
        telefono: phone,
        email,
        nacimiento: birthdate
    })

})

router.get("/getBasicsId/:id",userAuth, async(req,res)=>{
    const user = Usuario.find({id:req.query.id}) //Buscar Usuario por ID
    res.json({
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        telefono: user.telefono
    })
})

router.get("/getBasicsPhone/:id",userAuth, async(req,res)=>{
    const user = Usuario.find({telefono:req.query.id}) //Buscar Usuario por Teléfono
    res.json({
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        telefono: user.telefono
    })
})

module.exports = router