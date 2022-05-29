// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

// function onClickButtonPriceDiscount() {
//   const inputPrice = document.getElementById("InputPrice");
//   const priceValue = inputPrice.value;

//   const inputDiscount = document.getElementById("InputDiscount");
//   const discountValue = inputDiscount.value;

//   const precioConDescuento = calcularPrecioConDescuento(
//     priceValue,
//     discountValue
//   );

//   const resultP = document.getElementById("ResultP");
//   resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
// }

// -- Reto --
// Nuestros clientes estan muy felices de poder calcular el precio final de sus productos despues del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.

const coupons = [
  {
    name: "JuanDC_es_Batman",
    discount: 15,
  },
  {
    name: "pero_no_le_digas_a_nadie",
    discount: 30,
  },
  {
    name: "es_un_secreto",
    discount: 25,
  },
];

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  const userCoupon = coupons.find(function (coupon) {
    return coupon.name === couponValue;
  });

  if (!userCoupon) {
    alert("El cupon " + couponValue + " no es valido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
