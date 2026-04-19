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
    const { listUsers } = this.props;

    return (
      <div>
        This is DisplayInfor Screen
        <div>
          <button
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true ? "Hide" : "Show"}
          </button>
          {this.state.isShowListUser &&
            listUsers.map((user) => {
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
