//getElementById() = para selecionar algo pelo seletor id
const element = document.getElementById("blog-title")
console.log(element)


//getElementByClassName() = para selecionar algo pelo seletor class

const element_ = document.getElementsByClassName("outro")
console.log(element_)

//getElementByTagName() = para selecionar algo atravaes das tags

const element__ = document.getElementsByTagName("meta")
console.log(element__)


//querySelector() = buscador de elementos ele sempre pega o primeiro 

const element___ = document.querySelector("title")
console.log(element___)

//querySelectorAll()

const elements = document.querySelectorAll(".outro")
elements.forEach(el => console.log(elements))