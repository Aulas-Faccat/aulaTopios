let number = 8;

console.log(number);

var var1='João';
console.log(var1);

let var2='1500';
console.log(var2);

const var3=51000;
console.log(var3);

//var3=1000;
//console.log(var3);
{
	let var4=66698;
	console.log(var4);
}
{
	var var5=4533;
	console.log(var5);
}
console.log(var5);

let update=[];

for (let i=0;i<2;i++){
	update.push(function (){return i});
}

console.log('O Valor do array[0] é: '+update[0]());
console.log('O Valor do array[1] é: '+update[1]());



//Sem default
var dividir=function(x,y){
	return x/y;
}
console.log('O Resultado da divisão e '+dividir(2));

//Com default

var dividir=function(x,y=1){
	return x/y;
}
console.log('O Resultado da divisão e '+dividir(2));
console.log('O Resultado da divisão e '+dividir(2,2));

//es5
var soma=function(a,b){
	return a+b;
}
console.log('O Resultado da soma e '+soma(6,4));
//es6

var soma=(a,b) =>a+b;
console.log('O Resultado da soma e '+soma(7,4));


//arrow

let getPrice=()=>5.999;
console.log(getPrice());

//arrow sem comentario
//let getPrice=()=>5.999;
//console.log(getPrice());

let amostra = [1,2,3,4,5];

let var6 = amostra.map(item => item*2);
console.log(var6);


//times

const time={
	nome:'Barcelona',
	jogadores:['Messi','Neymar','Suarez'],
	listaJogadores:function(){
		this.jogadores.forEach(function(jogador){
			console.log('Jogador:'+jogador+' do '+this.nome);
		});
	}
}
time.listaJogadores();

//time com arrows

const time2={
	nome:'Barcelona',
	jogadores:['Messi','Neymar','Suarez'],
	listaJogadores:function(){
		this.jogadores.forEach(jogador=>{
			console.log('Jogador:'+jogador+' do '+this.nome);
		});
	}
}
console.log('---');
console.log('Exemplo com arrow function');
time2.listaJogadores();



var sum = function() {
	var result = 0;
	for (var i=0; i < arguments.length; i++) {
		result +=arguments[i];
	}
	return result;
}

console.log('Soma é: '+sum(6,2,10,11));


//es6

function sum(...numbers){
	let result=0;
	numbers.forEach((number) =>{
		result += number
	})
	return result
}


console.log('Rest - Soma é: '+sum(1,2,3,4,5));









var precos=[12,25,4];
var maiorPreco=Math.max(...precos);


console.log('O maior preco é: '+maiorPreco);

var valor='698870';
var maiorValor=Math.max(...valor);



console.log('O maior valor é: '+maiorValor);



var partes = ['ombros', 'joelhos'];
var letra = ['cabeca', ...partes, 'e', 'dedos'];


console.log('O conteudo da letra é: '+letra);






var produto={
	preco:5.98,
	quantidade:10,
	calculaTotal(){
		return this.preco*this.quantidade;
	}
}

console.log('O valor total é: '+produto.calculaTotal());

var campo='campoDinamico';
var produto={
	[campo]:58888,
	preco:5.98,
	quantidade:10,
	calculaTotal(){
		return this.preco*this.quantidade;
	}
}

console.log(produto);


let carros=['celta','corsa','ka'];

for(let carro of carros){
	console.log('Nome: '+carro);
}



let valorTotal=1569.00;
console.log('O valor total é ${valorTotal}');
		
//es5
var a1=5;
var b1=10;
console.log("ES5 - Quinze é "+(a1+b1)+" e não "+(2*a1+b1)+".");


//es6

var a2=5;
var b2=10;
console.log('ES6 - Quinze é ${a2 + b2} e não ${2*a2+b2}.');


let carros2=['fox','meriva','Zafira'];
let [carro1,carro2,carro3] = carros2;
console.log('carros:'+carro2);


[a,b,...rest]=[1,2,3,4,5,6];
console.log(a);	
console.log(b);
console.log(rest);

({a,b}={a:'O Valor a', b:'Valor B'});
console.log(a);
console.log(b);

/*var helloModulo = require('./helloModulo');

hellomodulo.helloExemplo1();
hellomodulo.helloExemplo2();
*/

/*
import {soma,pi} from './mod-4';
import mult from './mod-4';
console.log('Soma é '+soma(3,2)+'- PI:'+pi+'- mult.: '+mult(3,2));
*/


class Tarefa{
	constructor(){
		console.log('Construtor de tarefa...');
	}
	mostraId(){
		console.log('https://pt.wikipedia.org/wiki/Id_Software');
	}
}
let tarefa = new Tarefa();
tarefa.mostraId();


function func() {
	console.log(':P')
}

