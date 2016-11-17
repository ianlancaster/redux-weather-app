import fetch from 'isomorphic-fetch'

export const setLocation = zipCode => ({
  type: 'SET_LOCATION',
  zipCode
})

export const resetLocation = () => ({
  type: 'RESET_LOCATION'
})

export const requestWeather = () => ({
  type: 'REQUEST_WEATHER'
})

export const receiveWeather = (zipCode, json) => {
  return {
    type: 'RECEIVE_WEATHER',
    zipCode,
    json: json,
    forecast: json.forecast,
    todaysForecast: json.forecast.txt_forecast.forecastday[0].fcttext,
    highs: json.forecast.simpleforecast.forecastday.map(day => day.high),
    receivedAt: Date.now()
  }
}

export const fetchWeather = (zipCode) => {
  return dispatch => {
    dispatch(requestWeather())
    return fetch(`http://api.wunderground.com/api/219cb0f230ea16b0/forecast10day/q/${zipCode}.json`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveWeather(zipCode, json))
      )
  }
}
