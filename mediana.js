function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

// const lista1 = [100, 200, 500, 400000000];

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana(lista) {
  const listaOrdenada = lista.sort(function (numero1, numero2) {
    return numero1 - numero2;
  });
  const mitadLista = parseInt(listaOrdenada.length / 2);
  let mediana;

  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
  } else {
    mediana = listaOrdenada[mitadLista];
  }

  return mediana;
}
