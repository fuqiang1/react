import React,{Component} from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './containers/aboutContainer';
import Input from './components/Input';
class App extends Component{
  constructor(props, context){
    super(props, context);
    // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return (
      <Router>
        <div>
          {/**
           * 这里可以公共的样式,比如 头部, 尾部, 等.
           */}
           header
          {/*结合Switch组件可以匹配到都匹配不到的路劲,404等...*/}
          <Switch>
            {/* <Route path='/' exact component={AppContainer}/> */}
            <Route path='/about'  component={About}/>
            <Route path='/input'  component={Input}/>
            {/* </Route>  */}
            {/* <Route component={NotFound}/> */}
          </Switch>
          footer
        </div>
      </Router>
    );
  }
}
export default App;
