var express = require('express');
var router = express.Router();

let indexControllers = require("../controllers/indexControllers")

/* GET home page. */
router.get('/', indexControllers.index);

module.exports = router;
