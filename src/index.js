import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './containers/NavBar';
import Footer from './components/Footer';
import Home from './containers/Home';
import About from './components/About';
import rootReducer from './reducers';
import Detail from './containers/Detail';

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/category/:id" component={Home} />
        <Route path="/photos/:imageId" component={Detail} />
      </Switch>
      <Footer />
    </Router>
    ,
  </Provider>,
  document.getElementById('root'),
);
