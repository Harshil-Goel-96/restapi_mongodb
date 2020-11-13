import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";

const app = express();
const PORT = 5000;
const dbUrl = "mongodb://localhost/test";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HomePage");
});

//Establish mongoDB connection using mongoose
mongoose.connect(dbUrl, { useNewUrlParser: true });
//connnection object
const con = mongoose.connection;
//on connection, event triggered
con.once("open", () => {
  console.log("DB connected.....");
});

con.on("error", (err) => {
  console.log(err);
});

//Routes for Users
app.use("/users", userRouter);

//Listen to Port
app.listen(PORT, () => {
  console.log(`Server running on Port : ${PORT}`);
});
