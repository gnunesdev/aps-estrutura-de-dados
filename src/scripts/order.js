function funcaoPrincipal() {
  var vetorPrincipal = [];

  var aux = document.getElementById("txtVetor").value;
  if (!aux.includes(",")) {
    alert("Por favor, digite o vetor separando os valores por vírgulas!");
  } else {
    var tempoInicial = performance.now();
    var vetorAux = aux.split(",").map(Number);
    vetorAux.forEach(function(item, indice, array) {
      vetorPrincipal.push(item);
    });

    document.getElementById("txtVetorInicial").innerHTML =
      "Vetor Original: " + vetorPrincipal;
    var vetorOrdenado = funcaoQuickSort(vetorPrincipal);
    document.getElementById("txtVetorFinal").innerHTML =
      "Vetor Ordenado: " + vetorOrdenado;

    var tempoFinal = performance.now();
    document.getElementById("txtDuracao").innerHTML =
      "Tempo de execução: " + (tempoFinal - tempoInicial) + " ms";
  }
}

function funcaoQuickSort(vetor) {
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
      funcaoQuickSort(esquerda),
      pivo,
      funcaoQuickSort(direita)
    );
  }
}

function containerAnimations(containerToAnimate, containterToRemove) {
  const containerAnimating = document.getElementsByClassName(
    containerToAnimate
  )[0];
  containerAnimating.classList.add("is--animated");
  const containerRemoving = document.getElementsByClassName(
    containterToRemove
  )[0];
  containerRemoving.classList.remove("is--animated");
}

function sendArray() {
  containerAnimations("is--second-step", "is--first-step");

  const arrayValues = document.getElementById("arrayValues").value;
}

function appendListeners() {
  document
    .getElementById("btnSendNumbers")
    .addEventListener("click", sendArray);
}

export default {
  init() {
    appendListeners();
  }
};
