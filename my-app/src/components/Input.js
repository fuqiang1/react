import React from 'react';
import List from './List.js'
class Input extends React.Component {
  componentWillMount(){ // run before the render method
    this.setState({ // add an array of strings to state.
      list: ['thing1', 'thing2', 'thing3']
    })
  };
  render () {
    return (
      <div>
        <List listItems={this.state.list} />
        <div>
          input
        </div>
      </div>
    )
  }
}
export default Input;