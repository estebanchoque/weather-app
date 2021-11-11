import React from "react";

const Notification = ({ text = "Oops!... Refresh the page" }) => (
  <div class="alert alert-info" role="alert">
    {text}
  </div>
);

export default Notification;
