//arreglos en JS
//const arreglo = new Array(100);

const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(1)
// arreglo.push(1)
// arreglo.push(1)

let arreglo2 = [...arreglo, 5];


const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});


console.log(arreglo);// 1,2,3,4
console.log(arreglo2);// 1,2,3,4,5
console.log(arreglo3);// 2,4,6,8,10