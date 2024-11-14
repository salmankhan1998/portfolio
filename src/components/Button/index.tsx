import React, { ReactNode } from "react";
import { IconType } from "../../heplers/types";
import Icon from "../Icon/Icon";

import "./styles.scss";
interface Props {
  title?: string;
  iconType?: IconType;
  type?: "submit" | "button" | "reset";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "contained" | "light" | "dark";
  children?: ReactNode;
  classNames?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  title,
  iconType,
  type,
  size,
  variant,
  classNames,
  disabled,
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`button ${variant} ${size} ${iconType ? "btnWithIcon" : ""} ${classNames ? classNames : ""
        }`}
      onClick={onClick}
    >
      {iconType && <Icon type={iconType} />}
      {children ? children : title}
    </button>
  );
};

export default Button;
