import React from 'react';

class PoemWriter extends React.Component {
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

  // write a helper method that validates textarea
  validPoem = (value) => {
    let lines = value.split("\n")
    let linesLength = lines.map(line => {
      console.log(line.trim().split(" "))
      return line.trim().split(" ").length
    })
    if (linesLength[0] === 5 && linesLength[1] === 3 && linesLength[2] === 5 && linesLength.length === 3) {
      return true
    } else {
      return false
    }
  }
  // call helper method in onChange event handler


  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.validPoem(this.state.value) ? <div></div> :
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
          >
            This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
