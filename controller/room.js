const Room = require("../model/room");

const Roomcreated = (req, res) => {
  const { roomType, price, capacity, amenities, roomNumber, availability } =
    req.body;
  try {
    const createRoom = new Room({
      roomType,
      price,
      capacity,
      amenities,
      roomNumber,
      availability,
    });

    createRoom.save();
    res.status(200).send({ masg: "room created successfully!" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getRoomByAvalaibility = async (req, res) => {
  const { availability } = req.params;

  try {
    const rooms = await Room.find({ availability });

    if (rooms.length === 0) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json({ rooms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getRoomByType = async (req, res) => {
  try {
    const { roomType } = req.body;

    if (!roomType) {
      console.log("Room type not provided");
      return res.status(400).json({ message: "Room type is required" });
    }


    const getRoom = await Room.find({ roomType: { $regex: new RegExp(`^${roomType.trim()}$`, "i") } });

    if (getRoom.length === 0) {
      return res.status(404).json({ message: "No room found for the given type" });
    }

    res.status(200).json({ getRoom });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getRoomByNumber = async (req, res) => {
  const { roomNumber } = req.query;
 
  if (!roomNumber) {
    return res.status(400).send("Room number is required");
  }

 
  const roomNumberInt = parseInt(roomNumber, 10); 

  if (isNaN(roomNumberInt)) {
    return res.status(400).send("Invalid room number format");
  }

  try {
    const findRoom = await Room.findOne({ roomNumber: roomNumberInt });

    if (!findRoom) {
      return res.status(404).send("Room number not found");
    }

    res.status(200).json({ findRoom });
  } catch (error) {
    console.error("Error fetching room:", error);
    res.status(500).send("Internal server error");
  }
};



const updateRoom = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedItem = await Room.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!updatedItem) {
      return res.status(404).send("No room found");
    }
    res.status(200).json({msg: 'room updated successfully'})
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllRoom = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).send({ rooms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  Roomcreated,
  updateRoom,
  getAllRoom,
  getRoomByAvalaibility,
  getRoomByType,
  getRoomByNumber
};
