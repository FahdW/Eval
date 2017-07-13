$(function () {
  var currentDay = moment().format('dddd');
  var weather;
  var day=0; //iterator to retreive from AJAX request
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=Toronto&mode=json&units=metric&cnt=12&appid=581c8e26bf8c5f212eb94e864c4f59d9",
    success: function (result) {
      weather = result.list;
      $('#weather-forecast > .weather-container').each(function () {
        day == 0 || $(this).children('p.weather-day').text(currentDay);
        $(this).children('p.weather-high').text("High " + Math.round(weather[day].temp.max));
        $(this).children('p.weather-low').text("Low " + Math.round(weather[day].temp.min));
        currentDay = moment(currentDay, 'ddd').add(1, 'days').format('ddd');
        day++;
      });
    }
  });
});