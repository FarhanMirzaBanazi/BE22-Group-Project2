const express = require("express");
const router = express.Router();

const {
    createDokter,
    getDokter,
    getAllDokter,
} = require('../controllers/dokter.controller')

router.post('/createDokter', createDokter);
router.get('/dokterById', getDokter);
router.get('/allDokter', getAllDokter);

module.exports = router