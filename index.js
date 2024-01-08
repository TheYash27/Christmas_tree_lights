/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/
const redLights = document.querySelectorAll('.red');
const blueLights = document.querySelectorAll('.blue');

let isRedOn = true;

function toggleLights() {
  redLights.forEach(light => light.classList.toggle('lights-on', isRedOn));
  blueLights.forEach(light => light.classList.toggle('lights-on', !isRedOn));

  isRedOn = !isRedOn;
}

setInterval(toggleLights, 800);
 
