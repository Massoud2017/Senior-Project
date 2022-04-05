const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define("Users", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
	
  //-- Adding foreign key constraint: a user can has many orders
  // Users.associate = (models) => {
  //   Users.hasMany(models.Orders, {
  //     onDelete: 'cascade'
  //   });
  // };

	return Users;
};