const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  register,
  login,
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
