import moment from 'moment';
import React, { PropTypes, Component } from 'react';

export default class OptiListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return this.props.item.id !== nextProps.item.id;
  }

  render() {
    const { item } = this.props;
    return (
      <li>{item.label} - {moment().format('LTS')}</li>
    );
  }
}
