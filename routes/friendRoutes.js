const router = require("express").Router()
const userAuth = require("../middleware/userAuth")
const Usuario = require("../models/Usuario")
const Amistad = require("../models/Amistad")
const { Op } = require("sequelize")

router.put("/solicitar",userAuth,async(req,res)=>{
    const { id, tipo } = req.body
    var usuario
    if(!id && !tipo){
        return res.status(400).json({msg: "Introduzca el teléfono o el número de cuenta"})
    }
    if(tipo==="id") usuario = await Usuario.findByPk(id)//Busca usuario por id
    else if(tipo==="tlf") usuario = await Usuario.findOne({telefono:id})
    if(!usuario){
        return res.status(400).json({msg: "No existe ningún usuario con ese número de cuenta/teléfono"})
    }
    let horaDia = new Date()
    let fecha = `${horaDia.getFullYear()}-${horaDia.getMonth()}-${horaDia.getDate()}`
    let hora = `${horaDia.getHours()}:${horaDia.getMinutes()}:${horaDia.getSeconds()}`
    await Amistad.create({usuario1ID:user._id,usuario2ID:usuario._id,fecha,hora,aceptada:false})//Crea amistad
})

router.get("/amigos",userAuth,async(req,res)=>{
    var amistades = await Amistad.findAll({
        where:{
            [Op.or]:[
                {usuario1ID:req.user.id},
                {usuario2ID:req.user.id}
            ]
        }
    })
    res.json(amistades)
})

router.put("/aceptar/:id",userAuth,async(req,res)=>{
    var amistad = await Amistad.findByPk(req.query.id)
    if(!amistad){
        return res.status(400).json({msg: "Error"})
    }
    Amistad.update(amistad,{aceptada:true})//Actualizamos amistad
})

router.put("/rechazar/:id",userAuth,async(req,res)=>{
    var amistad = await Amistad.findByPk(req.query.id)
    if(!amistad){
        return res.status(400).json({msg: "Error"})
    }
    Amistad.delete(amistad)//Eliminar amistad
})

router.delete("/eliminar/:id",userAuth,async(req,res)=>{
    var amistad = await Amistad.findByPk(req.query.id)
    if(!amistad){
        return res.status(400).json({msg: "Error"})
    }
    Amistad.delete(amistad)//Eliminar amistad
})

module.exports = router