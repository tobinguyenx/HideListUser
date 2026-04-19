import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    const { listUsers } = this.props;
    return (
      <div>
        This is DisplayInfor
        <div>
          My name is Tai Nguyen DisplayInfor
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                My name is {user.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DisplayInfor;
