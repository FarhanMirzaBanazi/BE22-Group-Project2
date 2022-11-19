const jadwalSchema = require("../schema/jadwal");

module.exports = {

    // create jadwal 
    createJadwal: async (req, res) => {
        const { date, time, id_dokter } = req.body;

        try {
            const data = await jadwalSchema.create({
                hari_tanggal: date,
                waktu: time,
                id: id_dokter,
            });

            if (data) {
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'you have created a jadwal (Schedule) data'
                })
            } else {
                res.status(400).json({
                    message: 'Data failed to add'
                })
            }
        } catch (error) {
            res.send(error)
        }
    },

    // get jadwal
    getJadwalById: async (req, res) => {

        try {
            const data = await jadwalSchema.findById(req.query.id);
            // console.log(req.query.id);

            if (data) {
                res.status(200).json({
                    success: true,
                    data: data,
                    message: "Success get data dokter"
                })
            } else {
                res.status(400).json({
                    message: "Failed get data dokter"
                })
            }
        } catch (error) {
            res.send(error)
        }
    },

    // update jadwal
    updateJadwalById: async (req, res) => {
        const { date, time } = req.body;

        try {
            const data = await jadwalSchema.findById(req.query.id);

            if (data) {
                data.hari_tanggal = date
                data.waktu = time
                const update = await data.save();

                res.status(200).json({
                    data: update,
                    message: 'Update data jadwal is success'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Data failed to update'
                })

            }
        } catch (error) {
            res.send(error)
        }
    },

    // delete jadwal
    deleteJadwalById: async (req, res) => {
        const { date, time } = req.body;

        try {
            const data = await jadwalSchema.findById(req.query.id);

            if (data) {
                await data.remove(); // delete or remove ??
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'Data Jadwal delete'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Data not found'
                })

            }
        } catch (error) {
            res.send(error);
        }
    },

    // tambahan untuk melihat semua jadwal
    getAllJadwal: async (req, res) => {
        try {
            const data = await jadwalSchema.find().populate('id').exec((err, data) => {

            if (data) {
                res.status(200).json({
                    data: data,
                    message: 'Get all jadwal success'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Jadwal tidak ditemukan'
                })
            }
        })
        } catch (error) {
            res.send(error)
        }
    }
}