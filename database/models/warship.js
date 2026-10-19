const { dbHandler, DataTypes } = require('../dbConnection')
const table = dbHandler.define('warship',{
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
    length:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    maxSpeed:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    color:{
        type: DataTypes.STRING,
        allowNull: false
    },
    weight:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productionYear:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    crew:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    range:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    power:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    divisionId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'warship'
})

module.exports = table