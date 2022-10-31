const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Kid = new Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    height: { type: String, required: true },
    capacity: { type: String, required: true },
    parkLocation: { type: String, required: true },
    flashPass: { type: String, required: true },
    year: { type: String, required: true },
    history: { type: String, required: true },
    rating: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Kid', Kid)
