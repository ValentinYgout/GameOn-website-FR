
let numberInput =  document.querySelector("#quantity")
//if keycode 69 key "e" is pressed, do not type
numberInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 69 || e.which === 69) {
        e.preventDefault();
        return false;
    }
    
});







