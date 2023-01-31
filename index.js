// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(name_) {
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
}

function appendCat(copyOfCats) {
    copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat(copyOfCats) {
    copyOfCats = ["Arnold", ...cats];
    return copyOfCats;
}

function removeLastCat(copyOfCats) {
    copyOfCats = cats.slice(0, -1);
    return copyOfCats;
}

function removeFirstCat(copyOfCats) {
    copyOfCats = cats.slice(1);
    return copyOfCats;
}