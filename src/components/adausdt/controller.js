const adausdtController = {};

adausdtController.renderTime = async (req, res, next) => {
  try {
    const {time} = req.params ;
    res.status(200).send(`Hello from adausdt ${time}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = adausdtController;
