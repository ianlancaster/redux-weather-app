import React, { PropTypes } from 'react'

let SetLocation = ({ setLocation }) => {
  let input

  console.log(setLocation)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          setLocation(input.value)
          input.value = ''
        }}
      >
        <input ref={node => { input = node }} placeholder='Enter Zip Code' />
        <button type='submit' > Check Forecast </button>
      </form>
    </div>
  )
}

SetLocation.propTypes = {
  setLocation: PropTypes.func.isRequired
}

export default SetLocation
