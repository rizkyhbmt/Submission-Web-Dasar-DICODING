
alert("Terimakasih. Regards, rizky");
const firstName = prompt("Siapa namamu?");
const language = prompt("Bisa berbahasa apa? Silahkan ketik: English/French/Japanese");
 
const user = {
   name: {
       first: firstName,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Nice to meet you " + user.name.first + " " + "!");
} else if (user.language === "French") {
   alert("Ravi de vous rencontrer " + user.name.first + " " + "!");
} else if (user.language === "Japanese") {
   alert("Hajimemashite, " + user.name.first + " "  + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " "  + "!");
}


const calculator = {
   displayNumber: '0',
   operator: null,
   firstNumber: null,
   waitingForSecondNumber: false
};
 
function updateDisplay() {
   document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
 
function clearCalculator() {
   calculator.displayNumber = '0';
   calculator.operator = null;
   calculator.firstNumber = null;
   calculator.waitingForSecondNumber = false;
}
 
function inputDigit(digit) {
   if (calculator.displayNumber === '0') {
       calculator.displayNumber = digit;
   } else {
       calculator.displayNumber += digit;
   }
}
 
 
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // by : Rizky Boy
       const target = event.target;
 
       if (target.classList.contains('clear')) {
           clearCalculator();
           updateDisplay();
           return;
       }
       if(target.classList.contains('negative')) {
         inverseNumber();
         updateDisplay();
         return;
     }

     if(target.classList.contains('equals')) {
         performCalculation();
         updateDisplay();
         return;
     }

     if(target.classList.contains('operator')) {
         handleOperator(target.innerText);
         return;
     }

       inputDigit(target.innerText);
       updateDisplay()
   });
}
 
function inverseNumber() {
   if (calculator.displayNumber === '0') {
       return;
   }
   calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
   if (!calculator.waitingForSecondNumber) {
       calculator.operator = operator;
       calculator.waitingForSecondNumber = true;
       calculator.firstNumber = calculator.displayNumber;

       calculator.displayNumber = '0';
   } else {
       alert('Operator sudah ditetapkan')
   }
}

function performCalculation() {
   if (calculator.firstNumber == null || calculator.operator == null) {
       alert("Anda belum menetapkan operator");
       return;
   }
 
   let result = 0;
   if (calculator.operator === "+") {
       result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
   } else {
       result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
   }
   
   const history = {
    firstNumber: calculator.firstNumber,
    secondNumber: calculator.displayNumber,
    operator: calculator.operator,
    result: result
}
   
   putHistory(history);
   calculator.displayNumber = result;
   renderHistory();
}