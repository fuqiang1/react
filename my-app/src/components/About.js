import React from 'react';
import { connect } from 'react-redux'
// import List from './List.js'
// import { Link } from 'react-router-dom'
const About = (props) => {
  return (
    <div className="m-card">
      <div>
        姓名：{props.name}
      </div>
      <div>
        照片：{props.age}
      </div>
      <button onClick={props.show}>
        显示
      </button>
    </div>
  )
}
function mapStateToProps(state) {
  var info = state.about
  return {
    name: info.name,
    age: info.age
  }
}
function mapDispatchToProps(dispatch) {
  return {
    show () {
      dispatch ({
        type: 'SHOW_NAME'
      })
    }
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(About)
// export default About;