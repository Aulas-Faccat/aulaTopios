var express=require("express");
var bodyParser = require('body-parser')
var app=express();
const { engine }   = require('express-handlebars');

// define a extensão e a instância do handlebars com o modelo que será interpretado o código
app.engine('hbs', engine({extname: '.hbs',defaultLayout: null}));
// define qual o template a ser utilizado
app.set('view engine', 'hbs');
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req,res){
    res.render('tarefa')
    
});
app.post("/salvar", function(req,res){

    res.render('tarefa',{nomeD:req.body.nomeE,
                        dataD:req.body.dataE,
                        emailD:req.body.emailE,
                        senhaD:"*************",
                        sexoD:req.body.sexoE,
                        telefoneD:req.body.telefoneE,
                        celularD:req.body.celularE,
                        fumanteD:req.body.fumanteE,
                        municipioD:req.body.municipioE
                        })
    
});
/*
app.get("/teste", function(req,res){
    res.json({ user: 'teste' });
    
});

app.get("/sobre", function(req,res){
    res.render('sobre')
    
});


app.get("/cadastro", function(req,res){
 
    res.render('form',{codigo_usuario:12345,nome_usuario:"joao"})
    
});



app.get("/teste2/:valor", function(req,res){
    const valor=req.params.valor;
    console.log(valor);

    res.render('form',{valor:parseInt(valor)+1})
    
});*/




app.listen(3000,function(){
    console.log("Servidor está rodando na porta 3000");
})