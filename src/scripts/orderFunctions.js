// QUICK SORT BY JOSÉ VITOR
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

// BUBBLE SORT BY GUILHERME NUNES
export function orderByBubbleSort(array) {
  const arrayToOrder = array;
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