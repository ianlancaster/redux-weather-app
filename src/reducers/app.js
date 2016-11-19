const initialState = {
  logInView: true,
  oneDayView: false,
  sevenDayView: false
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_LOCATION':
      return initialState

    case 'REQUEST_WEATHER':
      return {
        ...state,
        loading: true
      }

    case 'RECEIVE_WEATHER':
      return {
        logInView: false,
        oneDayView: false,
        sevenDayView: true,
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

    case 'RECEIVE_ERROR':
      return {
        ...initialState,
        error: action.error
      }

    default:
      return state
  }
}

export default app
