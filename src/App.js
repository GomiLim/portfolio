import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { HomePage, MainPage, SubPage, NotFound } from 'pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={SubPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
