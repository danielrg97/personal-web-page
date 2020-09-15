import React from 'react';
import Template from './template';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App"> 
      <Provider store={store}>
        <Router>
            <div>
              <Route path="/">
                <Redirect to="/index"/>
              </Route>
              <Route path="/login" component={LoginComponent}/>
              <Route path="/index" component={Template}/>
              <Route path="/register" component={RegisterComponent}/>
              <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
            </div>
        </Router>
      </Provider>
      {/**<Template/>**/}
    </div>
  );
}

export default App;
