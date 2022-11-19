const mongoose = require("mongoose");

const spesialisasiSchema = new mongoose.Schema({
    nama_spes: String
},
{   collection: "spesialisasi" }
);

module.exports = mongoose.model("spesialisasi", spesialisasiSchema);