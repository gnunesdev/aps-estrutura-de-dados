import { containerAnimation } from "./animationHelpers.js";
import {
  orderByQuickSort,
  orderByBubbleSort,
  orderBySelectionSort
} from "./orderFunctions.js";

export default {
  init() {
    appendListeners();
  }
};

// GLOBAL VAR - ARRAY DISORDERED AFTER VALIDATED
let arrayCleaned;

// GLOBAL VAR - VALUES AMBIENT
let isAmbientOrder = false;

// GLOBAL VAR - VALUES AMBIENT
const arrayAmbientValues = [
  3500000000,
  3800000000,
  3900000000,
  4300000000,
  5000000000,
  3600000000,
  3600000000,
  3500000000,
  3900000000,
  3700000000
];

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
    .getElementById("btnSelectionSort")
    .addEventListener("click", callOrderMethod);

  document
    .getElementById("btnQuickSortAmbient")
    .addEventListener("click", callOrderMethod);

  document
    .getElementById("btnBubbleSortAmbient")
    .addEventListener("click", callOrderMethod);

  document
    .getElementById("btnSelectionSortAmbient")
    .addEventListener("click", callOrderMethod);

  document.getElementById("btnOrderAgain").addEventListener("click", () => {
    containerAnimation("is--first-step", "is--third-step");
    const inputNumbers = document.getElementById("arrayValues");
    inputNumbers.value = "";
  });

  document.getElementById("btnSeeGraph").addEventListener("click", () => {
    containerAnimation("is--ambient-second-step", "is--first-step");
    isAmbientOrder = true;
  });
}

function validateArray(arrayValues) {
  let errorMsg;

  //remove whitespaces
  const arrayWithoutSpaces = arrayValues.replace(/\s/g, "");

  if (!/^[0-9,]+$/.test(arrayWithoutSpaces)) {
    errorMsg = "Digite somente números separados por vírgula";

    return errorMsg;
  }

  if (arrayWithoutSpaces.endsWith(",")) {
    errorMsg =
      "Digite os valores corretamente sem vírgula ou outros caracteres no final.";

    return errorMsg;
  }

  //split values in a array
  const numberArray = arrayWithoutSpaces.split(",").map(Number);

  if (arrayValues.length <= 1) {
    errorMsg = "Insira mais de um valor no vetor à ser ordenado";

    return errorMsg;
  }

  return numberArray;
}

function sendArray() {
  const arrayValues = document.getElementById("arrayValues").value;

  const validatedResult = validateArray(arrayValues);

  if (Array.isArray(validatedResult)) {
    //function validateArray returned an array
    arrayCleaned = validatedResult;

    const labelArrayValues = document.getElementById("labelArrayValues");
    labelArrayValues.innerHTML = arrayCleaned;

    containerAnimation("is--second-step", "is--first-step");
  } else {
    //function validateArray returned an error, so we alert it
    alert(validatedResult);
  }
}

function callOrderMethod(ev) {
  const idBtnCalled = ev.target.id;
  let arrayDisordered;

  if (isAmbientOrder) {
    // ambient order
    arrayDisordered = [...arrayAmbientValues];
  } else {
    // normal
    arrayDisordered = [...arrayCleaned];
  }

  let arrayOrdered;
  let startTime, finalTime;

  //quick sort
  if (idBtnCalled == "btnQuickSort" || idBtnCalled == "btnQuickSortAmbient") {
    startTime = performance.now();
    arrayOrdered = orderByQuickSort(arrayDisordered);
    finalTime = performance.now();
  }
  //bubble sort
  else if (
    idBtnCalled == "btnBubbleSort" ||
    idBtnCalled == "btnBubbleSortAmbient"
  ) {
    startTime = performance.now();
    arrayOrdered = orderByBubbleSort(arrayDisordered);
    finalTime = performance.now();
  }
  // selection sort
  else if (
    idBtnCalled == "btnSelectionSort" ||
    idBtnCalled == "btnSelectionSortAmbient"
  ) {
    startTime = performance.now();
    arrayOrdered = orderBySelectionSort(arrayDisordered);
    finalTime = performance.now();
  }
  // error
  else {
    console.error("different id expected");
  }

  if (isAmbientOrder) {
    containerAnimation("is--third-step", "is--ambient-second-step");
  } else {
    containerAnimation("is--third-step", "is--second-step");
  }

  setFinalValues(arrayOrdered, startTime, finalTime);
}

function setFinalValues(arrayOrdered, startTime, finalTime) {
  // get elements to put values
  const labelDisorderedArray = document.getElementById(
    "labelArrayDisorderedValues"
  );
  const labelOrderedArray = document.getElementById("labelArrayOrderedValues");
  const labelExecutionTime = document.getElementById("labelExecutionTime");

  // calculate time of array ordination
  const executionTime = finalTime - startTime;

  // put values
  if (isAmbientOrder) {
    labelDisorderedArray.innerHTML = arrayAmbientValues;
  } else {
    labelDisorderedArray.innerHTML = arrayCleaned;
  }
  labelOrderedArray.innerHTML = arrayOrdered;
  labelExecutionTime.innerHTML = `${executionTime}ms`;
}
