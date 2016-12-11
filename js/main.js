// When the user clicks the button, open the modal
function openModal(){
  document.getElementById('myModal').style.display = "block";
  document.getElementById('modal-1').style.display = "block";
  document.getElementById('modal-email').value = "";
  document.getElementById('modal-2').style.display = "none";
  document.getElementById('modal-3').style.display = "none";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = "none";
  }
}

function submitEmail(){
  checkInput();
}

function checkInput(){
  var input = document.getElementById('modal-email');
  if (input.value == null || input.value == ""){
    input.style.backgroundColor = "#ffdad3";
    input.style.border = "1px solid tomato";
    return;
  }
  else {
    input.style.backgroundColor = "";
    input.style.border = "";
    payment();
    return;
  }
}

function payment(){
  document.getElementById('modal-1').style.display = "none";
  document.getElementById('modal-2').style.display = "block";
  document.getElementById('modal-3').style.display = "none";
}

function creditCard(){
  document.getElementById('modal-1').style.display = "none";
  document.getElementById('modal-2').style.display = "none";
  document.getElementById('modal-3').style.display = "block";
}
