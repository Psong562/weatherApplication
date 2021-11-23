// const renderCities = () => {
//   document.getElementById('cities').innerHTML = ''
//   quotes.forEach((quote, i) => {
//     const citiesElem = document.createElement('li')
//     citiesElem.className = 'list-group-item d-flex justify-content-between align-items-start'
//     citiesElem.innerHTML = `
//           <div class="ms-2 me-auto saved">
//             <div class="fw-bold">"${city}"</div>
//           </div>
//           <button class="btn btn-danger delete" data-index="${i}">X</button>
//         `
//     document.getElementById('cities').append(quoteElem)
//   })
// }



document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  const city = document.getElementById('city').value

  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=c42b7da846283bd3246b3890b49b6005`)
    .then(res => {
      console.log(res)
      const citySearch = res.data

      document.getElementById('firstDay').innerHTML = `
            <h3>${citySearch.city.name} 
            </br> ${citySearch.list[0].dt_txt} </h1>
            <h6>Weather: ${citySearch.list[0].main.temp}°F </h6>
            <h6>Humidity: ${citySearch.list[0].main.humidity}%</h6>
            <h6>Speed: ${citySearch.list[0].wind.speed}mph</h6>
            `

      document.getElementById('dayTwo').innerHTML = `
            <h8>${citySearch.list[8].dt_txt} </h8>
            <h8>Weather: ${citySearch.list[8].main.temp}°F</h8>
            <h8>Humidity: ${citySearch.list[8].main.humidity}%</h8>
            `
      document.getElementById('dayThree').innerHTML = `
            <h6>${citySearch.list[16].dt_txt} </h1>
            <h8>Weather: ${citySearch.list[16].main.temp}°F</h8>
            <h8>Humidity: ${citySearch.list[16].main.humidity}%</h8>
            `
      document.getElementById('dayFour').innerHTML = `
            <h6>${citySearch.list[24].dt_txt} </h1>
            <h8>Weather: ${citySearch.list[24].main.temp}°F</h8>
            <h8>Humidity: ${citySearch.list[24].main.humidity}%</h8>
            `
      document.getElementById('dayFive').innerHTML = `
            <h6>${citySearch.list[32].dt_txt} </h1>
            <h8>Weather: ${citySearch.list[32].main.temp}°F</h8>
            <h8>Humidity: ${citySearch.list[32].main.humidity}%</h8>
            `
      document.getElementById('daySix').innerHTML = `
            <h6>${citySearch.list[39].dt_txt} </h1>
            <h8>Weather: ${citySearch.list[39].main.temp}°F</h8>
            <h8>Humidity: ${citySearch.list[39].main.humidity}%</h8>
            `




      document.getElementById('city').value = ''



    })
    .catch(err => console.log(err))
})

// Save img for later use
//   <img src="https://openweathermap.org/img/w/${citySearch.list[0].weather[0].icon}.png" class="card-img-top icon" alt="weather icon">