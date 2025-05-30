const users = [
    {
        name: "John",
        balance: 6972,
        occupation: "gardener",
        friendName: "Briana Decker",
    },
    {
        name: "Peter",
        balance: 6972,
        occupation: "teacher",
        friendName: "Eddie Strong",
    },
    {
        name: "Alice",
        balance: 6972,
        occupation: "engineer",
        friendName: "Sheree Anthony",
    },
];
const calculateTotalBalance = users => {
    let total = 0;
    users.forEach(user => {
        total += user.balance;
    });
    return total;
};

console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
    return users.filter((user) => user.friendName === friendName);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Eddie Strong")); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = users => {
  return users
        .sort((a, b) => a.friendName.length - b.friendName.length)
        .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getSortedUniqueSkills = users => {
   return users
        .reduce((skills, user) => {
            skills.push(user.occupation);
            return skills;
        }, [])
        .filter((skill, index, array) => array.indexOf(skill) === index)
        .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]