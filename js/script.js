var modalButton= document.querySelector(".btn-service");
var modal= document.querySelector(".search-hotels");
var sendButton= modal.querySelector(".search-btn");
var arrival = document.querySelector("#arrival-date");
var departure = document.querySelector("#departure-date");
var adult = document.querySelector("#quantity-adult-id");
var kids = document.querySelector("#quantity-kids-id");

modal.classList.remove("modal-show");

modalButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-show");
});

sendButton.addEventListener("click", function(evt) {
  modal.classList.remove("modal-error");
  modal.offsetWidth = modal.offsetWidth;

  if (!(arrival.value && departure.value && adult.value && kids.value)) {
    event.preventDefault();
    modal.classList.add("modal-error");
  }
});
