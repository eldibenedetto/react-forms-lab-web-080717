import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    let characterCount = this.state.value.length
    let remainingChar = this.props.maxChars - characterCount
    return (
      <div>
        <strong>Your message: {remainingChar}</strong>
        <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
         />
      </div>
    );
  }
}

export default TwitterMessage;
