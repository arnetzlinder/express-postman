var express = require('express');
var router = express.Router();
const fs = require("fs");
let recepies;


fs.readFile("recepies.json", function(err, data){
    if (err) {
        console.log(err);
    }
    recepies = JSON.parse(data)
    return;
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/recepies', function (req, res, next) {
  res.send(recepies)
})

module.exports = router;
