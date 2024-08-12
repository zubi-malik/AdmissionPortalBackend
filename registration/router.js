const express = require("express")
const { register, allUsers, allUsersLength } = require("./controller")
const router = express.Router()

router.post("/register", register)
router.get("/all-users", allUsers)
router.get("/all-users-length", allUsersLength);

module.exports = router