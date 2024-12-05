  // Lê os números inseridos pelo usuário
  var numero1 = parseFloat(prompt("Digite o primeiro número:"))
  var numero2 = parseFloat(prompt("Digite o segundo número:"))

  // Verifica qual número é o maior
  if (numero1 > numero2) {
      alert("O maior número é: " + numero1)
  } else if (numero2 > numero1) {
      alert("O maior número é: " + numero2)
  } else {
      alert("Os dois números são iguais.")
  }
