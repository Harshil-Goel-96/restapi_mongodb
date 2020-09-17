import express from "express";

//import usersModel from models
import USERS from "../models/userModel.js";

//Define users Router to handle HTTP requests- GET, POST, PUT, DELETE, PATCH
const userRouter = express.Router();
//*************************************************************************************
userRouter.get("/", async (req, res) => {
  try {
    const users = await USERS.find();
    //console.log(typeof user);
    res.send(users);
  } catch (error) {
    console.log("Error = " + error);
  }
});
//*************************************************************************************
userRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await USERS.findById(id);
    res.send(user);
  } catch (error) {
    console.log("Error = " + error);
  }
});
//*************************************************************************************
userRouter.post("/", async (req, res) => {
  const { name, age } = req.body;

  const user = new USERS({
    name,
    age,
  });
  //Important to save user in Collection using save() after posting
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    console.log("Error = " + error);
  }
});
//*************************************************************************************
userRouter.patch("/:id", async (req, res) => {
  const { name, age } = req.body;
  const id = req.params.id;
  try {
    const user = await USERS.findById(id);
    if (name) {
      user.name = name;
    }
    if (age) {
      user.age = age;
    }
    //Important to save user in Collection using save() after patching
    const updatedUser = await user.save();
    res.send(updatedUser);
  } catch (error) {
    console.log("Error = " + error);
  }
});
//*************************************************************************************
userRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await USERS.findByIdAndDelete(id);
    const users = await USERS.find();
    res.send(users);
  } catch (error) {
    console.log("Error = " + error);
  }
});
//*************************************************************************************
export default userRouter;
