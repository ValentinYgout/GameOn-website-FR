function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formClose = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal
formClose.addEventListener("click", closeModal)

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}




function validateElement(regex, element) {
  elementErrorMsg = document.getElementById(element.id + 'ErrorMsg')
  console.log(element.value)
  if (regex.test(element.value)) {
    elementResult = true;
    elementErrorMsg.innerHTML = "";
    return true;
  } else if (element.value === "") {
    elementErrorMsg.innerHTML = "Ce champ ne peut pas être vide.";
    elementResult = false;
    return false;
  } else {
    elementErrorMsg.innerHTML = "le format n'est pas correct";
    elementResult = false;
    return false;
  }
}
let checkBeforeSending = false;
let firstResult = false;
let lastResult = false;
let emailResult = false;
let quantityResult = false;
let birthdateResult = false;
let locationResult = false;
let cguResult = false;

nameRegex = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._-\s]{1,50}$/;
emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
quantityRegex = /^[0-9]{1,2}$/;
birthdateRegex = /^(19|20)\d{2}-\d{2}-\d{2}$/;
quantityRegex = /\b([0-9]|[1-9][0-9])\b/


let first = document.getElementById('first');
first.addEventListener('input', (event) => {
let firstTarget = event.target;
firstResult = validateElement(nameRegex, firstTarget);
})
let last = document.getElementById('last');
last.addEventListener('input', (event) => {
  LastTarget = event.target;
  lastResult = validateElement(nameRegex, LastTarget);
})
let email = document.getElementById('email');
email.addEventListener('input', (event) => {
  emailTarget = event.target;
  emailResult = validateElement(emailRegex, emailTarget);
})
let quantity = document.getElementById('quantity');
quantity.addEventListener('input', (event) => {
  quantityTarget = event.target;
  quantityResult = validateElement(quantityRegex, quantityTarget);
})
let birthdate = document.getElementById('birthdate');
birthdate.addEventListener('input', (event) => {
  birthdateTarget = event.target;
  birthdateResult = validateElement(birthdateRegex, birthdateTarget);
})



function validateRadio() {
  let RadioChecked = document.querySelector('input[name="location"]:checked')

  if (
    RadioChecked !== null
  ) {
    return true

  } else {
    return false
  }
}

function validateCgu() {
  let cguChecked = document.querySelector('input[id="checkbox1"]:checked')
  if (cguChecked !== null) {
    return true

  } else {
    return false
  }
}


function validateForm() {
  locationResult = validateRadio()
  cguResult = validateCgu()
  console.log(firstResult, lastResult, emailResult, birthdateResult, quantityResult, "radio", locationResult, 'cgu', cguResult)
  checkBeforeSending = firstResult && lastResult && emailResult && birthdateResult && quantityResult && locationResult && cguResult
  return checkBeforeSending;
}
let form = document.querySelector('form');
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm()
  if (validateForm()) {
    form.reset(),
      closeModal(),
      alert('Merci ! Votre réservation a été reçue.');
  } else {
    alert('form is not properly filled');
  }
})