import React, { PropTypes } from 'react'

const WeekDay = ({ forecast }) => {
  console.log(forecast)
  const { day, conditions, high, low, humidity, percipitation, wind, icon, nightText, dayText } = forecast

  return (
    <div className='weekday-card'>
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
