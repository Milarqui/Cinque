const router = require("express").Router()
const userAuth = require("../middleware/userAuth")
const Amistad = require("../models/Amistad")
const Conversacion = require("../models/Conversacion")

router.post("/enviar",userAuth,async(req,res)=>{
    const { mensaje, amistad } = req.body
    let amitie = await Amistad.findByPk(amistad)
    if(!amitie){
        return res.status(400).json({msg:"No existe esta amistad"})
    }
    let origen = req.user.id
    let horaDia = new Date()
    let fecha = `${horaDia.getFullYear()}-${horaDia.getMonth()}-${horaDia.getDate()}`
    let hora = `${horaDia.getHours()}:${horaDia.getMinutes()}:${horaDia.getSeconds()}`
    await Conversacion.create({amistad,origen,fecha,hora,mensaje})
    let conversations = await Conversacion.find({amistad})
    let mensajes = JSON.stringify(conversations)
    res.json({mensajes})
})

router.get("/recuperar/:id",userAuth,async(req,res)=>{
    let amitie = await Amistad.find({id:req.query.id})
    if(!amitie){
        return res.status(400).json({msg:"No existe esta amistad"})
    }
    let conversaciones = await Conversacion.find({amistad:req.query.id})
    let mensajes = JSON.stringify(conversaciones)
    res.json({mensajes})
})

module.exports = router