const express = require("express");
const app = express();
const cors = require("cors");
const mongooose =require("mongoose");
const studRouter = require("./routes/student-routes")

require("dotenv").config();
app.use(cors());

const mongourl = process.env.MONGO_URL;
mongooose.connect(mongourl).then(()=> {console.log("database connected")});

const port = process.env.PORT || 3030;
app.use(express.json({limit:"20mb"}));

app.get('/', (req, res) => {
    res.send("hello world!")
  })
  

app.use("/student",studRouter)

app.listen(port,() => {console.log("server started")});