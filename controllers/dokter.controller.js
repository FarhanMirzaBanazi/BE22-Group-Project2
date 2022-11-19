const dokterSchema = require("../schema/dokter");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jsonwebtoken = require("jsonwebtoken");

module.exports = {

    // create data dokter
    createDokter: async (req, res) => {
        const { nama_dokter, no_hp, email, informasi, exp, id_spesialis } = req.body;

        try {
            const data = await dokterSchema.create({
                name_dokter: nama_dokter,
                no_telp: no_hp,
                email: email, // nanti boleh di tanyakan apakah nama
                detail_info: informasi,
                pengalaman: exp,
                id_spesialis: id_spesialis,
            });

            if (data) {
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'You have created a doctors data'
                })
            } else {
                res.status(400).json({
                    message: 'Data failed to add '
                })
            }
        } catch (error) {
            res.send(error);
        }
    },

    // get dokter
    getDokter: async (req, res) => {
        try {
            const data = await dokterSchema.findById(req.query.id);
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

    // tambahan untuk melihat semua dokter
    getAllDokter: async (req, res) => {
        try {
            const data = await dokterSchema.find({ });
    
          if(data){
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'Dokter get All successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Dokter get All not found.'
                })
            }
    
         } catch (error) {
             res.status(400).json({
                 message: 'Get All Dokter Failed!!'
             })
        }
      },
}