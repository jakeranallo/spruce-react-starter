import React from "react";

import Message from "./icons/Message";
import Envelope from "./icons/Envelope";

const Icon = props => {
  switch (props.name) {
    case "message":
      return <Message {...props} />;
    case "envelope":
      return <Envelope {...props} />;
    default:
      return;
  }
};

export default Icon;