const initialState = {
  logInView: true,
  oneDayView: false,
  sevenDayView: false
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTIVATE_LOGINVIEW':
      return initialState

    case 'ACTIVATE_ONEDAYVIEW':
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
