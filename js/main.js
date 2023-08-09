function oddFibonacciSum(n) {
    if (n <= 0) {
        return 0;
    }else if(n === 1){
        return 1;
    }else{
        let a = 1;
        let b = 1;
        let sum = 1;
        for (let i = 1; b <= n; i++){
            let temp = a + b;
            if(b % 2 != 0){
                sum += b;
            }
            a = b;
            b = temp;
        }
        return sum;
    }
}

console.log(oddFibonacciSum(8));
console.log(oddFibonacciSum(10));
console.log(oddFibonacciSum(-7));
console.log(oddFibonacciSum(0));
console.log(oddFibonacciSum(1));
console.log(oddFibonacciSum(2));
console.log(oddFibonacciSum(13));

/* 1 1 2 3 5 8 13 */