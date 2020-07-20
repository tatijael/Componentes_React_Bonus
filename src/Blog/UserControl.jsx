import React from "react";
import GuestUserMessage from "./GuestUserMessage";
import LoggedUserMessage from "./LoggedUserMessage";

const UserControl = ({ user }) => {
  if (user) {
    return <GuestUserMessage user={user} />;
  } else {
    return <LoggedUserMessage />;
  }
};
export default UserControl;
