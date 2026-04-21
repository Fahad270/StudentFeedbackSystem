require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Connect to our Mongo
mongoose.connect(process.env.MONGO_DB_URI).then(() => { console.log("Connection Established!!!") }).catch(err => {
    console.log(err);
});


app.get("/", (res, req) => {
    console.log("User Management System API is running !!!!Siuuu Again");

});

app.use("/api/feedback", require("./Routes/feedbackroutes"));

app.listen(process.env.PORT, () => {
    console.log("Server is running on PORT 3000"); 
});
