// JavaScript code to open Istanbul, Turkey location in Apple Maps
function openIstanbulInAppleMaps() {
    const latitude = 41.0082; // Latitude for Istanbul
    const longitude = 28.9784; // Longitude for Istanbul
    const locationName = encodeURIComponent("Istanbul, Turkey");

    // Construct the Apple Maps URL
    const appleMapsURL = `https://maps.apple.com/?ll=${41.0082},${28.9784}&q=${"Istanbul, Turkey"}`;

    // Open the URL in a new window/tab
    window.open(appleMapsURL, "_blank");
}

// Call the function to open the location in Apple Maps
openIstanbulInAppleMaps();


//Function for slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Optional: Add automatic sliding
setInterval(() => {
  changeSlide(1);
}, 5000); // Change image every 5 seconds
