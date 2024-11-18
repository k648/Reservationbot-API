const cancelledReservation = require("../model/cancelledReservation");

const getAllCancelledReservations = async (req, res) => {
  try {
    const cancelledReservations = await cancelledReservation.find();
    res.status(200).json(cancelledReservations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCancelledReservation = async (req, res) => {
  const { name } = req.params;
  try {
    const singlecancelledreservation = await cancelledReservation.findOne({
      name,
    });
    if (!singlecancelledreservation) {
      return res
        .status(404)
        .json({ message: "No cancelled Reservation found" });
    }
    res.status(200).json({ singlecancelledreservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllCancelledReservations,
  getCancelledReservation,
};
