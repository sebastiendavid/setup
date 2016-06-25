import { connect } from 'react-redux';
import moment from 'moment';
import React, { Component, PropTypes } from 'react';

export default connect((state) => ({
  list: state.list,
}))(class YoloList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
  };

  constructor() {
    super();
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    return (
      <li key={item.id}>{item.label} - {moment().format('LTS')}</li>
    );
  }

  render() {
    return (
      <section className="List">
        <h1>YoloList</h1>
        <ul>
          {this.props.list.map(this.renderItem)}
        </ul>
      </section>
    );
  }
});
