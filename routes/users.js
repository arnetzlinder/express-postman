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
  res.send(recepies);
});

router.get('/recepies', function (req, res, next) {
  res.send(recepies)
})

router.post('/add', function (req, res) {
  res.send({message: "Tack för ditt fantastiska tillägg"});
let newRecepieName = req.body.recepieName;
let newDescription = req.body.description;
let newIngredient = req.body.ingredients;
let newPreptime = req.body.prepTime;
let newRecepieId = recepies.length + 1;
let NewRecepie = NewRecepie(newRecepieName, newDescription, newIngredient, newPreptime, newRecepieId);
recepies.push(newRecepie);
console.log (recepies);
recepies.json(recepies);
})

module.exports = router;
