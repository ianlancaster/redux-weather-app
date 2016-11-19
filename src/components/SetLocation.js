import React, { PropTypes } from 'react'

let SetLocation = ({ fetchWeather }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          fetchWeather(input.value)
          input.value = ''
        }}
      >
        <input
          type='text'
          ref={node => { input = node }}
          placeholder='Enter Zip Code or City, ST'
          aria-label='location-input'
        />
        <button type='submit' > Check Forecast </button>
      </form>
    </div>
  )
}

SetLocation.propTypes = {
  fetchWeather: PropTypes.func.isRequired
}

export default SetLocation
