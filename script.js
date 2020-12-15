//menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//another side
const cards = document.querySelectorAll(".cards__single");
const back = document.querySelectorAll(".cards__back");

function flipCard() {
    this.classList.toggle("flip")
}
cards.forEach((card) => card.addEventListener("click", flipCard));

cards.forEach((card) => card.addEventListener('mouseleave', function() {
    this.classList.remove("flip");
}));