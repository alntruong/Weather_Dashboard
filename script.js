document.getElementById('searchBtn')
addEventListener('click', event => {
 event.preventDefault()
 const cityElem = document.getElementById('inputValue').value
 axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityElem}&zip=${cityElem},001&units=imperial&appid=0ac22548ca215f589c16ceea4ead9bfc`)
  .then(res => {
    const weather = res.data
    console.log(weather) 
    document.getElementById('cityName').innerHTML=` 
    <h2>${weather.name}</h2>
    <h4>Temperature: ${weather.main.temp}°F</h4>
    <h4>Humidity: ${weather.main.humidity}%</h4>
    <h4>Wind Speed: ${weather.wind.speed}km/h</h4>
    `
   })
   .catch (err => console.log(err))
})

axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=0ac22548ca215f589c16ceea4ead9bfc`)
 .then(res => {
  const uvIndex = res.data
  console.log(uvIndex)
  document.getElementById('cityName').
  innerHTML=`
  <h4> ${uvIndex}
  `
 })


