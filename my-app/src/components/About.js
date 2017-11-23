import React from 'react';
import List from './List.js'
import { Link } from 'react-router-dom'
class About extends React.Component {
  componentWillMount(){ // run before the render method
    this.setState({ // add an array of strings to state.
      list: ['thing1', 'thing2', 'thing3']
    })
    console.log(this)
  };
  render () {
    return (
      <div>
        <List listItems={this.state.list} />
        <div>
            <Link to="/">I'm about！！！</Link>
        </div>
      </div>
    )
  }
}
export default About;