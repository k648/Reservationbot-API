const Room = require('../model/room')

const Roomcreated = (req,res) =>{
    const{roomType,price,capacity,amenities, roomNumber, availability } = req.body;
   try {
      const createRoom = new Room({
        roomType,
        price,
        capacity,
        amenities,
        roomNumber,
        availability
      })

      createRoom.save()
      res.status(200).send({masg: 'room created successfully!'})
    } catch (error){
        res.status(400).send(error.message);
    }

}


const getRoomByAvalaibility = async (req, res) => {
    const { availability } = req.params; // Assuming your route has :name as the parameter

    try {
        // Find the reservation by name
        const getsingleRoom = await Room.findOne({ availability });
        
        if (!getsingleRoom ) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json({ getsingleRoom  });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



const getroombyNumber = async (req, res) => {
    const { roomType } = req.params; // Assuming your route has :name as the parameter

    try {
        // Find the reservation by name
        const getRoombyNumber = await Room.findOne({ roomNumber });
        
        if (!getRoombyNumber) {
            return res.status(404).json({ message: 'Room has been booked' });
        }

        res.status(200).json({ getRoombyNumber  });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const updateRoom = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const updatedItem = await Room.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
        res.send(updatedItem);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


const getAllRoom = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).send({rooms});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
};









module.exports = {
    Roomcreated,
    updateRoom,
    getAllRoom,
    getRoomByAvalaibility,
    getroombyNumber ,
}