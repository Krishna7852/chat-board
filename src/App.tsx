import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FeaturePage from './containers/Feature/Loadable';
import Home from './containers/Home/home';
import NotFound from './containers/NotFound/NotFound';

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feature" component={FeaturePage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
