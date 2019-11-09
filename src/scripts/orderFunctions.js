export function orderByQuickSort(vetor) {
  if (vetor.length <= 1) {
    return vetor;
  } else {
    var esquerda = [];
    var direita = [];
    var novoVetor = [];
    var pivo = vetor.pop();
    var tamanho = vetor.length;

    for (var i = 0; i < tamanho; i++) {
      if (vetor[i] <= pivo) {
        esquerda.push(vetor[i]);
      } else {
        direita.push(vetor[i]);
      }
    }

    return novoVetor.concat(
      orderByQuickSort(esquerda),
      pivo,
      orderByQuickSort(direita)
    );
  }
}

export function orderByBubbleSort(array) {
  let arrayToOrder = [...array];
  let len = arrayToOrder.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (arrayToOrder[i] > arrayToOrder[i + 1]) {
        let tmp = arrayToOrder[i];
        arrayToOrder[i] = arrayToOrder[i + 1];
        arrayToOrder[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return arrayToOrder;
}

export function orderBySelectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
