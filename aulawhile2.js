let a = 0;
let b = 100;
let par;
let resultado=0;


for (let i = a; i <= b; i++){
    if(i % 2 == 0 ){
        par = i;
        resultado = par + resultado;
    }

    a++;
}
console.log(resultado)