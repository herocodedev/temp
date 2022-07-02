const mongoose = require("mongoose");
const exerciseSchema = new mongoose.Schema({
  bodyPart: {
    type: String,
  },
  gifUrl: {
    type: String,
  },
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  target: {
    type: String,
  },
  equipment: {
    type: String,
  },
});

// exerciseSchema.index({ bodyPart: "text", name: "text", target: "text" });
exerciseSchema.index({ bodyPart: 1, id: 1, target: 1, equipment: 1 });
exerciseSchema.index({ name: "text" });

const Exercises = mongoose.model("Exercises", exerciseSchema);
Exercises.createIndexes({ bodyPart: 1, id: 1, target: 1, equipment: 1 });
Exercises.createIndexes({ name: "text" });

// Exercises.createIndexes({ bodyPart: "text", name: "text", target: "text" });
module.exports = Exercises;
