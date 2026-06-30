let NumberArray = [4,8,2,11,6,7,10];
// 1. Find the Maximum Number
function MaximumNo(NumberArray) {
    let max = NumberArray[0];
    for (let i =0 ; i < NumberArray.length;i++){
        if (max < NumberArray[i]){
            max = NumberArray[i]
        }
    }
    return max;
}

console.log(`The maximum number is ${MaximumNo(NumberArray)}`);

// 2. Calculate the Sum of All Elements
const sum = () => {
    let Sum = 0;

    for (let i = 0; i < NumberArray.length; i++) {
        Sum += NumberArray[i];
    }

    return Sum;
};

console.log(`The sum is ${sum(NumberArray)}`);

// 3. Count the Number of Odd Numbers
const CountOdd = () =>{
    let oddCount = 0;
    for (let i = 0; i < NumberArray.length; i++) {
        if (NumberArray[i] % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount;
}

console.log("the count is ", CountOdd(NumberArray));
