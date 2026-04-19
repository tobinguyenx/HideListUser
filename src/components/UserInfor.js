import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Tai Nguyen",
    location: "Melbourne, VIC",
  };

  handleClick(event) {
    console.log("This is click from hanleClick");
    console.log();

    this.setState({
      name: "Nguyen Van Tai",
    });
  }

  handleChange(event) {
    this.setState({
      // name: event.target.value;
    });
  }

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

        <form>
          <input
            type="text"
            onChange={(event) => {
              this.handleChange();
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfor;
