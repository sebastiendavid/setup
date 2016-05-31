import React, { Component, PropTypes } from 'react';

export default class ShouldUpdateComponent extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.data !== this.props.data;
  }

  render() {
    const { data } = this.props;
    console.info('ShouldUpdateComponent render', data);
    return (
      <div>{data.value}</div>
    );
  }
}
