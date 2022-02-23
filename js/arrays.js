const randomAdjectives = ["Nice", "Excellent", "Surprised"];
const index = Math.floor(Math.random() * randomAdjectives.length);
const randomParth = "Your face looks " + randomAdjectives[index] + " ! ";


const randomPhrase = [];

const bodyPart = ["head", "arm", "leg", "body"];
const bodyPartIndex = Math.floor(Math.random() * bodyPart.length);
randomPhrase.push('Your ' + bodyPart[bodyPartIndex]);

const adjective = ["brave", "bored", "cruel", "icy", "large"];
const adjectiveIndex = Math.floor(Math.random() * adjective.length);
randomPhrase.push("is more " + adjective[adjectiveIndex]);

const animal = ["cat", "dog", "elephant", "tiger", "crocodile"];
const animalIndex = Math.floor(Math.random() * animal.length);
randomPhrase.push("than a " + animal[animalIndex]);


const animalBody = ["tail", "paw", "spine", "nostrils", "mustache"];
const animalBodyIndex = Math.floor(Math.random() * animalBody.length);
randomPhrase.push(animalBody[animalBodyIndex]);

const randomPartBody = "Your " + bodyPart[bodyPartIndex] + " is more " + adjective[adjectiveIndex] + " than a " + animal[animalIndex] + " " + animalBody[animalBodyIndex];

console.log(randomPhrase.join(' '));
console.log(randomParth);
console.log(randomPartBody);

const arrayNumbers = [3, 2, 1];
console.log(arrayNumbers.join(' is bigger than '));

