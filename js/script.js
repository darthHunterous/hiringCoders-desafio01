const form = document.getElementById("form");
const nameInput = document.getElementById("nome");
const emailInput = document.getElementById("email");

emailInput.addEventListener("input", () => {
  if (this.value) {
    this.value = this.value.toLowerCase();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nome = nameInput.value;
  let email = emailInput.value;

  let data = {
    nome,
    email,
  };
  let convertedData = JSON.stringify(data);

  localStorage.setItem(`client${localStorage.length+1}`, convertedData);

  const signupCard = document.getElementById("signup-card");
  signupCard.innerHTML = "<h1>Email cadastrado com sucesso!</h1>";
});

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let blackFridayDate = "Nov 26, 2021 00:00:00",
    countDown = new Date(blackFridayDate).getTime(),
    x = setInterval(function () {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "A Black Friday começou!";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
    }, 0)
}());

// Código que gerencia o Slideshow automatizado abaixo
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 4000);
}