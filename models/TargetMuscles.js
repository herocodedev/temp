const mongoose = require("mongoose");
const targetMusclesSchema = new mongoose.Schema({
  targetMuscles: {
    type: Array,
  },
});

const TargetMuscles = mongoose.model("TargetMuscles", targetMusclesSchema);
module.exports = TargetMuscles;
