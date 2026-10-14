const { dbHandler, DataTypes } = require('../dbConnection')
const table = dbHandler.define('country',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{//pl.: Hungary
        type: DataTypes.STRING,
        allowNull: false
    },
    notation:{//pl.:HU
        type: DataTypes.STRING,
        allowNull: false
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: 'country'
})

module.exports = table