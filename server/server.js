const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const {fetchData, fetchUsers, fetchUserById, deleteUser, updateUser   }= require('./controllers/userControler');


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

// API route 

app.post("/details", fetchData);
app.get("/userdetails",fetchUsers)
app.get("/userdetails/:id", fetchUserById);
app.put("/userdetailsup/:id", updateUser);
app.delete("/userdetails/:id", deleteUser);



//Mongo db connection
const PORT = process.env.PORT || 6000;
 
mongoose.connect(process.env.MONGO_URL, {
    retryWrites:true,
    w:'majority'
})
.then(() => {
    app.listen(PORT, () =>{
        console.log(`server port connected on ${PORT}`);
    })
})
.catch((error) => { console.log(`${error} did not connect`)});

