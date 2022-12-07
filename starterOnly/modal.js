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
  document.querySelector('.formSent').style.display = "none"
  document.querySelector('.formSent>span').style.display = "none"
  document.querySelector('form').style.display = "block"
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

// Au moins deux caractères
nameRegex = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._-\s]{2,50}$/;

//Regex email simple
emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//format  AAAA-MM-DD  dont année 1900+
birthdateRegex = /^(19|20)\d{2}-\d{2}-\d{2}$/;

//0-99
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
  return document.querySelector('input[name="location"]:checked') !== null;
}

function validateCgu() {
  return document.querySelector('input[id="checkbox1"]:checked') !== null;
}


function validateForm() {
  locationResult = validateRadio();
  cguResult = validateCgu()

  return firstResult && lastResult && emailResult && birthdateResult && quantityResult && locationResult && cguResult;
}

let form = document.querySelector('form');
form.addEventListener("submit", function (e) {
  e.preventDefault();

  isFormValid = validateForm()
  if (isFormValid) {
    form.reset(),
    document.querySelector('.formSent').style.display = "block"
    document.querySelector('.formSent>span').style.display = "block"
    document.querySelector('form').style.display = "none"
    const formClosing = document.querySelector(".closing")
    formClosing.addEventListener("click", closeModal)

   firstResult = false;
    lastResult = false;
    emailResult = false;
    quantityResult = false;
    birthdateResult = false;
    locationResult = false;
    cguResult = false;

  } else {
    !locationResult
      ?
      document.getElementById('locationErrorMsg').innerHTML = "Vous devez selectionner une ville" :
      document.getElementById('locationErrorMsg').innerHTML = ""

      !cguResult ?
      document.getElementById('cguErrorMsg').innerHTML = "Vous devez cocher les cgu" :
      document.getElementById('cguErrorMsg').innerHTML = ""









  }
})