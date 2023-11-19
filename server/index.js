const express = require("express")
const mongoose = require("mongoose")
const cors=require("cors")
const UserModel=require('./models/Users')
const app=express()
app.use(cors())
app.use(express.json())
import {useParams} from 'react-router-dom'

mongoose.connect("mongodb+srv://Subha-admin:8HwDCsK4EktIdnIa@cluster0.xhhtsqg.mongodb.net/hmsDB");

app.get('/users',(req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/appointment', async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    UserModel.findByIdAndDelete(id)
      .then((result) => {
        if (result) {
          res.status(204).send(); // Respond with a 204 No Content status on successful deletion
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        res.status(500).json(error);
      });
  });
  
  
  

app.listen(3000,()=>{
    console.log("server is running");
})