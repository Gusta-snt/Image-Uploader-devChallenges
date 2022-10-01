const express = require("express")
const multer = require("multer")
const cors = require("cors")

const uploadImage = require("./services/firebase.js")

const Multer = multer({
	storage: multer.memoryStorage(),
})

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors({
	origin: "*"
}))

app.get("/", (req,res) => {
	res.json({message: "Use POST method to upload your image!"})
})

app.post("/", Multer.single("img"), uploadImage, (req,res) => {
	if(!req.file.url){
		return res.json({error: "You need to send an image file!"})
	}
	return res.json({url: req.file.url})
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}.`))