const mainControllers = require("../controllers/mainControllers");
const Equipment = require("../models/Equipment");
const Exercises = require("../models/Exercises");
const BodyParts = require("../models/BodyParts");
const TargetMuscles = require("../models/TargetMuscles");
const APIFeatures = require("../lib/feature");

const router = require("express").Router();
router.get("/", (req, res, next) => {
  res.status(200).json({
    mess: "success",
  });
});

router.get("/exercises", mainControllers.getData(Exercises));
router.get("/equipments", mainControllers.getData(Equipment));
router.get("/bodyParts", mainControllers.getData(BodyParts));
router.get("/targetMuscles", mainControllers.getData(TargetMuscles));

router.get(
  "/bodyParts/:idBodyPart",
  mainControllers.getExerciseByBodyPart(Exercises)
);

router.get("/exercise/:idExercise", mainControllers.getExerciseById(Exercises));

router.post("/searchExercise", mainControllers.searchExerciseByName(Exercises));

router.get(
  "/targetMuscle/:idTargetMuscle",
  mainControllers.getExerciseByTargetMuscle(Exercises)
);

router.get(
  "/equipment/:idEquipment",
  mainControllers.getExerciseByEquipment(Exercises)
);
module.exports = router;
