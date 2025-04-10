let userData = [
    {
        name: "David",
        email: "email@gmail.com",
        age: 20,
        genre: "M"
    },
    {
        name: "Alessandro",
        email: "email@gmail.com",
        age: 21,
        genre: "M"
    },
    {
        name: "Mariangel",
        email: "email@gmail.com",
        age: 20,
        genre: "F"
    },
    {
        name: "Luis",
        email: "email@gmail.com",
        age: 22,
        genre: "M"
    },
    {
        name: "Daniel",
        email: "email@gmail.com",
        age: 20,
        genre: "M"
    }
]

let result = userData
.filter((obj) => obj.age <= 20 )    
.reduce((obj, user, index, arr) => {
        if (!obj[user.genre]) obj[user.genre] = 1;
        else obj[user.genre]++;
        return obj;
}, {});

console.log(result);

console.log();
