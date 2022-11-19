const express = require('express');
const router = express.Router()

const userRouter = require('./user.router');
const dokterRouter = require('./dokter.router');
const jadwalRouter = require('./jadwal.router');
const spesialisasiRouter = require('./spesialis.router');
const bookingRouter = require('./booking.router');

router.use("/user", userRouter);
router.use("/dokter", dokterRouter);
router.use("/jadwal", jadwalRouter);
router.use("/spesialisasi", spesialisasiRouter);
router.use("/booking", bookingRouter);

module.exports = router