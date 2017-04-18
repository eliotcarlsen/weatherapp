var apiKey = require('./../.env').apiKey;

Temperature = function(){
};

Temperature.prototype.getTemperature = function(city, displayTemperatureInF, displayTemperatureInC){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
    var tempInFahrenheit = ((9/5 * (response.main.temp - 273)) + 32).toFixed(0);
    var tempInCelcius = (5/9 * (tempInFahrenheit - 32)).toFixed(0);
    displayTemperatureInF(city, tempInFahrenheit);
    displayTemperatureInC(city, tempInCelcius);
  }).fail(function(error){
    $('#output-temperature').text(error.responseJSON.message);
  });
};
exports.temperatureModule = Temperature;
