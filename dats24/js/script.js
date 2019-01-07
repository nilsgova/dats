// navbar toggle

let mainNav = document.getElementById('js-nav');

let navBarToggle = document.getElementById('js-navbar-toggle');



navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');

});



// view more

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("card-btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Leer Meer";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Lees Minder";
        moreText.style.display = "inline";
    }
}