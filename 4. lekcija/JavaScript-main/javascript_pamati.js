// 1. uzdevums
let myName = 'Karlis';
let age = '29';
let isStudent = true;
console.log(myName);
console.log(age);
console.log(isStudent);

// 2. uzdevums
let fruit = ['apples', 'cherries', 'bananas'];
console.log(fruit[1])

// 3. uzdevums
let person = {
    personName: 'Janis',
    personAge: 23,
    personIsStudent: true,
}
console.log(person.personName)

person.personHobby = 'music';
console.log(person);

// 4. uzdevums
function number() {
    let x = 5;
    console.log(x)
}
number();

// 5. uzdevums
let y = 10;
function newNumber() {
    console.log(y);
}
newNumber();

// 6. uzdevums
function newVariable() {
    newValue = 'burkāns';
    console.log(newValue)
}
newVariable()
console.log(newValue);

// 7. uzdevums
let secondVariable = 'ābols';
function newSecondVariable() {
    secondVariable = 'apelsīns'
}
console.log(secondVariable);
newSecondVariable()
console.log(secondVariable);

// // STARP UZDEVUMS!
let myArray = [1, 4, 4, 3];
let amount = 0;
function arrayCount() {
    for (let i = 0; i < myArray.length; i++) {
        amount += myArray[i];
    }
    console.log(amount);
}
arrayCount();


// 8. uzdevums
function sumExample(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}
sumExample(20, 4);

function dedExample(num1, num2) {
    let ded = num1 - num2;
    console.log(ded);
}
dedExample(20, 4);


// 9. uzdevums
let plusExample = 10;
function addExample() {
    plusExample += 5;
    console.log(plusExample);
}
addExample();

// 10. uzdevums
function randomNumber(number) {
    if (number > 0) {
        console.log('Pozitīvs');
    } else if (number < 0) {
        console.log('Negatīvs');
    } else if (number === 0) {
        console.log('Nulle')
    }
}
randomNumber(5);

// 11. uzdevums
function checkNumber(input) {
    if (input % 3 === 0 && input % 5 === 0) {
        console.log('Dalās')
    } else {
        console.log('Nedalās')
    }
}
checkNumber(20);
checkNumber(30);

// 12. uzdevums
function checkValues(a, b) {
    if (a > b) {
        console.log('a ir lielāks par b')
    } else {
        console.log('a nav lielāks par b')
    }
}
checkValues(54, 10);

// 13. uzdevums
let diena = 'svētdiena';
switch (diena) {
    case 'pirmdiena':
        console.log('Ir nedēļas sākums.')
        break
    case 'otrdiena':
        console.log('Ir nedēļas sākums.')
        break
    case 'trešdiena':
        console.log('Ir nedēļas vidus.')
        break
    case 'ceturtdiena':
        console.log('Ir nedēļas vidus.')
        break
    case 'piektdiena':
        console.log('Nedēļas nogale ir gandrīz šeit!')
        break
    case 'sestdiena':
        console.log('Nedēļas nogale ir šeit!')
        break
    case 'svētdiena':
        console.log('Nedēļas nogale ir gandrīz beigusies. :(')
        break
}

// 14. uzdevums
for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 15. uzdevums
let skaitītājs = 0;
while (skaitītājs < 5) {
    console.log('Sveiki!')
    skaitītājs++
}

// 16. uzdevums
function greeting(name) {
    console.log(`Sveiks, ${name}!`);
}
greeting('Karļis');

// 17. uzdevums
function calculateArea(garums, platums) {
    console.log(garums * platums);
}
calculateArea(10, 3);

// 18. uzdevums
function isOdd(isOddNumber) {
    if (isOddNumber % 2 === 0) {
        console.log(true)
    } else if (isOddNumber % 1 === 0) {
        console.log(false)
    }
}
isOdd(20);
isOdd(13);

// 19. uzdevums
function calculateSum(calculateSumArray) {
    let sumOfArray = 0;
    for (let arrayValues of calculateSumArray) {
        sumOfArray += arrayValues;
    } console.log(sumOfArray);
}
calculateSum([3, 6, 7]);

// 20. uzdevums

// 21. uzdevums
function checkIsNumber(isNumber) {
    if (isNumber > 0) {
        console.log('pozitīvs')
    } else if (isNumber < 0) {
        console.log('negatīvs')
    } else if (isNumber = 0) {
        console.log('nulle')
    }
}

// 22. uzdevums

