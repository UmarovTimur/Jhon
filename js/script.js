
if (location.href == "http://localhost:3000/blog.html") {
   console.log(location.href);
}
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('_active');
      $('body').toggleClass('lock')
   });
});



// Адаптивгое добавление классов

$(window).resize(function (event) {
   adaptive__function();
});

function headerCLassMove(w, h) {
   if (w < 768) {

   }
}

// adaptive__function
function adaptive__function() {
   const windowInnerWidth = window.innerWidth;
   const windowInnerHeight = window.innerHeight;
   headerCLassMove(windowInnerWidth, windowInnerHeight);
}
adaptive__function();




function ibg() {
   let ibg = document.querySelectorAll("._ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();

function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});