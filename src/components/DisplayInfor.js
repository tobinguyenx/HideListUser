import React, { useState } from "react";

const DisplayInfor = (props) => {
  const [listUsers, handleDeleteUser] = props;

  const [isShowListUser, setIsShowListUser] = useState();

  const handleShowHide = () => {
    setIsShowListUser(!isShowListUser);
  };

  return (
    <div>
      This is DisplayInfor Screen
      <div>
        <button onClick={handleShowHide}>
          {isShowListUser ? "Hide" : "Show"}
        </button>

        {isShowListUser &&
          listUsers.map((user) => (
            <div key={user.id} className={user.age > 18 ? "green" : "red"}>
              My name is {user.name}
              <br />
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayInfor;
