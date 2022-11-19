const mongoose = require("mongoose");

const jadwalSchema = new mongoose.Schema({
    hari_tanggal: String,
    waktu: String,
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'dokter'},
})

module.exports = mongoose.model("jadwal", jadwalSchema)