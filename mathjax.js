window.onload = function() {
  // Enable inline latex formatting
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      processEscapes: true
    }
  });
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
};

