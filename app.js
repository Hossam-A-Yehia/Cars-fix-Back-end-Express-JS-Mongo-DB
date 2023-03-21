const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const path = require('path')
///Routes
const Booking = require("./routes/bookings")
const Complaint = require("./routes/complaints")
const Comment = require("./routes/comments")

app.use(cors())
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));
dotenv.config()
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))
// Mongoose
mongoose.connect(process.env.MONGO_URL)
  .then(console.log("Connected to Mongo"))
  .catch(console.error)
// Routes
app.use("/api/booking", Booking)
app.use("/api/complaint", Complaint)
app.use("/api/comment", Comment)

app.get("*", (req, res) => {
  res.send("Hello")
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log("Server Working"))