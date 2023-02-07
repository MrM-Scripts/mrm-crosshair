$(function(){
  xHair = {}
  xHair.show = function(data){
    $('.crosshair-wrapper').fadeIn(0);
  };

  xHair.hide = function() {
    $(".crosshair-wrapper").fadeOut();
  };
  window.addEventListener('message', function(event) {
    switch(event.data.display) {
      case 'crosshairShow':
				xHair.show(event.data);
      break;
      case 'crosshairHide':
				xHair.hide(event.data);
      break;
    }
  });
});