const express = require("express");

//Created The router!!
const router = express.Router();
//Loaded The Controller!!!!!!!
const feedbackController = require("../Controller/feedbackController");

router.get("/", feedbackController.listfeedback);
router.post("/", feedbackController.createfeedback);
router.delete("/:id",feedbackController.deletefeedback)

module.exports=router