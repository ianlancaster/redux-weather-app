import React, { PropTypes } from 'react'
import { camelCase } from 'lodash'

const WeekDay = ({ forecast }) => {
  const { day, conditions, high, low, humidity, percipitation, wind, icon, nightText, dayText } = forecast
  const backgroundImage = camelCase(conditions)
  console.log(backgroundImage)

  return (
    <div className={`weekday-card ${backgroundImage}`}>
      <p>{day}</p>
      <p>Conditions: {conditions}</p>
      <img src={icon} />
      <p><b>High:</b> {high}</p>
      <p>Low: {low}</p>
      <p>Humidity: {humidity}</p>
      <p>Percepitation: {percipitation}</p>
      <p>Wind: {wind}</p>
      <p>Day Forecast: {dayText.fcttext}</p>
      <p>Day Forecast: {nightText.fcttext}</p>
    </div>
  )
}

WeekDay.propTypes = {
  forecast: PropTypes.object.isRequired
}

export default WeekDay
