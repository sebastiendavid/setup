import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

export default connect((state) => ({
  data: state.bigData.two
}))(class BigDataTwo extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    console.info('shouldComponentUpdate BigDataTwo');
    return nextProps.data.date !== this.props.data.date;
  }

  update() {
    this.props.dispatch({ type: 'UPDATE_TWO' });
  }

  render() {
    console.info('render BigDataTwo');
    return (
      <div className="BigData__container BigDataTwo">
        <span className="BigData__title">BigDataTwo</span>
        <span className="BigData__date BigDataTwo__date">{this.props.data.date}</span>
        <button className="BigData__button BigDataTwo__button" onClick={this.update}>Update</button>
      </div>
    );
  }
});
