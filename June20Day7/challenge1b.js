// Find the user who shares most interest with other users.

const bookInterests = {
    'Wings of Fire': ['Arun', 'Balu'],
    'Chakra': ['Arun', 'Ashok'],
    'War and Peace': ['Ashok', 'Cathi'],
    'The Shining': ['Ashok', 'Cathi'],
    'All about Cricket': ['Balu'],
    'Against the wind': ['Cathi']
};

const sharedInterests = {};
for (const book in bookInterests) {
    const users = bookInterests[book];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (!(user in sharedInterests)) {
            sharedInterests[user] = [];
        }
    }
    //console.log(sharedInterests);
}

for (const book in bookInterests) {
   // console.log(book)
    const users = bookInterests[book];
   //console.log(users)
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        for (let j = 0; j < users.length; j++) {
            const otherUser = users[j];
            console.log(user,otherUser);
            if (user !== otherUser && !sharedInterests[user].includes(otherUser)) {
                //console.log(user,otherUser);
                sharedInterests[user].push(otherUser);
            }
        }
    }
}
console.log(sharedInterests)
