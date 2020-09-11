import React from 'react';
import Template from './template';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App"> 
      <Provider store={store}>
        <Router>
            <Route path="/">
              <Redirect to="/index"/>
            </Route>
            <Route path="/login" component={LoginComponent}/>
            <Route path="/index" component={Template}/>
            <Route path="/register" component={RegisterComponent}/>
        </Router>
      </Provider>
      {/**<Template/>**/}
    </div>
  );
}

export default App;
