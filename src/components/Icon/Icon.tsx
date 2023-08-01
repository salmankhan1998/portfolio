import React from "react";
import * as Icons from "../../icons";
import { IconType } from "../../heplers/types";
import "./styles.scss";

export interface IconProps {
  type: IconType;
}

const Icon: React.FC<IconProps> = ({ type }) => {
  const IconComponent = Icons[type];

  return (
    <div data-testid="Icon" className="icon">
      <IconComponent />
    </div>
  );
};

export default Icon;
