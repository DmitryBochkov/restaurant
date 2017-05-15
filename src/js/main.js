//= ../libs/tiny-slider/dist/tiny-slider.js
//= ../libs/zenscroll/zenscroll-min.js
//= backtotop.js

document.body.classList.remove('no-js');

var preloader = document.getElementById('preloader');
preloader.style.display = 'block';
window.addEventListener('load', function() {
  preloader.className += ' fade';

  setTimeout(function(){
    preloader.style.display = 'none';

  }, 700);

});

// make the navbar height less and color dark on sroll
window.addEventListener('scroll', function(e) {
  var scrollPos = document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollPos > 62) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
});
document.addEventListener("DOMContentLoaded", function(event) {

  // toggle off-canvas menu
  var sideNavToggle = document.getElementById('sideNavToggle');
  var pageOverlay = document.getElementById('pageOverlay');

  sideNavToggle.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.toggle('off-canvas');
    sideNavToggle.classList.toggle('is-active');
  });
  pageOverlay.addEventListener('click', function(e) {
    if (document.body.classList.contains('off-canvas')) {
      document.body.classList.remove('off-canvas');
      sideNavToggle.classList.remove('is-active');
    }
  });


  //setup services-slider
  var serviceSlider = tns({
     container: document.querySelector('#services-slider'),
     items: 1,
     nav: false,
     controls: false,
     responsive: {
      600: 2,
      900: 3
    }
   });

   var servicesPrev = document.querySelector('.prev--services');
   var servicesNext = document.querySelector('.next--services');

   servicesPrev.onclick = function () {
    serviceSlider.goTo('prev');
  };
   servicesNext.onclick = function () {
    serviceSlider.goTo('next');
  };

  //setup Specialities gallery
  var specialitiesGallery = tns({
     container: document.querySelector('.specialties__items'),
     items: 1,
     navContainer: document.querySelector('.specialties__thumbs'),
     controlsContainer: document.querySelector('.specialties__controls')
   });

     document.querySelector('.specialties__items').onclick = function () {
      specialitiesGallery.goTo('next');
    };

   //setup Specialities gallery
  var specialitiesThumsGallery = tns({
     container: document.querySelector('.specialties__thumbs'),
     items: 3,
     nav:false,
     controlsContainer: document.querySelector('.specialties__thumbs-controls'),
     loop: false,
     gutter: 5,
     responsive: {
      450: 5
    }
   });

   //setup testimonials slider
  var testimonialsSlider = tns({
     container: document.querySelector('.testimonials__slider'),
     items: 1,
     nav: true,
     speed: 500,
     controls: false,
     loop: true,
     autoplay: true,
     autoplayButton: false,
     autoplayTimeout: 8000,
     mouseDrag: true
   });

   //setup clients slider
  var clientsSlider = tns({
     container: document.querySelector('.clients__slider'),
     items: 2,
     speed: 500,
     nav: false,
     gutter: 20,
     controlsContainer: document.querySelector('.clients__slider-controls'),
     loop: true,
     autoplay: true,
     autoplayButton: false,
     mouseDrag: true,
     responsive: {
      480: 3,
      768: 4
    }
   });

  equalHeights('service__content');
  equalContentAndImg();

});



// Make all service contents in the service equal height
function equalHeights(className) {
    var headings = document.getElementsByClassName(className);
    var tallest = 0;

  // Loop over matching divs
  for (i = 0; i < headings.length; i++) {
    headings[i].style.height = 'auto';
    var elem = headings[i];
    var elemHeight = elem.offsetHeight;
    tallest = (elemHeight > tallest ? elemHeight : tallest);
  }

  for (i = 0; i < headings.length; i++) {
    headings[i].style.height = tallest + "px";
  }
}

// set the service-img the same height as the service content
function equalContentAndImg() {
  var servicesContents = document.querySelectorAll('.service__content');
  var contentHeight = servicesContents[0].offsetHeight;
  var servicesImgs = document.querySelectorAll('.service__img');
  for (var i = 0; i < servicesImgs.length; i++) {
    servicesImgs[i].style.height = contentHeight + 'px';
  }
}

window.addEventListener('resize', function() {
  equalHeights('service__content');
  equalContentAndImg();
});
