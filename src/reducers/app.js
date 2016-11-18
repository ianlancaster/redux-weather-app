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
        oneDayView: false,
        sevenDayView: true
      }

    case 'ACTIVATE_SEVENDAYVIEW':
      return {
        logInView: false,
        oneDayView: false,
        sevenDayView: true
      }

    case 'RECEIVE_WEATHER':
      return {
        ...state,
        forecasts: [action.forecasts],
        zipCode: [action.zipCode],
        displayLocation: action.displayLocation,
        alerts: action.alerts,
        response: action.response,
        __persist: state => {
          const { zipCode, logInView, oneDayView, sevenDayView } = state
          return {
            zipCode,
            logInView,
            oneDayView,
            sevenDayView
          }
        }
      }

    default:
      return state
  }
}

export default app
