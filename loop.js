function add(a, b){
    return a + b;
}

const numbersA = [1, 2, 3, 4, 5];
const numbersB = [10, 20, 30, 40, 50];

for (let i = 0; i < numbersA.length; i++){
    const result = add(numbersA[i], numbersB[i]);
    console.log(result);
}