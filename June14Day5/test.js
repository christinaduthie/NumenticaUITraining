//Get range from user
const userInput = "123456";

for (i = userInput.length; i >= 0; i--) {
  if (userInput[i]==='0'){
    let userInput1=userInput.slice(-1)
    console.log(userInput1)
  }
  else{
    console.log("not zero")
  }
  
} 
