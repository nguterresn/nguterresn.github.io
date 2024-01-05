// https://bulma.io/documentation/components/navbar/
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

window.onload = function() {
  enableInlineLatex();
  resizeImages();
};

function resizeImages() {
  // Ignore for mobile.
  if (screen.width < 500) { return }
  var images = document.getElementsByTagName("img");
  console.log(images);
  for (let index = 0; index < images.length - 1; index++) {
    var image = images.item(index);
    var width = image.width;
    var height = image.height;
    const ratio = width / height;
    if (ratio != null && width != '30' && height != '30') {
      if (ratio < 2.5 && ratio >= 2.25) {
        image.style.maxWidth = '700px';
      } else if (ratio < 2.25 && ratio >= 2.0) {
        image.style.maxWidth = '650px';
      } else if (ratio < 2.0 && ratio >= 1.5) {
        image.style.maxWidth = '600px';
      } else if (ratio < 1.5 && ratio >= 1.3) {
        image.style.maxWidth = '500px';
      } else if (ratio < 1.3 && ratio >= 1.15) {
        image.style.maxWidth = '450px';
      } else if (ratio < 1.15 && ratio >= 1.0) {
        image.style.maxWidth = '400px';
      } else if (ratio < 1.0 && ratio >= 0.8) {
        image.style.maxWidth = '350px';
      } else if (ratio < 0.8) {
        image.style.maxWidth = '300px';
      }
    }
  }
}

function enableInlineLatex() {
  // Enable inline latex formatting
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      processEscapes: true
    }
  });
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

