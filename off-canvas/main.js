(function() {

  var mainPanel = document.getElementById('mainPanel');
  var sidePanel = document.getElementById('sidePanel');

  var hammerPanel = new Hammer(mainPanel);
  var hammerSide = new Hammer(sidePanel);

  /* Navegador Mobile */
  hammerPanel.on('swiperight', onSwipe);

  /* Navegador Desktop */
  mainPanel.addEventListener('click', onSwipe)

  function onSwipe() {
    sidePanel.classList.toggle('open');
  }
  
}());