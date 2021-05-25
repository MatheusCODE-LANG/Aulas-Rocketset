const buttonOpenModal = document.getElementById("openModel")

const modalWrapper = document.querySelector(".modal-wrapper")

buttonOpenModal.onclick = function(){
    modalWrapper
    .classList
    .remove("invisible")
}

document.addEventListener("keydown", function(event){
    const isEsckey = eve.KEY ==="Escape"

    if(isEsckey){
        modalWrapper.classList.add("invisible")
    }
})