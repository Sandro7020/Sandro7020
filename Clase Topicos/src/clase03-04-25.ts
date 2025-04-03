function sum(x: number, y: number): number {
    return x + y;
}

(x: number, y: number): number => {
    return x + y;
}

class Person {
    private name: string;
    private age: number;
    private city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

let persona1 = new Person("Alessandro", 20, "Caracas");

let userData = [
    {
        name: "David",
        age: 20,
        genre: "M"
    },
    {
        name: "Alessandro",
        age: 20,
        genre: "M"
    },
    {
        name: "Mariangel",
        age: 20,
        genre: "F"
    },
    {
        name: "Luis",
        age: 22,
        genre: "M"
    },
    {
        name: "Daniel",
        age: 20,
        genre: "M"
    }
]

const result = userData
    .filter(
        (user) => user.genre === "F"
    )
    .map( 
        (user) => { return user.name }
    );

// const result = userData
//     .reduce(
//         (acum, current) => acum + current.age, 0
//     );

// console.log(result);
