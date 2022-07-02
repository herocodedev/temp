const mongoose = require("mongoose");
const equipmentSchema = new mongoose.Schema({
  equipments: {
    type: Array,
  },
});

const Equipment = mongoose.model("Equipment", equipmentSchema);
module.exports = Equipment;
