let a = 2;

let b = 20;

if (b % 1 != 0 || a % 1 != 0) {
    console.log("operação não realizavel");
    } else if (a > 0) for (let i = 1; i <= b; i++){

        console.log(a, " x ", i, " = ", (i * a));
    }
