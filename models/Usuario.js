import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize("cinque","username","password",{
    host:"localhost",
    dialect:"mysql"
})
const Usuario = sequelize.define("Usuario",{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    nacimiento:{
        type: DataTypes.DATE,
        allowNull: false
    },
    saldo:{
        type: DataTypes.FLOAT,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

module.exports = sequelize.model("Usuario",Usuario)