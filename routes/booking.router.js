const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken/verifyToken");

const {
  createBooking,
  getAllBooking,
  getBookingByID,
  updateBooking,
  deleteBooking
} = require("../controllers/booking.controller");

router.post("/",createBooking, verifyToken);
router.get("/", getAllBooking);
router.get("/byid", getBookingByID);
router.post("/byid", updateBooking);
router.delete("/byid", deleteBooking);

module.exports = router;
