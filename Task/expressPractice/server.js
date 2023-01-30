const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv/config");
const postController = require("./controller/postController");
const bodyParser = require("body-parser");

// Port Connection established
app.listen(process.env.PORT, () => {
	console.log("Port is connected ");
});

// Use Cors Middlewar
app.use(cors());

// Databse created and connected
mongoose.set("strictQuery", false);
mongoose
	.connect("mongodb://127.0.0.1:27017/blog", { useNewUrlParser: true })
	.then(() => {
		console.log("Database Connection established");
	});

mongoose.connection.once("open", () => {
	console.log("Connection done");
});
app.use(bodyParser.json());
app.use("/posts", postController);
