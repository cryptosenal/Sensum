const homeController = {};

homeController.renderIndex = async (req, res, next) => {
  try {
      res.status(200).send("Index ")
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = homeController;