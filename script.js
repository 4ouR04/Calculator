// Author: (4ouR04)Amos Mwongela
// File: script.js
/* start */
const userInput =  document.querySelector("#user_input");
var expression = "";

press = (num) => {
  expression += num;
  userInput.value = expression;
}

equal = () => {
  userInput.value = eval(expression);
  expression = "";
}

erase = () => {
  expression = "";
  userInput.value = expression;
}

/* end */
