//Carne == 400g por pessoa --> + de 6h == 650
//Cerveja == 1200ml por pessoa --> + 6h == 2000ml
//Refri/Água == 1000ml por pessoa --> + 6h == 1500ml

function Calcular() {
  let qntAdultos = document.querySelector('#qntAdultos')
  let qntCriancas = document.querySelector('#qntCriancas')
  let numeroHoras = document.querySelector('#numeroHoras')

  let carne
  let cerveja
  let agua

  if (numeroHoras.value.length == 0) {
    alert('Digite a quantidade de horas')
  } else {
    if (numeroHoras.value >= 6) {
      carne = 650 + qntAdultos.value + (650 / 2 + qntCriancas.value)
      cerveja = 2000 + qntAdultos.value
      agua = 1500 + qntAdultos.value + (1500 / 2 + qntCriancas.value)
    } else {
      carne = 400 + qntAdultos.value + (400 / 2 + qntCriancas.value)
      cerveja = 1200 + qntAdultos.value
      agua = 1000 + qntAdultos.value + (1000 / 2 + qntCriancas.value)
    }
  }
}
