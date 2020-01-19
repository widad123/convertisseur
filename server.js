let express = require("express");
let app=express();
let bodyParser =require('body-parser');

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/',function (req,res) {
    res.render('index');
});

app.post('/',function(req,res){
    console.log(req.body);
});

app.listen(8080);