// Author: (4ouR04)Amos Mwongela
// File: script.js
/* start */
export const userInput = document.querySelector(
  "#user_input"
) as HTMLInputElement;
let expression: string = "";

let press = (num: number): void => {
  expression += num;
  userInput.value = expression;
};

let equal = (): void => {
  userInput.value = eval(expression);
  expression = "";
};

let erase = (): void => {
  expression = "";
  userInput.value = expression;
};

/* end */
