let a = Math.floor(Math.random(1) * 101);

let b = Math.floor(Math.random(1) * 101);

let tentativa = 0

while (a != b) {
    b = Math.floor(Math.random(1) * 101);


    if (a < b) {
        console.log("o número é menor que", b)
    } else if (a > b) {
        console.log("O número é maior que", b);
    } else {
        console.log("você acertou, o número é", a)
    }
    tentativa++
}
console.log("você tentou", tentativa, "vezes");
