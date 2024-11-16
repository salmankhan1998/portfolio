import React from "react";
import * as Icons from "../../icons";
import { IconType } from "../../heplers/types";
import "./styles.scss";

interface SvgIconProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}
export interface IconProps extends SvgIconProps {
  type: IconType;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Icon: React.FC<IconProps> = ({ type, color = "currentColor", width = '34', height = '30' }) => {
  const IconComponent = Icons[type] as React.FC<SvgIconProps>;;

  return (
    <IconComponent color={color} width={width} height={height} />
  );
};

export default Icon;
