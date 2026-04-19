import React from "react";

class DisplayInfor extends React.Component {
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  state = {
    isShowListUser: true,
  };
  render() {
    console.log(this.props);
    const { listUsers } = this.props;

    return (
      <div>
        This is DisplayInfor
        <div>
          My name is Tai Nguyen DisplayInfor
          <br />
          <br />
          <hr />
          {listUsers.map((user) => {
            return (
              <div>
                <div>
                  <span
                    onClick={() => {
                      this.handleShowHide();
                    }}
                  >
                    Hide List User
                  </span>
                </div>
                {this.state.isShowListUser && (
                  <div
                    key={user.id}
                    className={+user.age > 18 ? "green" : "red"}
                  >
                    My name is {user.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DisplayInfor;
