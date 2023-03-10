// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

cats;

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)

}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    var newCat = [...cats];
    newCat.push(name);
    return newCat
}

function prependCat(name) {
    var newCat = [...cats];
    newCat.unshift(name);
    return newCat
}

function removeLastCat() {
    var newCat = [...cats];
    newCat.pop();
    return newCat
}

function removeFirstCat() {
    var newCat = [...cats];
    newCat.shift();
    return newCat
}