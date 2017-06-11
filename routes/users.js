require("dotenv").config(); // or load()
var express = require('express');
var router = express.Router();

const query = require("../db/query");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Get all items [group, item_status, item_sell]
router.get('/:id/dates', (req, res, next) => {
  console.log("test");
  let data = [];
  if(!isNaN(req.params.id)){
    query.getDates(req.params.id)
      .then(user => {
        res.json(user);
      });
  } else {
    resError(res, 500, "Item Not Found")
  }
});

module.exports = router;
