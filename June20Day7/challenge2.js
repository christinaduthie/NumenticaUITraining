// Find number of pairs in an array which has the sum provided as a parameter

function noOfPairs(inputArray,sum){
    let count=0;
    for(i=0;i<inputArray.length;i++){
        for(j=i+1;j<inputArray.length;j++){
            let sumOfPairs=inputArray[i]+inputArray[j];
            if(sumOfPairs == sum) {
                count+=1
            }
        }
    }
    return count;
}
const inputArray = [4, 2, 88, 6, 8, 1,'h',0,-2,5];
const sum = 6;

const output = noOfPairs(inputArray,sum);
console.log(output);


