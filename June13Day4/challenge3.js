// Given an array, filter out the invalid items 

//get user input
const userInput = ["a", "d", 1, true, "cd", 33];
const datatype = "number";

//function to filter out the numbers from the array. Return type is boolean
function filterNumber(element) {
  return isNaN(element);
}
//function to filter out the numbers from the boolean
function filterBoolean(element) {
  if (element == true || element == false) {
    return false;
  } else {
    return true;
  }
}
//function to filter out the numbers from the strings
function filterString(element) {
  if (typeof element == "string") {
    return false;
  } else {
    return true;
  }
}

//function call based on datatype given
if (datatype == "number") {
    let filteredArraywithoutNumber = userInput.filter(filterNumber);
    console.log(filteredArraywithoutNumber);
} 
else if (datatype == "boolean") {
    let filteredArraywithoutBoolean = userInput.filter(filterBoolean);
    console.log(filteredArraywithoutBoolean);
    console.log();
} 
else if (datatype == "string") {
    let filteredArrayWithoutString = userInput.filter(filterString);
    console.log(filteredArrayWithoutString);
} 
else {
    console.log("Invalid Input");
}
