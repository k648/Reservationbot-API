
const Reservation = require('../model/reservation');

const getAllReservation = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).send({reservations});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
};


const getReservation = async (req, res) => {
    const { name } = req.params; // Assuming your route has :name as the parameter

    try {
        // Find the reservation by name
        const singleReservation = await Reservation.findOne({ name });
        
        if (!singleReservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        res.status(200).json({ singleReservation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};







const updateReservation = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const updatedItem = await Reservation.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
        if (!updatedItem) {
            return res.status(404).send('Reservation not found');
        }
        res.status(200).json({msg : 'reservation confirmed successfully'});
    } catch (error) {
        res.status(400).send(error.message);
    }
};






module.exports = {
    getAllReservation,
    getReservation,
    updateReservation,
};

