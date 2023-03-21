const mongoose = require("mongoose")


ComplaintSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  desc: { type: String, require: true },
}, { timestamps: true })

module.exports = mongoose.model("complaint", ComplaintSchema)
