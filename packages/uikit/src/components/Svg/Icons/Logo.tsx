import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 600 600" {...props}>
      <image href="/logo.png" width="600" />
    </Svg>
  );
};

export default Icon;
