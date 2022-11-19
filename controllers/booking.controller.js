const mongoose = require("mongoose");
const bookingSchema = require("../schema/booking");

module.exports = {
    createBooking: async (req, res) => {
    
    const { status, id_jadwal, id_user} = req.body;

    try {
        const data = await bookingSchema.create({
            status: status,
            id_jadwal: id_jadwal,
            id: id_user
        });
        data.save()

        if (data) {
            res.status(200).json({
                data: data,
                message: 'Booking is created successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Booking is not found.'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Booking failed!!'
        })
    }  
  },

  getAllBooking: async (req, res) => {
    try {
        const data = await bookingSchema.find().populate('id').exec((err, data) => {

	  if(data){
            res.status(200).json({
                success: true,
                data: data,
                message: 'Booking is get successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Booking is not found.'
            })
        }
	  })

     } catch (error) {
         res.status(400).json({
             message: 'Get All Booking Failed!!'
         })
    }
  },

  getBookingByID: async (req, res) => {
    try {
        const data = await bookingSchema.findById(req.query.id);
        // console.log(req.query.id);
        if(data){
            res.status(200).json({
                success: true,
                data: data,
                message: 'Booking is get successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Booking is not found.'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Get Booking By Id Failed!!'
        })
    }
  },

  updateBooking: async (req, res) => {
    const { status, id_jadwal } = req.body;
    try {
        const data = await bookingSchema.findById(req.query.id);
        if(data){
            data.status = status
            data.id_jadwal = id_jadwal
            const updateBooking = await data.save();
            res.status(200).json({
                data: updateBooking,
                message: 'Booking is updated successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Booking is not found.'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Update Booking Failed!!'
        })
    }
  },
  
  deleteBooking: async (req, res) => {
    try {
        const data = await bookingSchema.findById(req.query.id);
        if(data){
            await data.remove();
            res.status(200).json({
                success: true,
                data: data,
                message: 'Booking is deleted successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Booking is not found.'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Delete Booking Failed!!'
        })
    }
  }
}