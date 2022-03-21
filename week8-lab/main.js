function Elecmon(name, age) {
    this.species = "Elecmon";
    this.name = name;
    this.age = age;
    this.image_alt = "Elecmon, a small mammal digimon with long ears";
    this.image = "animals/Elecmon(violet).jpg";
}

function Piyomon(name, age) {
    this.species = "Piyomon";
    this.name = name;
    this.age = age;
    this.image_alt = "Piyomon, a pink chick digimon with blue feathers and a silver foot ring";
    this.image = "animals/Piyomon.jpg";
}

function Gryzmon(name, age) {
    this.species = "Gryzmon";
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
    // There are 5 saved animals
    for (let i = 0; i <= 4; i++) {
        var savedAnimal = JSON.parse(localStorage.getItem("savedAnimal-"+i));
        var animal;
    
        if (savedAnimal) {
            animal = savedAnimal;
            console.log(savedAnimal);
            document.getElementsByClassName("save-button")[i].textContent = "Clear me";
        } else {
            animal = generateRandomAnimal();
            document.getElementsByClassName("save-button")[i].textContent = "Save me";
        }

        let img = document.getElementsByClassName("random-animal-img")[i];
        img.setAttribute("src", animal.image);
        img.setAttribute("name", animal.name);
        img.setAttribute("alt", animal.image_alt);
        let name = document.getElementsByClassName("random-animal-name")[i];
        name.textContent = "This is "+animal.name;
        let species = document.getElementsByClassName("random-animal-species")[i];
        species.textContent = "Species: "+animal.species;
        let age = document.getElementsByClassName("random-animal-age")[i];
        age.textContent = "Age: "+animal.age;

        document.getElementsByClassName("save-button")[i].addEventListener("click", function() {
            if (!savedAnimal) {
                localStorage.setItem("savedAnimal-"+i, JSON.stringify(animal));
    
                document.getElementsByClassName("save-button")[i].textContent = "Clear me";
                document.getElementsByClassName("feedback-msg")[i].textContent = "Saved!";
            } else {
                localStorage.removeItem("savedAnimal-"+i);
    
                document.getElementsByClassName("save-button")[i].textContent = "Save me";
                document.getElementsByClassName("feedback-msg")[i].textContent = "Cleared!";
            }
        })
    }
}