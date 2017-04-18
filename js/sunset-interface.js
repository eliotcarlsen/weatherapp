var Sunset = require('./../js/sunset.js').sunsetModule;

var displaySunset = function(city, sunsetData){
  $('#output-sunset').text("The sunset in " + city + " is at " + sunsetData + " o'clock.");
};

$(document).ready(function(){
  var currentWeatherObject = new Sunset();
  $('#weather-form').submit(function(event){
    event.preventDefault();
    var city = $('#city').val();
    currentWeatherObject.getSunset(city, displaySunset);
  });
});
