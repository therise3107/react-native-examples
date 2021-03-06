// var _ = require('lodash');
// var rootUrl = 'api.openweathermap.org/data/2.5/weather?APPID=ae88b52a2955707f9928846d77780b55' ;
//
// module.exports = function(latitude, longitude) {
//   var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
//
//   return fetch(url)
//     .then(function(response){
//       return response.json();
//     })
//     .then(function(json){
//       return {
//         city: json.name,
//         temperature: json.main.temp,
//         description: _.capitalize(json.weather[0].description)
//       }
//     });
// }

var _ = require('lodash');
var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=f557b20727184231a597c710c8be3106';


var kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'
};

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      return {
        city: json.name,
        temperature: json.main.temp ,
        description: _.capitalize(json.weather[0].description)
      }
    });
}
