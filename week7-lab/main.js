function Elecmon(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Elecmon, a small mammal digimon with long ears";
    this.image = "animals/Elecmon(violet).jpg";
}

function Piyomon(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Piyomon, a pink chick digimon with blue feathers and a silver foot ring";
    this.image = "animals/Piyomon.jpg";
}

function Gryzmon(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Gryzmon, a bear-like blue beast digimon with red claws and a crescent shape on its forehead";
    this.image = "animals/Gryzmon.jpg";
}

const animals = [new Elecmon("", 0), new Piyomon("", 0), new Gryzmon("", 0)];

const names = ["Ivy", "Daniel", "Lottie", "Cassandra", "Fischer", "Colby", "Kevin", "Robyn"];

function generateRandomIndex(maxIndex) {
    const index = Math.floor(Math.random() * maxIndex);
    return index;
}

function generateRandomName() {
    return names[generateRandomIndex(names.length)];
}

function generateRandomAge() {
    return generateRandomIndex(1000);
}

function generateRandomAnimal() {
    const randomAnimal = animals[generateRandomIndex(animals.length)];
    let newAnimal = null;
    if (randomAnimal instanceof Gryzmon) {
        newAnimal = new Gryzmon(generateRandomName(), generateRandomAge());
    } else if (randomAnimal instanceof Piyomon) {
        newAnimal = new Piyomon(generateRandomName(), generateRandomAge());
    } else if (randomAnimal instanceof Elecmon) {
        newAnimal = new Elecmon(generateRandomName(), generateRandomAge());
    }
    return newAnimal;
}

function onLoad() {
    var animal = generateRandomAnimal();
    
}