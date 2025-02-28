function Factory(){
    this.createDog = function (bread) {
        let dog;
        
        if (bread === "Labrador") {
            dog = new Labrador();
        } else if (breed === "Bulldog") {
            dog = new Bulldog();
        } else if (breed === "Golden Retriever") {
            dog = new GoldenRetriever();
        } else if (breed === "german shepherd") {
            dog = new GermanSherpherd();
        }
        dog.breed = breed;
        dog.printInfo = function (){
            console.log("nnbreed: " + dog.breed + "nShedding level (out of 5" + dog.sheddingLevel + "nCoat Type" + dog.coatType)
        }
        return dog;
    }
}

function Labrador() {
    this.sheddingLevel = 4 
    this.coatLenght = "short"
    this.coatType = "double"
}
function Bulldog() {
    this.sheddingLevel = 3 
    this.coatLenght = "short"
    this.coatType = "smooth"
}
function GoldenRetriever() {
    this.sheddingLevel = 4 
    this.coatLenght = "medium"
    this.coatType = "double"
}
function GermanShepherd() {
    this.sheddingLevel = 4 
    this.coatLenght = "medium"
    this.coatType = "double"
}

function run() {
    let dogs = [];
    let factory = new Factory();

    dogs.push(factory.createDog("labrador"));
    dogs.push(factory.createDog("golden retriever"));
    dogs.push(factory.createDog("bulldog"));
    dogs.push(factory.createDog("german shepherd"));

    for (var i = 0, len = dogs.length; i < len; i++) {
        dogs[i].printInfo();
    }
}

run()


