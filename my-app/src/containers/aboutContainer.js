import { connect } from 'react-redux';
import About from '../components/About.js'
function mapStateToProps(state) {
  return {
    about: state.about // gives our component access to state through props.about
  }
}
  
function mapDispatchToProps(dispatch) {
  return {
    changeName () {
      dispatch({
        type: 'CHANGE_NAME',
        name: '葬爱'
      })
    },
    showDialog () {
      dispatch({
        type: 'SHOW_DIALOG',
      })
    }
  } // here we'll soon be mapping actions to props
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);