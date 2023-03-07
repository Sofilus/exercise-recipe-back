var express = require('express');
var router = express.Router();

const fs = require('fs');

router.get('/', function(req, res){
  fs.readFile("./recept.json", function (err, data) {
    if(err){
      console.log(err)
    }
    let recepies = JSON.parse(data)
    res.send(recepies)
    return;
  })
})


router.post('/', function(req, res) {
  fs.readFile("./recept.json", function (err, data) {
    if(err){
      console.log(err);
    }

    const recepies = JSON.parse(data)

    let recept = req.body

    recepies.push(recept);

    fs.writeFile("./recept.json", JSON.stringify(recepies), function(err){
      if(err){
        console.log(err)
      }
    })
    res.send("Worked")
    return;
  })
});

module.exports = router;
