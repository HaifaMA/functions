function arraySum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
let arrayNum = arraySum([7, 3, 5]);
console.log(arrayNum);

function stringReverse(str){
    return str.split('').reverse().join('');
}
let myStr = stringReverse('videogames');
console.log(myStr);

function adultArray(array){
    let adult = [];
    for(let i = 0; i < array.length; i++){
        let person = array[i];
        if(person.age > 18){
            adult.push(person);
        }
    }
    return adult;
}
let arrayOfObjects = [
    {name: 'Mark', age: 18, gender: 'M'},
    {name: 'Sandy', age: 23, gender: 'F'},
    {name: 'Tom', age: 34, gender: 'M'}
]
let adultObjects = adultArray(arrayOfObjects);
console.log(adultObjects);

function findEvenNum(array){
    let evenNum = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNum.push(array[i])
        }
    }
    return evenNum;     
    }
 let myArray = [5, 7, 1, 4];
 console.log(findEvenNum(myArray));

function aLetter(array){
    let aLetterStr = [];
    for(let i =0; i < array.length; i++){
    let myStr = array[i];
        if(myStr.startsWith('A')){
            aLetterStr.push(myStr);
        }
    }
    return aLetterStr;
}
let strArray = ['Australia', 'russia', 'Albania'];
console.log(aLetter(strArray));

function publishedYear(books, year){
   let booksYear = [];
   for(let i = 0; i < books.length; i++){
    let myBooks = books[i];
    if(myBooks.year >= year){
        booksYear.push(myBooks.title);
    }
   }
   return booksYear;
}
let theBooks = [
    {title: 'nature', author: 'James', year: 2009},
    {title: 'health', author: 'Haley', year: 1998},
];
console.log(publishedYear(theBooks, 2000));

function larger(a, b){
    return Math.max(a, b);
}
console.log(larger(44, 8));

function smallest(array){
    return Math.min(...array);
}
let myNum = [1, 6, 9];
console.log(smallest(myNum));

function longestStr(str){
    let longest = '';
    for(let i = 0; i < str.length; i++){
        let strCurrent = str[i];
        if(strCurrent.length > longest.length){
            longest = strCurrent;
        }
    }
    return longest;
}
let strings = ['ball', 'board', 'f'];
console.log(longestStr(strings));

function gradeA(array, grade){
    let gradeA = [];
    for(let i = 0; i < array.length; i++){
        let currentObj = array[i];
        if(currentObj.grade === grade){
            gradeA.push(currentObj.name);
        }
    }
    return gradeA;
}
let students = [ 
    {name: 'Kate', grade: 'A'},
    {name: 'Tom', grade: 'C'},
    {name: 'Jaden', grade: 'A'},
];
console.log(gradeA(students, 'A'));

