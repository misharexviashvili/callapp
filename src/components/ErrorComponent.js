import "./ErrorComponent.css";

import React from "react";

const ErrorComponent = ({children}) => {
  return (
    <div>
      <p className="errorText">{children}</p>
    </div>
  );
};

export default ErrorComponent;
