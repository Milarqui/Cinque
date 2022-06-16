import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize("cinque","username","password",{
    host:"localhost",
    dialect:"mysql"
})
const Transferencia = sequelize.define("Transferencia",{
    emisor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    receptor: {
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
    cantidad:{
        type: DataTypes.FLOAT,
        allowNull:false
    },
})

module.exports = sequelize.model("Transferencia",Transferencia)