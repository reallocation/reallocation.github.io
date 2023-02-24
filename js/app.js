//
// Menu sticky
//
function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}
window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

//tobii lightbox
//
//const tobii = new Tobii();

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// RealLocation
function postFunction(e) {

  e.preventDefault();
  e.target.querySelector('button[type="submit"]').classList.add('disabled');
  e.target.querySelector('.text-uppercase').classList.add('d-none');
  e.target.querySelector('.spinner-border').classList.remove('d-none');


  fetch('https://script.google.com/macros/s/AKfycbxumQtbFluRFxhpp4GM370FrR__RvCcWIyJm4sgF6sI5emV2rppTy2fryenQIo2YwydTw/exec', {
      method: 'POST',
      body: new FormData(e.target)
  })
      .then(response => {
          e.target.querySelector("[id*='message-status']").innerHTML = "message sent!";
      })
      .catch(error => {
          e.target.querySelector("[id*='message-status']").innerHTML = "error sending message!";
      })
      .finally(() => {
          e.target.reset();
          e.target.querySelector('.spinner-border').classList.add('d-none');
          e.target.querySelector('.text-uppercase').classList.remove('d-none');
          e.target.querySelector('button[type="submit"]').classList.remove('disabled');
          setTimeout(function () {
              e.target.querySelector("[id*='message-status']").innerHTML = "&nbsp;";
          }, 5000);
      });
};

document.getElementById('form-register').addEventListener("submit", postFunction);
document.getElementById('form-contact').addEventListener("submit", postFunction);

const useCases = ['regulatory geoblocking', 'GDPR compliance', 'Crypto / Financial Services KYC', 'Zero Trust Network Authentication (ZTNA)', 'Sneaker Bot defence', 'content localization', 'streaming media', 'streaming video'];
var useCaseP = 0;

document.getElementById('use-case').addEventListener('animationend', function (e) {

  e.target.innerHTML = useCases[useCaseP++] + ".";
  useCaseP = useCaseP % useCases.length;
  e.target.style.animation = 'none';
  e.target.offsetHeight;
  e.target.style.animation = '';
})
