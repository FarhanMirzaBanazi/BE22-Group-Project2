const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    status: String,
    id_jadwal: String,
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
},
{   collection: "booking" }
);

module.exports = mongoose.model("booking", bookingSchema);