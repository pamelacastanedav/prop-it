import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { age: this.props.age };
  }
  IncrementAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div>
        <h1>
          {this.props.lastName},{this.props.firstName}
        </h1>
        <p> Age:{this.state.age} </p>
        <p>Hair Color: {this.props.hairColor}</p>
        <div>
          <button onClick={this.IncrementAge}>
            Birthday Button for {this.props.firstName}
          </button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
// export default Click;
