
//1.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];                //Created ages array            
console.log(ages);
let subtractAge = ages[ages.length - 1] - ages[0];      //1a. Subtracted first from last
console.log(subtractAge);
ages.push(44);                                          //1.b Added 44 to array
console.log(ages);
let newAges = ages[ages.length - 1] -ages[0];           //repeated to ensure dynamic
console.log(newAges);
let sumOfAges = 0;
for (let i = 0; i < ages.length; i++) {                 //Used for loop calculate avg. age
    sumOfAges += ages[i];                               
    console.log(sumOfAges);
    
}
console.log('Sum', sumOfAges);                          //sum / ages.length for avg.
let average = sumOfAges / ages.length;
console.log('Average', average);

//2.                                                    //Created names array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let letters = 0;                                        //2a. for loop avg. letters
for (let i = 0; i < names.length; i++) {
    letters += names[i].length;
    console.log(i, names[i], letters);
    
}
let averageLetters = letters / names.length;            // avg. letters per name
console.log(averageLetters);

let concatedNames = '';                                 //for loop concatenated names
for (let i = 0; i < names.length; i++) {                //with spaces
    concatedNames = concatedNames.concat(names[i] + ' ');
    console.log(concatedNames);
    
}

//3.
console.log(ages[ages.length - 1]);                     //Access last element ages array

//4.
console.log(ages[0]);                                   //Access first element ages array

//5.
let namelengths = [];                                   //Created nameLengths array, for loop
for (let i = 0; i < names.length; i++) {                //previous array add length each name
    namelengths.push(names[i].length);
    console.log(namelengths);
    
}

//6.
let elementSum = 0;                                     //for loop namelengths array and
for (let i = 0; i < namelengths.length; i++) {          //sum of elements in array
    elementSum += namelengths[i];
    console.log(elementSum);
    
}

//7.
function concatWords(word, n) {                         //function with 2 params and args
    console.log(word, n);                               //returns concat word 3x
    let concat = word.repeat(n);
    console.log(concat);
}
concatWords('Hello', 3);

//8.                                                    //function with 2 params firstName
function fullName(firstName, lastName) {                //lastName return fullName
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);
}
fullName('Matt', 'Clarkson');                           //Called function fullName

//9.
let numbersArray1 = [50, 50, 1];                         //array of numbers returns true
let numbersArray2 = [30, 30, 30];                                                        //if > 100
function sumNumbersArray(array) {                       //declared function
    let total = 0;
    for (let i = 0; i < array.length; i++) {            //for loop to get total
        total += array[i];
        console.log(total);
        
    }
    if (total > 100) {                                  //if statement return true
        console.log(total, true);
        
        
    } else {
        console.log(total, false);                      //else false doesnt run
        
        
    }
}
sumNumbersArray(numbersArray1);                          //call function numbersArray1

//10.
function averageElements(array) {                        //function avgerageElements array
    let total = 0;
    for (let i = 0; i < array.length; i++) {             //for loop total
        total += array[i];
        console.log(total);
        
    }
    let average = total / array.length;                 //get average
    console.log(average);
    
    
}
averageElements(numbersArray2);                         //Call averageElements function

//11.

let numbers3 = [5, 10, 15];                             //Two arrays
let numbers4 = [7, 8, 9];
function twoAverages(array1, array2) {                  //function twoAverages
    console.log(array1, array2);
    let total1 = 0;
    let total2 = 0;
    for (const number of array1) {                      //for loop for array1
        total1 +=number;
        console.log(number, total1);
        
    }
    for (const number of array2) {                      //for loop for array2
        total2 += number;
        console.log(number, total2);
        
    }
    let average1 = total1 / array1.length;              //Declared average1 and 2
    let average2 = total2 / array2.length;              //to total1 and 2
    console.log(average1, average2);                    //divided by array length
    if (average1 > average2) {                          //if statement to log true
        console.log(true);                              //if avg1 is >
        return true;
    } else if (average1 < average2) {                   //log false if avg1 is <
        console.log(false);
       return false;
    } else {                                            //Default statement
        console.log('Numbers are equal');
    }
    
}

//12.

function willBuyDrink(isHotOutside, moneyInPocket) {
    console.log('Parameters', isHotOutside, moneyInPocket);
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log('Buy a drink?', buyDrink);              //function 2 params and 
    return buyDrink;                                    //boolean whether to buy
}                                                       //drink
willBuyDrink(true, 11);











