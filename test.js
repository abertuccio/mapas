var min = 200;
var max = 300;

function generaImpar(){
    var min = 200;
    var max = 301;
    var rango = ((max - min) / 2);
    var semrandom;
    semirandom = 2 * Math.floor(Math.random() * rango) +1 +min;
    if(semirandom<202){
        console.log(semirandom)
    }
}

for(let i=0; i<1000; i++){
    generaImpar();
}