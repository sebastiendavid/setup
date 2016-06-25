import { connect } from 'react-redux';
import OptiListItem from 'src/list/optiListItem';
import React, { Component, PropTypes } from 'react';

export default connect((state) => ({
  list: state.list,
}))(class OptiList extends Component {
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
      <OptiListItem key={item.id} item={item} />
    );
  }

  render() {
    return (
      <section className="List">
        <h1>OptiList</h1>
        <ul>
          {this.props.list.map(this.renderItem)}
        </ul>
      </section>
    );
  }
});
