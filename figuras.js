// Codido del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codido del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codido del circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: : " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: : " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Area
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const lado1Input = document.getElementById("lado1Triangulo");
  const lado2Input = document.getElementById("lado2Triangulo");
  const baseInput = document.getElementById("baseTriangulo");

  const lado1 = parseInt(lado1Input.value);
  const lado2 = parseInt(lado2Input.value);
  const base = parseInt(baseInput.value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const baseInput = document.getElementById("baseTriangulo");
  const alturaInput = document.getElementById("alturaTriangulo");

  const base = baseInput.value;
  const altura = alturaInput.value;

  const area = areaTriangulo(base, altura);
  alert(area);
}

function calcularPerimetroCirculo() {
  const radioInput = document.getElementById("InputRadio");
  const radio = radioInput.value;

  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const radioInput = document.getElementById("InputRadio");
  const radio = radioInput.value;

  const area = areaCirculo(radio);
  alert(area);
}

// -- Reto --
// En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.

function calcularAlturaTrianguloIsosceles(
  lado1Triangulo,
  lado2Triangulo,
  baseTriangulo
) {
  if (lado1Triangulo !== lado2Triangulo) {
    console.error("Los lados a y b no son iguales");
  } else {
    const lado1TrianguloAlCuadrado = Math.pow(lado1Triangulo, 2);
    const baseTrianguloAlCuadrado = Math.pow(baseTriangulo, 2);
    const alturaTriangulo = Math.sqrt(
      lado1TrianguloAlCuadrado - baseTrianguloAlCuadrado / 4
    );
    return alturaTriangulo;
  }
}

function alturaTrianguloIsosceles(
  trianguloGrandeLadoA,
  trianguloGrandeLadoB,
  trianguloGrandeLadoBase
) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
    console.error("Los lados a y b no son iguales");
  } else {
    const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
    const trianguloPequenoLadoBase = trianguloGrandeLadoA;

    const trianguloPequenoLadoBCuadrado =
      trianguloPequenoLadoB * trianguloPequenoLadoB;
    const trianguloPequenoLadoBaseCuadrado =
      trianguloPequenoLadoBase * trianguloPequenoLadoBase;

    const trianguloPequenoLadoA = Math.sqrt(
      trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado
    );

    const trianguloGrandeAltura = trianguloPequenoLadoA;
    return trianguloGrandeAltura;
  }
}
