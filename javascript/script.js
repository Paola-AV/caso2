const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});

// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById('alarma');

// Get the <span> element that closes the modal
var modalClose = document.getElementById('modalClose');
var body = document.getElementById('body');
var elemento1 = document.getElementById('elemento1');
var elemento2 = document.getElementById('elemento2');

// When the user clicks the button, open the modal 
function openModal() {
    modal.style.display = "flex";
    console.log("abierto");
    modal.style.backgroundColor="rgba(0,0,0,0.4)";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
    modal.style.backgroundColor = "rgba(0,0,0,0)";
}

btn.addEventListener("click", openModal);

modalClose.addEventListener("click", closeModal);
