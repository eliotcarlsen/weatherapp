var apiKey = require('./../.env').apiKey;
Sunset = function(){
};

Sunset.prototype.getSunset = function(city, displaySunset){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    var date = new Date(response.sys.sunset * 1000);
    var timeInPST = date.toLocaleTimeString();
    displaySunset(city, timeInPST);
  }).fail(function(error){
    $('#output-sunset').text(error.responseJSON.message);
  });
};

exports.sunsetModule = Sunset;
