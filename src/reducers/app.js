const initialState = {
  logInView: true,
  oneDayView: false,
  sevenDayView: false
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_LOCATION':
      return initialState

    case 'SET_LOCATION':
      return {
        logInView: false,
        oneDayView: true,
        sevenDayView: false
      }

    case 'ACTIVATE_SEVENDAYVIEW':
      return {
        logInView: false,
        oneDayView: false,
        sevenDayView: true
      }
    default:
      return state
  }
}

export default app
