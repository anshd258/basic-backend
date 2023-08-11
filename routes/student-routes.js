const express = require("express");
const userContr = require('../controller/studentController')
const router = express.Router();

router.route("/conn")
      .post(userContr.adding)
      .get(userContr.geting);

module.exports = router;

