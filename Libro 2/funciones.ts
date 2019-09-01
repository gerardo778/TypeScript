
//Filtrar tipo de datos en una funcion
function	padLeft(value:	string,	padding:	string	|	number)	{
    if(typeof	padding	===	"number"){
                    return	Array(padding	+	1).join("	")	+	value;
    }
    if(typeof	padding	===	"string")	{
                    return	Array(padding.length	+	1).join("	")	+	value;
    }
    
    throw	new	Error(`Se espera un string o un numero	'${padding}'	`);
}
console.log(padLeft("hola",	"aaaa"));	
console.log(padLeft("hola",	5));	

//Igualacion de funciones
let	x	=	(a:	number)	=>	0;
let	y	=	(b:	number,	s:	string)	=>	0;
y	=	x;

let	a	=	()	=>	({name:	'Alice'});
let	b	=	()	=>	({name:	'Alice',	location:	'Seattle'});
a	=	b;