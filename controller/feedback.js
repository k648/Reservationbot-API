const Feedback = require("../model/feedback");

const getAllFeedbacks = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).send({ feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getFeedback = async (req, res) => {
  try {
    const {
      params: { name },
    } = req;
    const singlefeedback = await Feedback.findOne({ name });
    if (!singlefeedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }
    res.status(200).send({ singlefeedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllFeedbacks,
  getFeedback,
};
