const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
        const Users = sequelize.define("Users", {
                name: {
                        type: DataTypes.STRING, 
                        allowNull:false,
                },
                last_name: {
                        type: DataTypes.STRING, 
                        allowNull:false,
                },
                username: {
                        type: DataTypes.STRING, 
                        allowNull:false,
                },
                password: {
                        type:DataTypes.STRING,
                        allowNull:false,
                },
        });
        return Users; 
};