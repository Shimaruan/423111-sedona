var modalButton= document.querySelector(".btn-service");
var modal= document.querySelector(".search-hotels");
var form=  modal.querySelector(".search-hotels-form");
var arrivalDate= modal.querySelector("[name= arrival-date]");
var departureDate= modal.querySelector("[name= departure-date]");
var quantityAdult= modal.querySelector("[name= quantity-adult]");
var quantityKids= modal.querySelector("[name= quantity-kids]");

modal.classList.remove("modal-show");
modalButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-show");
});
form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !quantityAdult.value || !quantityKids.value){
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth= modal.offsetWidth;
    modal.classList.add("modal-error");
    }
});


