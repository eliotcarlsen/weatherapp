var apiKey = require('./../.env').apiKey;

Weather = function(){
};

Weather.prototype.getHumidity = function(city, displayHumidity){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayHumidity(city, response.main.humidity);
  }).fail(function(error){
    $('#output-humidity').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
