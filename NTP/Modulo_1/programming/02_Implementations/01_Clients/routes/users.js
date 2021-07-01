var express = require('express');
var router = express.Router();

const { findUsers } = require("../services/Clients.service")

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await findUsers()
    res.status(200).json({
      msg: "path users",
      body: users,
    });
    
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

module.exports = router;
