const { Model } = require("mongoose");

const { positionSchema } = require("../schema/positionSchema");

const { positionModel } = new Model("position", positionSchema);

module.exports = { positionModel };
