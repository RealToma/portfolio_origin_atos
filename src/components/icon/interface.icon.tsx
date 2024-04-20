export interface IconProps {
  size?: string;
  color?: string;
}

export interface ArrowIconProps extends IconProps {
  dir?: "up" | "down" | "left" | "right";
}
