import React, { useState } from "react";

// class UserInfor extends React.Component {
//   state = {
//     name: "Tai Nguyen",
//     location: "Melbourne, VIC",
//     age: "",
//   };

//   handleClick(event) {
//     console.log("This is click from hanleClick");
//     console.log();

//     this.setState({
//       name: "Nguyen Van Tai",
//     });
//   }

//   handleChange = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddnewUser({
//       id: Math.floor(Math.random() * 100 + 1),
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

const UserInfor = (props) => {
  //   state = {
  //     name: "Tai Nguyen",
  //     location: "Melbourne, VIC",
  //     age: "",
  //   };

  const [name, setName] = useState("Tai Nguyen");
  const [location, setLocation] = useState("");

  //   handleClick(event) {
  //     console.log("This is click from hanleClick");
  //     console.log();

  //     this.setState({
  //       name: "Nguyen Van Tai",
  //     });
  //   }

  const handleClick = () => {
    console.log();
    setName("Nguyen Van Tai");
  };

  //   handleChange = (event) => {
  //     this.setState({
  //       name: event.target.value,
  //     });
  //   };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1),
      name: name,
    });
  };
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Click me
      </button>

      <form onSubmit={handleOnSubmit}>
        <input type="text" value={name} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UserInfor;
