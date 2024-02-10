const User = require("../models/User");

//to creat a user
const fetchData = async(req, res) => {
    try {
        const { 
            username,
            email,
            city,
            occupation,
            address,
            phonenumber,
        } = req.body;
     
        const newUser = new User({
            username,
            email,
            city,
            occupation,
            address,
            phonenumber,
        });
        const savedUSer = await newUser.save();
        res.status(201).json(savedUSer);
        
    } 
    catch (error) {
        res.status(500).json({error: err.message});
        
    }
};

//to fetch users

const fetchUsers = async(req, res ) => {
  try {
    const users = await User.find();
    res.status(200).json({users});
    
  } catch (error) {
    res.status(401).json({ error: err.message});
  }
};

// fetch user by id
const fetchUserById = async (req, res) =>{
    try {
        //find user id in the url
      const userId = req.params.id;
      // find the user in the data base
      const user = await User.findById(userId);
      res.status(200).json({user});
    } catch (error) {
        res.status(401).json({error: error.message});
        
    }
};

// delete user by  id 
const deleteUser = async(req, res) => {
    try {
        //get id from the url
        const userId = req.params.id;
      //find the notes and delete it
      const user = await User.deleteOne({_id : userId});
       
    res.status(200).json({success: "deleted successfully"});

    } catch (error) {
        res.status(401).json({error: err.message});
        
    }
};

// update the user by id

const updateUser = async(req, res) => {
    try {
        //find id in the url 
        const userId = req.params.id;
        //get the data using req.body 
        const {
            username,
            email,
            city,
            occupation,
            address,
            phonenumber,
        } = req.body;
     await User.findByIdAndUpdate(userId, {
    username,
    email,
    city,
    occupation,
    address,
    phonenumber,
 });
 const user = await User.findById(userId);
 res.json({user });


    } catch (error) {
        res.json({ error: err.message});
        
    }
}

module.exports = {
    fetchData,
    fetchUsers,
    fetchUserById,
    deleteUser,
    updateUser,

}


