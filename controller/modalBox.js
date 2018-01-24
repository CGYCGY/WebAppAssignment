// the modal
var modal = document.getElementById("myModal");

// button that link to the modal
var btn = document.getElementById("dlt");

// yes button
var yesyes = document.getElementsByClassName("btnlarger")[0];

// close and no button
var span = document.getElementsByClassName("close")[0];
var nono = document.getElementsByClassName("no, btnlarger")[0];

// click delete,modal will be modal
btn.onclick = function() {
    modal.style.display = "block";
};

// click yes and this will happen
yesyes.onclick = function() {

};

// click close or no or outside the box, the modal will close
span.onclick = function() {
    modal.style.display = "none";
};

nono.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};