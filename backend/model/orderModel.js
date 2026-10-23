const { Model } = require("mongoose");

const { orderSchema } = require("../schema/orderSchema");

const { orderModel } = new Model("order", orderSchema);

module.exports = { orderModel };
