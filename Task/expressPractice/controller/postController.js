const express = require("express");
const router = express.Router();
const postModel = require("../model/postModel");
// const errror = require("../view/error");

// To get all Data
router.get("/", async (req, res) => {
	const post = await postModel.find();
	res.json(post);
});

// To get specific Data
router.get("/:id", async (req, res) => {
	const post = await postModel.findById(req.params.id);
	res.json(post);
});

// To post Data
router.post("/", async (req, res) => {
	try {
		const post = await postModel(req.body);
		post.save();
		res.send(post);
	} catch (error) {
		console.log(error);
	}
});

// To get specific Data
router.delete("/:id", async (req, res) => {
	const post = await postModel.findById(req.params.id);
	post.remove();
	res.send(post);
});

// To get specific Data
router.put("/:id", async (req, res) => {
	const post = await postModel.findByIdAndUpdate(req.params.id, {
		$set: req.body,
	});
	res.send(post);
});

module.exports = router;
