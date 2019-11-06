import { containerAnimation } from './animationHelpers.js';
import { orderByQuickSort, orderByBubbleSort } from './orderFunctions.js';

export default {
  init() {
    appendListeners();
  }
};

let arrayCleaned;

function appendListeners() {
  document
    .getElementById("btnSendNumbers")
    .addEventListener("click", sendArray);

  document
    .getElementById("btnQuickSort")
    .addEventListener("click", callOrderMethod);

  document
    .getElementById("btnBubbleSort")
    .addEventListener("click", callOrderMethod);

  document
    .getElementById("btnOrderAgain")
    .addEventListener("click", () => containerAnimation("is--first-step", "is--third-step"));
}

function validateArray(arrayValues) {
  let errorMsg;

  //remove whitespaces
  const arrayWithoutSpaces = arrayValues.replace(/\s/g, '');

  if (!(/^[0-9,]+$/.test(arrayWithoutSpaces))) {
    errorMsg = 'Digite somente números separados por vírgula';

    return errorMsg;
  }

  if (arrayWithoutSpaces.endsWith(',')) {
    const
  }

  //split values in a array
  const numberArray = arrayWithoutSpaces.split(',').map(Number);

  if (arrayValues.length <= 1) {
    errorMsg = 'Insira mais de um valor no vetor à ser ordenado';

    return errorMsg;
  }

  return numberArray;
}

function cleanArray(arrayValues) {
  const numberArray = arrayValues.split(',').map(Number);
  console.log(numberArray);
  return numberArray;
}

function sendArray() {
  const arrayValues = document.getElementById("arrayValues").value;

  const validatedResult = validateArray(arrayValues);

  if (Array.isArray(validatedResult)) {
    arrayCleaned = validatedResult;

    const labelArrayValues = document.getElementById('labelArrayValues');
    labelArrayValues.innerHTML = arrayCleaned;

    containerAnimation("is--second-step", "is--first-step");
  } else {
    alert(validatedResult);
  }
}

function callOrderMethod(ev) {
  const idBtnCalled = ev.target.id;

  const arrayValues = document.getElementById("arrayValues").value;
  const arrayValidated = cleanArray(arrayValues);

  let arrayOrdered = [];
  let startTime, finalTime;

  if (idBtnCalled == 'btnQuickSort') {
    startTime = performance.now();
    arrayOrdered = orderByQuickSort(arrayValidated);
    finalTime = performance.now();
  } else if (idBtnCalled == 'btnBubbleSort') {
    startTime = performance.now();
    arrayOrdered = orderByBubbleSort(arrayValidated);
    finalTime = performance.now();
  } else if (idBtnCalled == 'btnRandomSort') {
    console.log('waiting implementation');
  } else {
    console.error('different id expected');
  }

  containerAnimation("is--third-step", "is--second-step");
  setFinalValues(arrayOrdered, startTime, finalTime);
}