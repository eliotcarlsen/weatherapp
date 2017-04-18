var Sunrise = require('./../js/sunrise.js').sunriseModule;

var displaySunrise = function(city, sunriseData){
  $('#output-sunrise').text("The sunrise in " + city + " is at " + sunriseData + " o'clock.");
};

$(document).ready(function(){
  var currentWeatherObject = new Sunrise();
  $('#weather-form').submit(function(event){
    event.preventDefault();
    var city = $('#city').val();

    currentWeatherObject.getSunrise(city, displaySunrise);
  });
});
