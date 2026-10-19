const { dbHandler, DataTypes } = require('../dbConnection')
const table = dbHandler.define('user',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    accountType:{
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: 'user'
})

module.exports = table