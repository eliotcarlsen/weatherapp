var apiKey = require('./../.env').apiKey;
Sunrise = function(){
};

Sunrise.prototype.getSunrise = function(city, displaySunrise){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    var date = new Date(response.sys.sunrise * 1000);
    var timeInPST = date.toLocaleTimeString();
    displaySunrise(city, timeInPST);
  }).fail(function(error){
    $('#output-sunrise').text(error.responseJSON.message);
  });
};

exports.sunriseModule = Sunrise;
