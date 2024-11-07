import React, { ReactNode } from "react";
import "./styles.scss";
import Icon from "../Icon/Icon";
import { IconType } from "../../heplers/types";

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
  // const Icon = useMemo(() => <span>{icon}</span>, [icon]);
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
