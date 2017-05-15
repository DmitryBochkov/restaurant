// define vars
var backToTopBtn = document.getElementById('toTopBtn'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos,
    winHeight,
    isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// get window height
winHeight = window.innerHeight || docElem.clientHeight
if (winHeight !== 'undefined') {
  offset = winHeight;
}
// add event listeners for scroll and click
window.addEventListener('scroll', function(e) {
  scrollPos = body.scrollTop || docElem.scrollTop;

  backToTopBtn.className = (scrollPos > offset) ? 'active top-btn' : 'top-btn';
});

// add smooth scrolling via zenscroll
backToTopBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // if (isFirefox) {
  //   docElem.scrollTop = 0;
  // } else {
  //   body.scrollTop = 0;
  // }
  zenscroll.toY(0);

});
