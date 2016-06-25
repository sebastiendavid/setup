import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

export default connect((state) => ({
  data: state.bigData.one,
}))(class BigDataOne extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    console.info('shouldComponentUpdate BigDataOne');
    return nextProps.data.date !== this.props.data.date;
  }

  update() {
    this.props.dispatch({ type: 'UPDATE_ONE' });
  }

  render() {
    console.info('render BigDataOne');
    return (
      <div className="BigData__container BigDataOne">
        <span className="BigData__title">BigDataOne</span>
        <span className="BigData__date BigDataOne__date">{this.props.data.date}</span>
        <button className="BigData__button BigDataOne__button" onClick={this.update}>Update</button>
      </div>
    );
  }
});
