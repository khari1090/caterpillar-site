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

function singleUseToken() {
  var form = document.getElementById('payment-form');
  form.submit(function(event) {
    // Disable the submit button to prevent repeated clicks:
    form.find('.submit').prop('disabled', true);

    // Request a token from Stripe:
    Stripe.card.createToken(form, stripeResponseHandler);

    // Prevent the form from being submitted:
    return false;
  });
};

function stripeResponseHandler(status, response) {
  // Grab the form:
  var form = document.getElementById('payment-form');

  if (response.error) { // Problem!

    // Show the errors on the form:
    form.find('.payment-errors').text(response.error.message);
    form.find('.submit').prop('disabled', false); // Re-enable submission

  } else { // Token was created!

    // Get the token ID:
    var token = response.id;

    // Insert the token ID into the form so it gets submitted to the server:
    form.appendChild(('<input type="hidden" name="stripeToken">').val(token));

    // Submit the form:
    form.get(0).submit();
  }
};
