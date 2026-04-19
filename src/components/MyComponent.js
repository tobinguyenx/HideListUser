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

  render() {
    return (
      <div>
        <UserInfor></UserInfor>
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
