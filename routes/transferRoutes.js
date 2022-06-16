const router = require("express").Router()
const userAuth = require("../middleware/userAuth")

router.post("/transferir",userAuth,async (req,res)=>{
    let emisor = req.user, recID = req.body.receptor, cantidad = req.body.cash
    if(emisor.saldo < cash){
        return res.status(400).json({msg:"No tiene suficiente saldo"})
    }
    let receptor = Usuario.find({id:recID})
    if(!receptor){
        return res.status(400).json({msg:"Receptor no existe"})
    }
    let horaDia = new Date()
    let fecha = `${horaDia.getFullYear()}-${horaDia.getMonth()}-${horaDia.getDate()}`
    let hora = `${horaDia.getHours()}:${horaDia.getMinutes()}:${horaDia.getSeconds()}`
    Usuario.update(emisor,{saldo:emisor.saldo-cash})
    Usuario.update(receptor,{saldo:receptor.saldo+cash})
    Transferencias.create({emisor:emisor.id,receptor:receptor.id,fecha,hora,cantidad:cash})
    let user = Usuario.findByPk(req.user.id)
    res.json(user)
})

router.get("/consultar/:id",userAuth,async(req,res)=>{
    let transfer = Transferencias.find({id:req.query.id})
    if(!transfer){
        return res.status(400).json({msg:"Esta transferencia no existe"})
    }
    res.json(transfer)
})

module.exports = router