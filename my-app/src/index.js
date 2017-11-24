import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom'
import App from './router';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();
// 路由配置说明（你不用加载整个配置，
// 只需加载一个你想要的根路由，
// 也可以延迟加载这个配置）。
const BasicExample = () => (
    <Provider store={store}>
      <App/>
    </Provider>
  )
ReactDOM.render(<BasicExample/>, document.getElementById('root'));  
