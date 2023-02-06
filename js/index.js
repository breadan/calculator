let inner = (document.getElementById(
  "input-1"
).innerHTML = ` first assignment of JS`);

// Q1:
let productNameInput = document.getElementById("productNum");
let container = [];
function addNum() {
  container.push(productNameInput.value);
}
console.log(container);

//when use variable don't forget .value يا بغل

// Q1
// anotherWay
// let inputs = prompt(`inter number`);
// console.log(inputs);

// Q2
function check() {
  let myInput = document.getElementById("numCheck"); /*check this */
  let divDegree = document.getElementById("checkResult"); /* do this */

  if (parseInt(myInput.value) % 3 == 0 && parseInt(myInput.value) % 4 == 0) {
    divDegree.innerHTML = "Yes";
  } else {
    divDegree.innerHTML = "No ";
  }
}

// Q3
function calcMax() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let max = document.getElementById("maxNum");

  if (parseInt(num1.value) < parseInt(num2.value)) {
    max.innerHTML = num2.value;
  } else {
    max.innerHTML = num1.value;
  }
}

// Q4
function check2() {
  let myInput = document.getElementById("posOrNeg"); /*check this */
  let divcheck = document.getElementById("posOrNegResult"); /* do this */

  if (parseInt(myInput.value) < 0 && parseInt(myInput.value) != 0) {
    divcheck.innerHTML = "negative ";
  } else if (parseInt(myInput.value) > 0 && parseInt(myInput.value) != 0) {
    divcheck.innerHTML = " positive ";
  } else {
    divcheck.innerHTML = " zero ";
  }
}

// Q5
function checks() {
  let number1 = document.getElementById("number1");
  let number2 = document.getElementById("number2");
  let number3 = document.getElementById("number3");
  let maxNumber = document.getElementById("maxNumber");

  if (
    parseInt(number1.value) > parseInt(number2.value) &&
    parseInt(number1.value) > parseInt(number3.value)
  ) {
    maxNumber.innerHTML = number1.value;
  } else if (
    parseInt(number2.value) > parseInt(number1.value) &&
    parseInt(number2.value) > parseInt(number3.value)
  ) {
    maxNumber.innerHTML = number2.value;
  } else {
    maxNumber.innerHTML = number3.value;
  }
}

// Q6
function evenOdds() {
  let myInput = document.getElementById("evenOdd"); /*check this */
  let divcheck = document.getElementById("evenOddRes"); /* do this */

  if (parseInt(myInput.value) % 2 == 0) {
    divcheck.innerHTML = "even  ";
  } else {
    divcheck.innerHTML = " odd  ";
  }
}

// Q8
function char() {
  let myInput = document.getElementById("character"); /*check this */
  let divcheck = document.getElementById("characterType"); /* do this */

  if (
    myInput.value == "a" ||
    myInput.value == "e" ||
    myInput.value == "i" ||
    myInput.value == "o" ||
    myInput.value == "u"
  ) {
    divcheck.innerHTML = "vowel  ";
  } else {
    divcheck.innerHTML = " Consonant";
  }
}

// Q9
function printNumbs() {
  let numToPrint = document.getElementById("num");
  let printRes = document.getElementById("printNum");
  for (let i = 1; i <= parseInt(numToPrint.value); i++) {
    printRes.innerHTML = "show in console";
    console.log(i);
  }
}

// Q10                        how show result in browser ????????????
function multiplication() {
  let numToPrint = document.getElementById("multiplication");
  let printRes = document.getElementById("printmultiplication");
  for (let i = 1; i <= 12; i++) {
    printRes.innerHTML = `show in console`;
    console.log(numToPrint.value + "*" + i + "=" + numToPrint.value * i) ;
  }
}

// Q11
function printEvenNumbs() {
  let numToPrint = document.getElementById("printEven");
  let printRes = document.getElementById("printEvenRes");
  for (let i = 1; i <= parseInt(numToPrint.value); i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
    printRes.innerHTML = "show in console";
  }
}

// Q12
function calcPower() {
  let base = document.getElementById("base");
  let power = document.getElementById("power");
  let powerBase = document.getElementById("powerBase");

  powerBase.innerHTML = base.value ** power.value;
}

// Q13                                                                  ????????
let avgR = function calcSum() {
  let avge1 = document.getElementById("avg1");
  let avge2 = document.getElementById("avg2");
  let avge3 = document.getElementById("avg3");
  let avge4 = document.getElementById("avg4");
  let avge5 = document.getElementById("avg5");

  let calcTotal = document.getElementById("resTotal");

  calcTotal.innerHTML =
    parseInt(avge1.value) +
    parseInt(avge2.value) +
    parseInt(avge3.value) +
    parseInt(avge4.value) +
    parseInt(avge5.value);
};


//Q14 days in month
function Days() {
  let inputM = document.getElementById("printDays");
  let outPutD = document.getElementById("printDaysRes");

  if(inputM.value == 1 || inputM.value == 3 || inputM.value == 5 || inputM.value == 8 || inputM.value == 7 
    || inputM.value == 10 || inputM.value == 12) 
     {
    outPutD.innerHTML = `days of month ${inputM.value} = 31 Days`;
  } else if (inputM.value == 2 ) {
    outPutD.innerHTML = `days of month ${inputM.value} = 28 Days`;
  } else if (inputM.value == 4 || (inputM.value == 6) || (inputM.value == 9) || (inputM.value == 11)  ) {
    outPutD.innerHTML = `days of month ${inputM.value} = 30 Days`;

  } else {
    outPutD.innerHTML = `Wrong Input`;

  }
}

//
let inner2 = (document.getElementById(
  "input-2"
).innerHTML = ` first assignment using switch case`);

//Q15

function calcDays() {
  let monthCase = document.getElementById("case");
  let resCase = document.getElementById("resCase");
  switch (monthCase.value) {
    case "1":
      resCase.innerHTML = `31 Days`;
    case "5":
      resCase.innerHTML = `31 Days`;
    case "3":
      resCase.innerHTML = `31 Days`;
    case "8":
      resCase.innerHTML = `31 Days`;
    case "7":
      resCase.innerHTML = `31 Days`;
    case "10":
      resCase.innerHTML = `31 Days`;
    case "12":
      resCase.innerHTML = `31 Days`;
      break;
    case "2":
      resCase.innerHTML = `28 Days`;
      break;

    case "4":
      resCase.innerHTML = `30 Days`;
    case "6":
      resCase.innerHTML = `30 Days`;
    case "9":
      resCase.innerHTML = `30 Days`;
    case "11":
      resCase.innerHTML = `30 Days`;
      break;

    default:
      resCase.innerHTML = `FALSE`;
  }
}

//Q16                                               how use toLowerCase() here ???????????????????????????
function kindChar() {
  let charCheck = document.getElementById("char2");

  let resCheck = document.getElementById("kindChar");
  switch (charCheck.value) {
    case "a":
      resCheck.innerHTML = `vowel `;
    case "A":
      resCheck.innerHTML = `vowel `;
    case "e":
      resCheck.innerHTML = `vowel `;
    case "E":
      resCheck.innerHTML = `vowel `;
    case "i":
      resCheck.innerHTML = `vowel `;
    case "I":
      resCheck.innerHTML = `vowel `;
    case "o":
      resCheck.innerHTML = `vowel `;
    case "O":
      resCheck.innerHTML = `vowel `;
    case "u":
      resCheck.innerHTML = `vowel `;
    case "U":
      resCheck.innerHTML = `vowel `;
      break;

    default:
      resCheck.innerHTML = `constant `;
  }
}

// Q17
function maxNum() {
  let nums1 = document.getElementById("numMax");
  let nums2 = document.getElementById("numMax2");
  let resMo = document.getElementById("resn");

  switch (nums1.value > nums2.value) {
    case false:
      resMo.innerHTML = `max is ${nums2.value}`;
      console.log(`max is ${nums2.value}`);
      break;
    case true:
      resMo.innerHTML = `max is ${nums1.value}`;
      console.log(`max is ${nums1.value}`);

      break;
  }
}

// Q18
function kindNum() {
  let numEven = document.getElementById("even2");
  let resEven = document.getElementById("resNum");

  switch (numEven.value % 2 == 0) {
    case false:
      resEven.innerHTML = "Num is Odd";
      break;
    case true:
      resEven.innerHTML = "Num is Even";
      break;
  }
}

// Q19
function posNeg() {
  let posNeg = document.getElementById("posNeg");
  let resNeg = document.getElementById("resNeg");

  switch (true) {
    case posNeg.value > 0:
      console.log("posNeg.value");
      resNeg.innerHTML = "Num is positive";
      console.log("Num is positive");
      break;
    case posNeg.value < 0:
      resNeg.innerHTML = "Num is Negative";
      break;
    case posNeg.value == 0:
      resNeg.innerHTML = "Num is Zero";
  }
}


//Q20

let outPut = document.getElementById("calco");
function insert (num) {
  outPut.value += num;
}
function clean() {
  outPut.value="";
}
function del() {
  outPut.value = outPut.value.slice(0, -1);
}

function equal() {
  try {
   outPut.value= eval(outPut.value);
  }
  catch(error) {
    outPut.value = "error";
  }

};


// function insert(num) {
//   var myString = document.getElementById("textViews.value");
//   let lastChar = myString[myString.length - 1];
//   if (myString.length <30) {
//     if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
//       document.getElementById("textViews.value") = myString + num;
//     } else if (num != lastChar) {
//       document.getElementById("textViews.value") = myString.replaceChild(lastChar, num)
//     }
//   }
// }

// function equal() {
//   var sum = document.getElementById("textViews".valueOf) ;
//   if (sum) {
//     document.getElementById("textViews.value") = eval(sum);
//   }
// }

// function clear() {
//   document.getElementById("textViews.value") = "";
// }
// function back() {
// var EXP =  document.getElementById("textViews").value;
// }