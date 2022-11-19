const express = require("express");
const router = express.Router();

const {
  createSpesialisasi,
  getAllSpesialisasi,
  getSpesialisasiByID,
} = require("../controllers/spesialis.controller");

router.post("/", createSpesialisasi);
router.get("/", getAllSpesialisasi);
router.get("/byid", getSpesialisasiByID);

module.exports = router;
