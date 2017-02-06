import fetch from 'isomorphic-fetch'
import { dropRight, foreIn, zip, flatten } from 'lodash'

export const resetLocation = () => ({
  type: 'RESET_LOCATION'
})

export const requestWeather = () => ({
  type: 'REQUEST_WEATHER'
})

export const receiveWeather = (zipCode, json) => {
  return {
    type: 'RECEIVE_WEATHER',
    forecasts: structureForecasts(json),
    displayLocation: json.current_observation.display_location.full,
    alerts: json.alerts,
    response: json.response,
    zipCode
  }
}

export const receiveError = (err) => {
  return {
    type: 'RECEIVE_ERROR',
    error: err
  }
}

const structureForecasts = (json) => {
  let simpleforecasts = dropRight(json.forecast.simpleforecast.forecastday, 3)
  simpleforecasts = simpleforecasts.map((f) => {
    return {
      conditions: f.conditions,
      day: `${f.date.weekday_short} ${f.date.monthname_short} ${f.date.day}`,
      humidity: f.avehumidity,
      wind: f.avewind.mph,
      high: f.high.fahrenheit,
      low: f.low.fahrenheit,
      icon: f.icon_url,
      percipitation: f.pop
    }
  })

  let rawTxtForecasts = dropRight(json.forecast.txt_forecast.forecastday, 6)
  let fullForecasts = []
  for (var i = 0; i < rawTxtForecasts.length; i += 2) {
    fullForecasts.push({
      ...simpleforecasts[i / 2],
      dayText: rawTxtForecasts[i],
      nightText: rawTxtForecasts[i + 1]
    })
  }
  return fullForecasts
}

export const fetchWeather = (zipCode) => {
  return dispatch => {
    dispatch(requestWeather())
    return fetch(`http://api.wunderground.com/api/219cb0f230ea16b0/forecast10day/alerts/conditions/q/${zipCode}.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(zipCode, json)))
      .catch(err => dispatch(receiveError(err)))
  }
}
