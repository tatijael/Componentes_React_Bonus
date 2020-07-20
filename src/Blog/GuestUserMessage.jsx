import React from "react";

const GuestUserMessage = ({ user }) => {
  return (
    <div>
      <p>Hola`${user}`</p>
      <a href=" # ">Logout</a>
    </div>
  );
};

export default GuestUserMessage;
