import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomeScreen from './screens/home';

const App = () => (
  <Router>
    <div>
      <Route exact path = "/" render={()=>{ return <HomeScreen/>}}/>
    </div>
  </Router>
)

ReactDOM.render(<HomeScreen />, document.getElementById('root'));
registerServiceWorker();
