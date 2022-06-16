import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize("cinque","username","password",{
    host:"localhost",
    dialect:"mysql"
})
const Amistad = sequelize.define("Amistad",{
    id:{
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario1ID:{
        type: DataTypes.STRING,
        allowNull:false
    },
    usuario2ID:{
        type: DataTypes.STRING,
        allowNull:false
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull:false
    },
    hora:{
        type: DataTypes.TIME,
        allowNull:false
    },
    aceptada:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = sequelize.model("Amistad",Amistad)