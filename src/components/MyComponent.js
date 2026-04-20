import React, { useState } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "TaiNguyenVan1", age: 10 },
    { id: 2, name: "TaiNguyenVan2", age: 20 },
    { id: 3, name: "TaiNguyenVan3", age: 30 },
  ]);

  const handleAddnewUser = (useObj) => {
    console.log(useObj);
    setListUsers([useObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    const listUsersClone = listUsers.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
    // let listUsersClone = listUsers;
    // listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    // setListUsers(listUsersClone);
  };

  return (
    <div>
      <UserInfor handleAddnewUser={handleAddnewUser} />
      <br />
      <br />
      <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default MyComponent;
