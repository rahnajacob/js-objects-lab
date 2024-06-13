const montage = {
    gameFace: "😀",
    readyForThis: true,
    victorySound: "toot",
}
console.log(montage);

// Question 2

const homeTown = {
    name: "What Are You, A Cop?",
    population: 4,
    country: {
        name: "Italy",
        population: 15,
    },
}
console.log(homeTown.name, homeTown.population);
console.log(homeTown.country.name, homeTown.country.population);

// Question 3

const characters = [
    {name: "Gimli", movie: "Lord of The Rings"},
    {name: "The Biologist", movie: "Annihilation"},
    {name: "SecUnit", movie: "The Murderbot Diaries"}]
console.log(characters[0].name)
for (let i = 0; i < characters.length; i++) {
    console.log(`I am ${characters[i].name} from ${characters[i].movie}.`);
}

// Question 4

const monkey = {
    name: "Funky",
    species: "South Asiatic",
    foodsEaten: ["peanuts", "bananas", "stolen ice-cream"],
    eatSomething(food) {
        this.foodsEaten.push(food);
    },
}
monkey.eatSomething("child");
console.log(monkey.foodsEaten)
console.log(`My name is ${monkey.name} and I am a ${monkey.species} monkey who eats ${monkey.foodsEaten[monkey.foodsEaten.length - 1]}.`)

//Question 5

const laboratory = {
    monster: {},
   experiment(partName, partValue) {
    this.monster[partName] = partValue,
}}
laboratory.experiment('tentacles', 'very slimy parts')