var modalButton= document.querySelector(".btn-service");
var modal= document.querySelector(".search-hotels");
modal.classList.remove("modal-show");
modalButton.addEventListener("click", function(){modal.classList.toggle("modal-show");});
