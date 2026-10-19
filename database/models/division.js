const { dbHandler, DataTypes } = require('../dbConnection')
const table = dbHandler.define('division',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    notation:{
        type: DataTypes.STRING,
        allowNull: false
    },
    countryId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    tableName: 'division'
})

module.exports = table