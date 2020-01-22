let express = require("express");
let app=express();
let bodyParser =require('body-parser');

//vue
app.set('view engine','ejs');

//midleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes
app.get('/',function (req,res) {
    res.render('index');
});

//fonction pour convertir les nombres
function convertir(nombre,base) {
    const converti=parseInt(nombre,base);
    if(isNaN(converti)){return 0;}
    return converti;
}

app.post('/',function(req,res){
    if(req.body.btn==="decimal"){
        let result=convertir(req.body.nombre,10).toString(16).toUpperCase();
  
    }else if(req.body.btn==="hexadecimal"){
        let result=convertir(req.body.nombre,16);
    }
    res.render('index',{result});
});

app.listen(8080);