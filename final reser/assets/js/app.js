document.addEventListener("DOMContentLoaded", function () {
  var location = document.querySelector(".location > .dropdown-btn");
  var locationMenu = document.querySelector(".location > .dropdown-menu");

  location.addEventListener("click", function () {
    locationMenu.classList.toggle("visible");
  });
    
     var hall = document.querySelector(".hall > .dropdown-btn");
     var hallMenu = document.querySelector(".hall > .dropdown-menu");

     hall.addEventListener("click", function () {
       hallMenu.classList.toggle("visible");
     });
    
    
      var capacity = document.querySelector(".capacity > .dropdown-btn");
      var capacityMenu = document.querySelector(".capacity > .dropdown-menu");

      capacity.addEventListener("click", function () {
        capacityMenu.classList.toggle("visible");
      });
});












// testimonial carousel




// faq collapse
var faqMainItems = document.querySelectorAll(".faq-main");
var faqDropdown = document.querySelector(".faq-dropdown");

faqMainItems.forEach((faqMain) => {
  faqMain.addEventListener("click", function () {
    faqDropdown.classList.toggle("show");
  });
});
