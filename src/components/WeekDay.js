import React, { PropTypes } from 'react'
import { camelCase } from 'lodash'

const WeekDay = ({ forecast }) => {
  const { day, conditions, high, low, humidity, percipitation, wind, icon, nightText, dayText } = forecast
  const backgroundImage = camelCase(conditions)

  return (
    <div className={`weekday-card ${backgroundImage}`}>
      <div className='main-content'>
        <h3>{day}</h3>
        <section className='conditions'>
          <p><b>Conditions:</b></p>
          <img src={icon} alt={`${conditions} icon`} />
          <p>{conditions}</p>
        </section>
        <p><b>High:</b> {high} °F</p>
        <p><b>Low:</b> {low} °F</p>
        <p><b>Humidity:</b> {humidity}%</p>
        <p><b>Chance of percipitation:</b> {percipitation}%</p>
        <p><b>Wind:</b> {wind} MPH</p>
        <p><b>Day Forecast:</b></p>
        <p>{dayText.fcttext}</p>
        <p><b>Night Forecast:</b></p>
        <p> {nightText.fcttext}</p>
      </div>
    </div>
  )
}

WeekDay.propTypes = {
  forecast: PropTypes.object.isRequired
}

export default WeekDay
