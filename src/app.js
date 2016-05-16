import './app.scss';
import { browserHistory, IndexRedirect, Route, Router } from 'react-router';
import BigData from 'src/bigData';
import Lists from 'src/list';
import React, { PropTypes } from 'react';

function Root({ children }) {
  return <main className="App">{children}</main>;
}

Root.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]).isRequired
};

export default function App() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRedirect to="lists" />
        <Route path="lists" component={Lists} />
        <Route path="bigdata" component={BigData} />
      </Route>
    </Router>
  );
}
