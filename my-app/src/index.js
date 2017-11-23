import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/About';
import Input from './components/Input';
// 路由配置说明（你不用加载整个配置，
// 只需加载一个你想要的根路由，
// 也可以延迟加载这个配置）。
const BasicExample = () => (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/input" component={Input}/>
      </div>
    </BrowserRouter>
  )
console.log(document.getElementById('root'))
ReactDOM.render(<BasicExample/>, document.getElementById('root'));
