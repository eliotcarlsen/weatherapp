var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData){
  $('#output-humidity').text("The humidity in " + city + " is " + humidityData + "%");
};

$(document).ready(function(){
  var currentWeatherObject = new Weather();
  $('#weather-form').submit(function(event){
    event.preventDefault();
    var city = $('#city').val();
    currentWeatherObject.getHumidity(city, displayHumidity);
  });
});
