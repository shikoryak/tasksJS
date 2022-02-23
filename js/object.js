const anna = { name: "Anna", age: 18, luckyNumbers: [2, 4, 8, 16] };
const dave = { name: "Dave", age: 15, luckyNumbers: [3, 9, 40] };
const kate = { name: "Kate", age: 19, luckyNumbers: [1, 2, 3] };

const friends = [anna, dave, kate];
console.log(friends[1]);
console.log(friends[2].name);
console.log(friends[0].luckyNumbers[1]);

// #2 
const scores = {
    Chris: 0,
    Kety: 0,
    Pasha: 0,
    Nata: 0
};
scores.Chris = 5;
scores.Nata = 7;
scores.Kety = 5;
scores.Pasha = 9;
console.log(scores);

