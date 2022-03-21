/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];



/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

let resetButton = document.querySelector('#reset-button');

let d6Button = document.querySelector('#d6-button');
let d6 = document.querySelector('#d6-roll');
let d6Mean = document.querySelector('#d6-rolls-mean');
let d6Median = document.querySelector('#d6-rolls-median');
let d6Mode = document.querySelector('#d6-rolls-mode');

let doubleD6Button = document.querySelector('#double-d6-buttons');
let doubleD6One = document.querySelector('#double-d6-roll-1');
let doubleD6Two = document.querySelector('#double-d6-roll-2');
let doubleD6Mean = document.querySelector('#double-d6-rolls-mean');
let doubleD6Median = document.querySelector('#double-d6-rolls-median');
let doubleD6Mode = document.querySelector('#double-d6-rolls-mode');

let d12Button = document.querySelector('#d12-button');
let d12 = document.querySelector('#d12-roll');
let d12Mean = document.querySelector('#d12-rolls-mean');
let d12Median = document.querySelector('#d12-rolls-median');
let d12Mode = document.querySelector('#d12-rolls-mode');

let d20Button = document.querySelector('#d20-button');
let d20 = document.querySelector('#d20-roll');
let d20Mean = document.querySelector('#d20-rolls-mean');
let d20Median = document.querySelector('#d20-rolls-median');
let d20Mode = document.querySelector('#d20-rolls-mode');

reset();





/*******************
 * EVENT LISTENERS *
 *******************/
d6Button.addEventListener('click', rollD6);

doubleD6Button.addEventListener('click', rollDoubleD6One);

doubleD6Button.addEventListener('click', rollDoubleD6Two);

// doubleD6Two.addEventListener('click', function() {
//   console.log("roll doubleD6 2");
// })

d12Button.addEventListener('click', rollD12);

d20Button.addEventListener('click', rollD20);

resetButton.addEventListener('click', reset)






/******************
 * RESET FUNCTION *
 ******************/
 function reset() {
   
  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];
  d6Mean.innerText = 'NA';
  d6Median.innerText = 'NA';
  d6Mode.innerText = 'NA';
  doubleD6Mean.innerText = 'NA';
  doubleD6Median.innerText = 'NA';
  doubleD6Mode.innerText = 'NA';
  d12Mean.innerText = 'NA';
  d12Median.innerText = 'NA';
  d12Mode.innerText = 'NA';
  d20Mean.innerText = 'NA';
  d20Median.innerText = 'NA';
  d20Mode.innerText = 'NA';
  d6.src = "images/start/d6.png";
  doubleD6One.src = "images/start/d6.png";
  doubleD6Two.src = "images/start/d6.png";
  d12.src = "images/start/d12.jpeg";
  d20.src = "images/start/d20.jpg";

  
 }


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function rollD6() {
  let roll = getRandomNumber(6);

  if (roll === 1) {
    d6.src = "images/d6/1.png";
  } else if (roll === 2) {
    d6.src = "images/d6/2.png";
  } else if (roll === 3) {
    d6.src = "images/d6/3.png";
  } else if (roll === 4) {
    d6.src = "images/d6/4.png";
  } else if (roll === 5) {
    d6.src = "images/d6/5.png";
  } else if (roll === 6) {
    d6.src = "images/d6/6.png";
  }
  sixes.push(roll);
  console.log(sixes);

  d6Mean.innerText = getAverage(sixes);
  d6Median.innerText = getMedian(sixes);
  d6Mode.innerText = getMode(sixes);

  
}

function rollDoubleD6One() {
  let roll = getRandomNumber(6);

  if (roll === 1) {
    doubleD6One.src = "images/d6/1.png";
  } else if (roll === 2) {
    doubleD6One.src = "images/d6/2.png";
  } else if (roll === 3) {
    doubleD6One.src = "images/d6/3.png";
  } else if (roll === 4) {
    doubleD6One.src = "images/d6/4.png";
  } else if (roll === 5) {
    doubleD6One.src = "images/d6/5.png";
  } else if (roll === 6) {
    doubleD6One.src = "images/d6/6.png";
  }
  doubleSixes.push(roll);
  console.log(doubleSixes);

  doubleD6Mean.innerText = getAverage(doubleSixes);
  doubleD6Median.innerText = getMedian(doubleSixes);
  doubleD6Mode.innerText = getMode(doubleSixes);

  
}

function rollDoubleD6Two() {
  let roll = getRandomNumber(6);

  if (roll === 1) {
    doubleD6Two.src = "images/d6/1.png";
  } else if (roll === 2) {
    doubleD6Two.src = "images/d6/2.png";
  } else if (roll === 3) {
    doubleD6Two.src = "images/d6/3.png";
  } else if (roll === 4) {
    doubleD6Two.src = "images/d6/4.png";
  } else if (roll === 5) {
    doubleD6Two.src = "images/d6/5.png";
  } else if (roll === 6) {
    doubleD6Two.src = "images/d6/6.png";
  }
  doubleSixes.push(roll);
  console.log(doubleSixes);

  doubleD6Mean.innerText = getAverage(doubleSixes);
  doubleD6Median.innerText = getMedian(doubleSixes);
  doubleD6Mode.innerText = getMode(doubleSixes);

  
}

function rollD12() {
  let roll = getRandomNumber(12);

  if (roll === 1) {
    d12.src = "images/numbers/1.png";
  } else if (roll === 2) {
    d12.src = "images/numbers/2.png";
  } else if (roll === 3) {
    d12.src = "images/numbers/3.png";
  } else if (roll === 4) {
    d12.src = "images/numbers/4.png";
  } else if (roll === 5) {
    d12.src = "images/numbers/5.png";
  } else if (roll === 6) {
    d12.src = "images/numbers/6.png";
  } else if (roll === 7) {
    d12.src = "images/numbers/7.png";
  } else if (roll === 8) {
    d12.src = "images/numbers/8.png";
  } else if (roll === 9) {
    d12.src = "images/numbers/9.png";
  } else if (roll === 10) {
    d12.src = "images/numbers/10.png";
  } else if (roll === 11) {
    d12.src = "images/numbers/11.png";
  } else if (roll === 12) {
    d12.src = "images/numbers/12.png";
  }

  twelves.push(roll);
  console.log(twelves);

  d12Mean.innerText = getAverage(twelves);
  d12Median.innerText = getMedian(twelves);
  d12Mode.innerText = getMode(twelves);
  
}

function rollD20() {
  let roll = getRandomNumber(20);

  if (roll === 1) {
    d20.src = "images/numbers/1.png";
  } else if (roll === 2) {
    d20.src = "images/numbers/2.png";
  } else if (roll === 3) {
    d20.src = "images/numbers/3.png";
  } else if (roll === 4) {
    d20.src = "images/numbers/4.png";
  } else if (roll === 5) {
    d20.src = "images/numbers/5.png";
  } else if (roll === 6) {
    d20.src = "images/numbers/6.png";
  } else if (roll === 7) {
    d20.src = "images/numbers/7.png";
  } else if (roll === 8) {
    d20.src = "images/numbers/8.png";
  } else if (roll === 9) {
    d20.src = "images/numbers/9.png";
  } else if (roll === 10) {
    d20.src = "images/numbers/10.png";
  } else if (roll === 11) {
    d20.src = "images/numbers/11.png";
  } else if (roll === 12) {
    d20.src = "images/numbers/12.png";
  } else if (roll === 13) {
    d20.src = "images/numbers/13.png";
  } else if (roll === 14) {
    d20.src = "images/numbers/14.png";
  } else if (roll === 15) {
    d20.src = "images/numbers/15.png";
  } else if (roll === 16) {
    d20.src = "images/numbers/16.png";
  } else if (roll === 17) {
    d20.src = "images/numbers/17.png";
  } else if (roll === 18) {
    d20.src = "images/numbers/18.png";
  } else if (roll === 19) {
    d20.src = "images/numbers/19.png";
  } else if (roll === 20) {
    d20.src = "images/numbers/20.png";
  }

  twenties.push(roll);
  console.log(twenties);

  d20Mean.innerText = getAverage(twenties);
  d20Median.innerText = getMedian(twenties);
  d20Mode.innerText = getMode(twenties);
  
}




/****************
 * MATH SECTION *
 ****************/
 function getAverage(arrays){
  let sum = 0;

  for(const array of arrays){
    sum += array;
  }

  return (sum/arrays.length).toFixed(2);
}

function getMedian(array){
  if( array.length === 0){
    return 0;
  }
  //[ 0, 3, 7]
  //[10, 11, 12, 13, 14, 15, 16, 17 , 18]
 //[15, 17, 6, 5, 1005] middle is 6
 //[5, 6, 15, 17, 1005] middle is 15, which is the median
 //[1005, 17, 15, 6, 5]


  //[0, 2, 3, 7] 4/2 = 2    4/2-1= 1
 //[0, 1, 2, 3, 4, 5] 6/2 =3 
  let sorted = sortByNumber(array);
  console.log(sorted);
  if (sorted.length % 2 === 0){
    //Array is even, find two middle most numbers and average them
    let middleHigh = sorted.length/2; 
    let middleLow = (sorted.length/2) - 1;
    let trueMiddle = (sorted[middleHigh] + sorted[middleLow]) / 2;
    return trueMiddle;
  } else {
    //Array is odd
    let middleIndex = Math.floor(sorted.length/2); 
    return sorted[middleIndex];
  }

}


function getMode(array) {
  //[2, 3, 3, 4, 6]
  /*
  countObject = {
    2 : 1
    3 : 2
    4 : 1
    6 : 1
  }
  */

  let countObject = {};
  
  //create keys for each number in array

  for (let number of array){
    if (countObject[number] >= 1){
      countObject[number]++;
    } else {
      countObject[number] = 1;
    }
  }

  let highestUniqueNumber = 0;
  let highestCount = 0;
  let keys = Object.keys(countObject); //returns a string array of each key in the object that we passed in
  
  //Get number with highest count
  for(let number of keys){
    let value = countObject[number];
    if(value > highestCount){
      highestCount = value;
      highestUniqueNumber = number;
    }
  }

  return highestUniqueNumber;

}