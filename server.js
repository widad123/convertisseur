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


function convertir(nombre,base) {
    const converti=parseInt(nombre,base);
    if(isNaN(converti)){return 0;}
    return converti;
}

function convertirHexa(nombre){
    let result=convertir(nombre,10).toString(16).toUpperCase();
    return result;
}

function convertirDecimal(nombre){
    let result=convertir(nombre,16);
    return result;
}

app.post('/',function(req,res){
    if(req.body.btn==="decimal"){
        let result=convertirHexa(req.body.nombre);
        res.render('index',{result});

    }else if(req.body.btn==="hexadecimal"){
        let result=convertirDecimal(req.body.nombre);
        res.render('index',{result});
    }
});

app.listen(8080);
