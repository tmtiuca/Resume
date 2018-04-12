var mobileAndTabletcheck = function () {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function () {
  if(mobileAndTabletcheck()) {
    $('video').attr("controls", "true");
  } else {
    $('video').hover(function toggleControls() {
      if (this.hasAttribute("controls")) {
        this.removeAttribute("controls");
      } else {
        this.setAttribute("controls", "controls");
      }
    });
  }

  $('video').click(function(){this.paused?this.play():this.pause();});
  $('video').dblclick(function(){
    console.log("here");
    this.webkitRequestFullScreen();}
  );
});
