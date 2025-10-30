// Simple background slider (no controls)
(function(){
  var container = document.getElementById('hero-2042');
  if(!container) return;
  var slides = container.querySelectorAll('.bg-slide');
  if(!slides.length) return;
  var index = 0;
  // Preload images
  slides.forEach(function(s){
    var img = new Image();
    var url = s.style.backgroundImage.slice(5, -2);
    img.src = url;
  });
  setInterval(function(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 5000);
})();


