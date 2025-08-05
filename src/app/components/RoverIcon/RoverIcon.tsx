import React from "react";

import "./RoverIcon.css";

const RoverIcon: React.FC = () => (
  <div className="rover" role="img" aria-label="Mars rover">
    <div className="track left">
      <div className="wheel top"></div>
      <div className="wheel bottom"></div>
    </div>
    <div className="body">
      <div className="sensor"></div>
    </div>
    <div className="track right">
      <div className="wheel top"></div>
      <div className="wheel bottom"></div>
    </div>
  </div>
);

export default RoverIcon;
