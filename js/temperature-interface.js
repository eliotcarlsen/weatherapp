var Temperature = require('./../js/temperature.js').temperatureModule;

var displayTemperatureInF = function(city, temperatureData){
  $('#output-temperature').text("The temperature in " + city + " is " + temperatureData + " degrees F.");
};

var displayTemperatureInC = function(city, temperatureData){
  $('#output-temperatureC').text("The temperature in " + city + " is " + temperatureData + " degrees C.");
};

$(document).ready(function(){
  var currentTempObject = new Temperature();
  $('#weather-form').submit(function(event){
    event.preventDefault();
    var city = $('#city').val();
    currentTempObject.getTemperature(city, displayTemperatureInF, displayTemperatureInC);
  });
});
