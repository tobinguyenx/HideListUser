import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Tai Nguyen",
    location: "Melbourne, VIC",
    age: "",
  };

  handleClick(event) {
    console.log("This is click from hanleClick");
    console.log();

    this.setState({
      name: "Nguyen Van Tai",
    });
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1),
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My name is {this.state.name}</h1>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Click me
        </button>

        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfor;
