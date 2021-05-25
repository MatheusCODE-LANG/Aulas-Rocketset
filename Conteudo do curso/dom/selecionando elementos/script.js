// Manipulando conteudo

//textContents = altera o texto que antes 
//era "Meu Blog" para "Oi Matheus" caso colocado o sinal + concatena os dois h1
const element = document.querySelector("h1")
//onde altera
element.textContent = "Oi Matheus"
console.log(element.textContent)


//innerTextv = ele troca o texto interno do seu html
const element_ = document.querySelector('p')
//A tag p que antes estava escrita Matheus foi alterado para "eai Matheus" na exibição 
element_.innerText = "eai Matheus"


//innerHTML = para adicionar o html diretamente no javascript
const element__ = document.querySelector("p1")
element__.innerHTML = "Ola Devs <small>!!!</small>"


//Value = você pode atribuir valor ou encontra o valor
const entranda = document.querySelector('input')
entranda.value = "alguma coisa"


//Manipular o elemento atraves do Atributo
const header = document.querySelector("header")
header.setAttribute("id", "header")

//Como acima adicionamos o atributo ID ao header que agora fico um <header id=""
const headerID = document.querySelector("#header")
console.log(headerID)
//tambem posso remover o atributo adicionado
header.removeAttribute("id")