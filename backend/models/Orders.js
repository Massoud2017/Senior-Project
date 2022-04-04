const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  //order history
  const Orders = sequelize.define("Orders", {
    //product id and date will come from database no need to create colume for it.
    order_info: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price_total: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Orders;
};