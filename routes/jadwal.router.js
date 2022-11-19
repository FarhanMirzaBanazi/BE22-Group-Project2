const express = require("express");
const router = express.Router();

const {
    createJadwal,
    getJadwalById,
    updateJadwalById,
    deleteJadwalById,
    getAllJadwal,
} = require('../controllers/jadwal.controller')

router.post('/', createJadwal);
router.get('/id', getJadwalById);
router.post('/updateById', updateJadwalById);
router.delete('/deleteById', deleteJadwalById);
router.get('/allJadwal', getAllJadwal);

module.exports = router