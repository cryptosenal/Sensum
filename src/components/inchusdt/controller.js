const inchusdtController = {};

inchusdtController.renderTime = async (req, res, next) => {
  try {
    const { time } = req.params;
    res.status(200).send(`Hello from 1inchusdt ${time}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = inchusdtController;
