console.log("Dorea Pictures site loaded successfully!");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("To order this package, email doreapictures641@gmail.com or WhatsApp 0798123110");
  });
});
function scrollToContact() {
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
  }
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
    
    // Clear the form
    this.reset();
  });
  let testimonialIndex = 0;

function showTestimonials() {
  const testimonials = document.querySelectorAll('.testimonial');
  testimonials.forEach((el, i) => {
    el.classList.remove('active');
  });
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  testimonials[testimonialIndex].classList.add('active');
}

setInterval(showTestimonials, 5000); // Change every 5 seconds
// Burger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }
});
