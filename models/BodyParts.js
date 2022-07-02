const mongoose = require("mongoose");
const bodyPartsSchema = new mongoose.Schema({
  bodyParts: {
    type: Array,
  },
});

const BodyParts = mongoose.model("BodyParts", bodyPartsSchema);
module.exports = BodyParts;
