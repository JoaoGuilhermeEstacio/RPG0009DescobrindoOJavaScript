const swap = (vetor, pos1, pos2) => {
  var temp = vetor[pos1];
  vetor[pos1] = vetor[pos2];
  vetor[pos2] = temp;
  return vetor;
};
const shuffle = (vetor) => {
  return vetor.sort(() => 0.5 - Math.random());
};
const bubble_sort = (vetor) => {
  var i, j, arr;
  var n = vetor.length;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        arr = swap(vetor, j, j + 1);
      }
    }
  }
  return arr;
};
const selection_sort = (vetor) => {};
const quick_sort = (vetor, posIni, posFim) => {};
const particionamento = (vetor, posIni, posFim, pivot) => {};
