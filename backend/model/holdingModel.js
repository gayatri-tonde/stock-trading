const { Model } = require("mongoose");

const { holdingSchema } = require("../schema/holdingSchema");

const { holdingModel } = new Model("holding", holdingSchema);

module.exports = { holdingModel };
