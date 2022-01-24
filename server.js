var express = require("express")
var app = express()

var port = process.env.PORT || 8080

app.use(express.static(__dirname))

app.get("/", function(req, res){
    res.render("index")
})

app.listen(port, function() {
    console.log("website is up!")
})

//https://visionarygame.herokuapp.com
//https://git.heroku.com/visionarygame.git

//git push https://git.heroku.com/visionarygame.git