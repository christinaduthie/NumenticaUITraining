// Find the user who shares most interest with other users.

function findUserWithmostSharedIntrests(commonBookInterests) {
    const finalOutputArray = {};
    let maximumIntrestCount = 0;
    for (const book in commonBookInterests) {
      const users = commonBookInterests[book];
      //console.log(users)
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (!(user in finalOutputArray)) {
          finalOutputArray[user] = [];
        }
      }
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        let currentMaximumIntrestCount = 1;
        for (let j = 0; j < users.length; j++) {
          const adjacentUser = users[j];
          //console.log(user,adjacentUser);
          if (user !== adjacentUser && !finalOutputArray[user].includes(adjacentUser)) {
            //console.log(user,adjacentUser);
            finalOutputArray[user].push(adjacentUser);
            currentMaximumIntrestCount += 1;
          }
        }
        if (currentMaximumIntrestCount > maximumIntrestCount) {
          maximumIntrestCount = currentMaximumIntrestCount;
          
        }
      }
    }
    console.log(maximumIntrestCount);
    return finalOutputArray;
  }
  
const commonBookInterests = {
  "Wings of Fire": ["Arun", "Balu", "Anya"],
  Chakra: ["Arun", "Ashok", "Anya"],
  "War and Peace": ["Ashok", "Cathi"],
  "The Shining": ["Ashok", "Cathi"],
  "All about Cricket": ["Balu"],
  "Against the wind": ["Cathi"],
};
const output = findUserWithmostSharedIntrests(commonBookInterests);
console.log(output);


