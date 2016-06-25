import './list.scss';
import { connect } from 'react-redux';
import OptiList from 'src/list/optiList';
import React, { Component, PropTypes } from 'react';
import YoloList from 'src/list/yoloList';

export default connect()(class Lists extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
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
      <section className="Lists">
        <menu className="Lists__header">
          <button onClick={this.fillLists}>Fill lists</button>
        </menu>
        <YoloList />
        <OptiList />
      </section>
    );
  }
});
