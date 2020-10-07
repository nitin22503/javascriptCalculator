const input_field = document.getElementById("inputField");
const button9 = document.getElementById("number9");
const button8 = document.getElementById("number8");
const button7 = document.getElementById("number7");
const button6 = document.getElementById("number6");
const button5 = document.getElementById("number5");
const button4 = document.getElementById("number4");
const button3 = document.getElementById("number3");
const button2 = document.getElementById("number2");
const button1 = document.getElementById("number1");
const button0 = document.getElementById("number0");
const buttone = document.getElementById("equals");
const buttond = document.getElementById("division");
const buttona = document.getElementById("plus");
const buttons = document.getElementById("minus");
const buttonm = document.getElementById("multy");
const buttonc = document.getElementById("clear");
const buttondot = document.getElementById("dot");
const digit9 = button9.innerText;
const digit8 = button8.innerText;
const digit7 = button7.innerText;
const digit6 = button6.innerText;
const digit5 = button5.innerText;
const digit4 = button4.innerText;
const digit3 = button3.innerText;
const digit2 = button2.innerText;
const digit1 = button1.innerText;
const digit0 = button0.innerText;
const add = buttona.innerText;
const multy = buttonm.innerText;
const sub = buttons.innerText;
const divide = buttond.innerText;
const dot = buttondot.innerText;
    button9.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(digit9);
        input_field.innerText = s;
      });
      button8.addEventListener('click', function() {
        //input_field.innerText = digit8;
        let s = input_field.innerText;
        s = s.concat(digit8);
        input_field.innerText = s;
      });
      button7.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(digit7);
        input_field.innerText = s;
      });
      button6.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(digit6);
        input_field.innerText = s;
      });
      button5.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(digit5);
        input_field.innerText = s;
      });
      button4.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(digit4);
        input_field.innerText = s;
      });
      button3.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(digit3);
        input_field.innerText = s;
      });
      button2.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(digit2);
        input_field.innerText = s;
      });
      button1.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(digit1);
        input_field.innerText = s;
      });
      button0.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(digit0);
        input_field.innerText = s;
      });
      buttona.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(add);
        input_field.innerText = s;
      });
      buttons.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(sub);
        input_field.innerText = s;
      });
      buttonm.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(multy);
        input_field.innerText = s;
      });
      buttond.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(divide);
        input_field.innerText = s;
      });
      buttondot.addEventListener('click', function() {
        let s = input_field.innerText;
        s = s.concat(dot);
        input_field.innerText = s;
      });
      buttonc.addEventListener("click",function(){
        input_field.innerText = "";
      })
      buttone.addEventListener("click",function(){
        res = eval(input_field.innerText);
        input_field.innerHTML = res;
      })