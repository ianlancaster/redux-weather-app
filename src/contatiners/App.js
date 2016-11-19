import { connect } from 'react-redux'
import AppComponent from '../components/App'

const mapStateToProps = (state) => {
  console.log('state', state)
  const { logInView, oneDayView, sevenDayView } = state.app
  return {
    logInView,
    oneDayView,
    sevenDayView
  }
}

const mapDispatchToProps = ({

})

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export default App
