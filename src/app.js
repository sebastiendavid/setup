import './app.scss';
import { connect } from 'react-redux';
import OptiList from 'src/list/optiList';
import React, { Component, PropTypes } from 'react';
import YoloList from 'src/list/yoloList';

export default connect()(class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.fillLists = this.fillLists.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({ type: 'LIST_INIT' });
  }

  fillLists() {
    this.props.dispatch({ type: 'LIST_FILL' });
  }

  render() {
    return (
      <main className="App">
        <header className="App__header">
          <button onClick={this.fillLists}>Fill lists</button>
        </header>
        <section className="App__lists">
          <YoloList />
          <OptiList />
        </section>
      </main>
    );
  }
});
