const aaveusdtController = {};

aaveusdtController.renderTime = async (req, res, next) => {
  try {
    const { time } = req.params;
    res.status(200).send(`Hello from aaveusdt ${time}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = aaveusdtController;
