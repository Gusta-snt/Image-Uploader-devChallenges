var admin = require("firebase-admin");

var serviceAccount = require("./firebaseConfig.json");

const dotenv = require("dotenv").config()
const BUCKET_URL = process.env.BUCKET_URL

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET_URL
});

const bucket = admin.storage().bucket()

module.exports = function uploadImage(req,res,next) {
  if(!req.file){
    return next()
  }
  
  const img = req.file
  const fileName = `${Date.now()}.${img.originalname.split(".").pop()}`

  const file = bucket.file(fileName)

  const stream = file.createWriteStream({
    metadata: {
      contentType: img.mimetype,
    }
  })

  stream.on("error", (error) => {
    console.error(error)
  })

  stream.on("finish", async () => {
    await file.makePublic()

    req.file.url = `https://storage.googleapis.com/${BUCKET_URL}/${fileName}`

    next()
  })

  stream.end(img.buffer)
}