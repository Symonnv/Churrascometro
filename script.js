let qntAdultos = document.querySelector('#qntAdultos')
let qntCriancas = document.querySelector('#qntCriancas')
let numeroHoras = document.querySelector('#numeroHoras')
let resultado = document.querySelector('#resultado')

function Calcular() {
  let adultos = qntAdultos.value
  let criancas = qntCriancas.value
  let duracao = numeroHoras.value

  if (duracao.length == 0) {
    alert('Digite a quantidade de horas')
  } else {
    let qntCarne = carne(duracao) * adultos + (carne(duracao) / 2) * criancas
    let qntCerveja = cerveja(duracao) * adultos
    let qntAgua = agua(duracao) * adultos + (agua(duracao) / 2) * criancas

    resultado.style.cssText = 'margin-top:10px'
    resultado.innerHTML = `<p>${qntCarne / 1000}Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntCerveja / 355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntAgua / 2000)} garrafas de água</p>`
  }
}
function carne(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}
function cerveja(duracao) {
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}
function agua(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}
