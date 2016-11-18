import React, { PropTypes } from 'react'
import { camelCase } from 'lodash'

const WeekDay = ({ forecast }) => {
  const { day, conditions, high, low, humidity, percipitation, wind, icon, nightText, dayText } = forecast
  const backgroundImage = camelCase(conditions)

  return (
    <div className={`weekday-card ${backgroundImage}`}>
      <h3>{day}</h3>
      <section className='conditions'>
        <p><b>Conditions:</b></p>
        <img src={icon} />
        <p>{conditions}</p>
      </section>
      <p><b>High:</b> {high}</p>
      <p><b>Low:</b> {low}</p>
      <p><b>Humidity:</b> {humidity}</p>
      <p><b>Percepitation:</b> {percipitation}</p>
      <p><b>Wind:</b> {wind}</p>
      <p><b>Day Forecast:</b></p>
      <p>{dayText.fcttext}</p>
      <p><b>Day Forecast:</b></p>
      <p> {nightText.fcttext}</p>
    </div>
  )
}

WeekDay.propTypes = {
  forecast: PropTypes.object.isRequired
}

export default WeekDay
