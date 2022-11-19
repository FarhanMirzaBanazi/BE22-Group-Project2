const mongoose = require("mongoose");
const spesialisasiSchema = require("../schema/spesialis");

module.exports = {
    createSpesialisasi: async (req, res) => {
    const { nama_spes } = req.body;

    try {
        const data = await spesialisasiSchema.create({
            nama_spes: nama_spes
        });
        data.save()

        if (data) {
            res.status(200).json({
                data: data,
                message: 'Spesialisasi is created successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Spesialisasi is not found.'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Spesialisasi failed!!'
        })
    }  
  },

  getAllSpesialisasi: async (req, res) => {
    try {
        const data = await spesialisasiSchema.find({ });
        if(data){
            res.status(200).json({
                success: true,
                data: data,
                message: 'Spesialisasi is get successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Spesialisasi is not found.'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Get All Spesialisasi Failed!!'
        })
    }
    
  },

  getSpesialisasiByID: async (req, res) => {
    try {
        const data = await spesialisasiSchema.findById(req.query.id);
        // console.log(req.query.id);
        if(data){
            res.status(200).json({
                success: true,
                data: data,
                message: 'Spesialisasi is get successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Spesialisasi is not found.'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Get Spesialisasi By Id Failed!!'
        })
    }

  },
  
}