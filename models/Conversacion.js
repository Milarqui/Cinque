import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize("cinque","username","password",{
    host:"localhost",
    dialect:"mysql"
})
const Conversacion = sequelize.define("Conversacion",{
    amistad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    origen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull:false
    },
    hora:{
        type: DataTypes.TIME,
        allowNull:false
    },
    mensaje:{
        type: DataTypes.TEXT,
        allowNull:false
    }
})

module.exports = sequelize.model("Conversacion",Conversacion)