// const asignaturas = [
//   {
//     curso: "Educacion Fisica",
//     nota: 10,
//     credito: 2,
//   },
//   {
//     curso: "Programacion",
//     nota: 8,
//     credito: 5,
//   },
//   {
//     curso: "Finanzas personales",
//     nota: 7,
//     credito: 5,
//   }
// ];

function calcularPromedioPonderado(asignaturas) {
  const notaConCreditos = asignaturas.map(function (asignatura) {
    return asignatura.nota * asignatura.credito;
  });

  const sumaDeNotasConCredito = notaConCreditos.reduce(function (
    suma = 0,
    nuevoValor
  ) {
    return suma + nuevoValor;
  });

  const creditos = asignaturas.map(function (asignatura) {
    return asignatura.credito;
  });

  const sumaDeCreditos = creditos.reduce(function (suma = 0, nuevoValor) {
    return suma + nuevoValor;
  });

  const promedioPonderado = sumaDeNotasConCredito / sumaDeCreditos;

  return promedioPonderado;
}
