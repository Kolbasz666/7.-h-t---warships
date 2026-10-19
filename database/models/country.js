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
    userId:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
},{
    tableName: 'country'
})

module.exports = table