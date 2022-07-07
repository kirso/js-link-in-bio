
window.addEventListener {
'DOMContentLoaded', () => {
  var setVanta = ()=>{
  if (window.VANTA) window.VANTA.BIRDS({
    el: #vanta,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: #1b1e28,
    color1: #5ee4c7,
    color2: #ff0077,
    birdSize: 0.80,
    wingSpan: 28.00,
    separation: 38.00,
    alignment: 31.00,
    cohesion: 57.00
  })
  }
  _strk.push(function() {
    setVanta()
    window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
  })
}
}

