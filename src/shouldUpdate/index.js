import React, { Component } from 'react';
import ShouldUpdateComponent from 'src/shouldUpdate/shouldUpdateComponent';

export default class ShouldUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      data: {
        value: '',
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    const value = event.target.value;
    this.setState({ inputValue: value });
  }

  onClick() {
    const data = { value: this.state.inputValue };
    this.setState({ data });
  }

  render() {
    const { data, inputValue } = this.state;
    return (
      <section>
        <div>
          <input type="text" value={inputValue} onChange={this.onChange} />
          <button onClick={this.onClick}>Send</button>
        </div>
        <ShouldUpdateComponent data={data} />
      </section>
    );
  }
}
