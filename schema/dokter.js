const mongoose = require("mongoose");

const dokterSchema = new mongoose.Schema({
    name_dokter: String,
    no_telp: String,
    email: String,
    detail_info: String,
    pengalaman: String,
    id_spesialis: String,
})

module.exports = mongoose.model("dokter", dokterSchema)