const APIFeatures = require("../lib/feature");
const mainControllers = {
  getData: (Model) => {
    return async (req, res) => {
      try {
        const features = new APIFeatures(
          Model.find({}),
          req.query
        ).paginating();
        const featureCount = new APIFeatures(
          Model.find({}),
          req.query
        ).counting();
        const total = await featureCount.query;
        const result = await features.query;

        return res.status(200).json({
          success: true,
          message: "Get Data Successfully!",
          result,
          total,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
        });
      }
    };
  },

  getExerciseByBodyPart: (Model) => {
    return async (req, res) => {
      const { idBodyPart } = req.params;
      try {
        const features = new APIFeatures(
          Model.find(idBodyPart === "all" ? {} : { bodyPart: idBodyPart }),
          req.query
        ).paginating();
        const featureCount = new APIFeatures(
          Model.find({}),
          req.query
        ).counting();
        const total = await featureCount.query;

        const result = await features.query;

        return res.status(200).json({
          success: true,
          message: "Get exercises by body part successfully!",
          result,
          total,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
        });
      }
    };
  },

  getExerciseByTargetMuscle: (Model) => {
    return async (req, res) => {
      const { idTargetMuscle } = req.params;
      try {
        const features = new APIFeatures(
          Model.find({ target: idTargetMuscle }),
          req.query
        ).paginating();
        const featureCount = new APIFeatures(
          Model.find({}),
          req.query
        ).counting();
        const total = await featureCount.query;

        const result = await features.query;

        return res.status(200).json({
          success: true,
          message: "Get exercises by target muscle successfully!",
          result,
          total,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
        });
      }
    };
  },

  getExerciseByEquipment: (Model) => {
    return async (req, res) => {
      const { idEquipment } = req.params;
      try {
        const features = new APIFeatures(
          Model.find({ equipment: idEquipment }),
          req.query
        ).paginating();
        const featureCount = new APIFeatures(
          Model.find({}),
          req.query
        ).counting();
        const total = await featureCount.query;
        const result = await features.query;

        return res.status(200).json({
          success: true,
          message: "Get exercises by equipment successfully!",
          result,
          total,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
        });
      }
    };
  },

  getExerciseById: (Model) => {
    return async (req, res) => {
      const { idExercise } = req.params;
      try {
        const features = new APIFeatures(
          Model.find({ id: idExercise }),
          req.query
        ).paginating();
        const featureCount = new APIFeatures(
          Model.find({}),
          req.query
        ).counting();
        const total = await featureCount.query;

        const result = await features.query;

        return res.status(200).json({
          success: true,
          message: "Get exercise by id successfully!",
          result,
          total,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
        });
      }
    };
  },

  searchExerciseByName: (Model) => {
    return async (req, res) => {
      const { name } = req.body;
      try {
        const features = new APIFeatures(
          Model.find({
            $text: {
              $search: name,
            },
          }),
          req.query
        );
        const featureCount = new APIFeatures(
          Model.find({
            $text: {
              $search: name,
            },
          }),
          req.query
        ).counting();
        const total = await featureCount.query;
        const result = await features.query;

        return res.status(200).json({
          success: true,
          message: "Get exercises by name successfully!",
          result,
          total,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
        });
      }
    };
  },
};

module.exports = mainControllers;
