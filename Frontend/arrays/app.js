const fruits = new Array("Apple", "Banana", "Orange", "Peer");
console.log(`Fruits: ${fruits}`);

const vegetables = [
    "Carrot", "Parsley", "Celery", "Beet"
];
console.log(`Fruits: ${vegetables}`);

const fruitsAndVegetables = [...fruits, ...vegetables];
console.log(`Fruits and vegetables 1: ${fruitsAndVegetables}`);

const fruitsAndVegetables2 = fruits.concat(vegetables);
console.log(`Fruits and vegetables 2: ${fruitsAndVegetables2}`);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(`Arr: ${nums}`);
console.log(`Sum of nums arr: ${sum}`);

const doubleNums = nums.map((num) => num * 2);
console.log(`Nums*2:  ${doubleNums}`)

const even = nums.filter((num) => num % 2 == 0);
console.log(`Even nums: ${even}`);

const firstEven = nums.find((num) => num % 2 == 0);
console.log(`First even num: ${firstEven}`);

doubleNums.forEach((num) => {
    console.log(num);
});

const secondNumsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
secondNumsArr.push(11);
console.log(`Push num (11): ${secondNumsArr}`);

secondNumsArr.unshift(0);
console.log(`Unshift num (0): ${secondNumsArr}`);

secondNumsArr.pop(11);
console.log(`Pop num (11): ${secondNumsArr}`);

secondNumsArr.shift(0);
console.log(`Shift num (0): ${secondNumsArr}`);

fruits.forEach((fruit) => {
    console.log(`Fruit to upper case: ${fruit.toUpperCase()}`);
});

const liczby = new Array(5).fill(0);
console.log(liczby);

const zagniezdzone = [1, [2, [3, [4]]]];
const splaszczenie = zagniezdzone.flat(2);

console.log(splaszczenie);

const slowa = ["Cześć", "Świecie"];
const zdanie = slowa.join(' ');

console.log(zdanie); 

const liczby1 = [1, 2, 3, 4, 5];
liczby1.reverse();

console.log(liczby1);

const liczby2 = [5, 2, 9, 1, 5, 6];
liczby2.sort((a, b) => a - b); // rosnąco
console.log(liczby2);

const liczby3 = [1, 2, 3, 4, 5];
const indeksPierwszejParzystej = liczby3.findIndex(num => num % 2 === 0);

console.log(indeksPierwszejParzystej);

const liczby4 = [1, 2, 3, 2, 1];
console.log(liczby4.indexOf(2));      // 1
console.log(liczby4.lastIndexOf(2));

const owoce = ["jabłko", "banan", "pomarańcza"];
const czyJestBanan = owoce.includes("banan");

console.log(czyJestBanan);

const liczby5 = [2, 4, 6, 8];
const czyWszystkieParzyste = liczby5.every(num => num % 2 === 0);

console.log(czyWszystkieParzyste);

const liczby6 = [1, 2, 3, 4, 5];
const czyJestParzysta = liczby6.some(num => num % 2 === 0);

console.log(czyJestParzysta);

const liczby7 = [1, 2, 3, 4, 5];
const usuniete = liczby7.splice(1, 2, 9, 8);

console.log(liczby7);    // [1, 9, 8, 4, 5]
console.log(usuniete);  // [2, 3]

const liczby8 = [1, 2, 3, 4, 5];
const fragment = liczby8.slice(1, 4);

console.log(fragment); // [2, 3, 4]
console.log(liczby);   // [1, 2, 3, 4, 5]