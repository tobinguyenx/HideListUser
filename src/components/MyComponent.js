import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "TaiNguyenVan1", age: 10 },
      { id: 2, name: "TaiNguyenVan2", age: 20 },
      { id: 3, name: "TaiNguyenVan3", age: 30 },
    ],
  };

  handleAddnewUser = (useObj) => {
    console.log(useObj);
    this.setState({
      listUsers: [useObj, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
    let listUsersClone = this.state.listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUsersClone,
    });
  };

  render() {
    return (
      <div>
        <UserInfor handleAddnewUser={this.handleAddnewUser}></UserInfor>
        <br />
        <br />

        <DisplayInfor
          listUsers={this.state.listUsers}
          handleDeleteUser={this.handleDeleteUser}
        ></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
