import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
} from "styled-system";

export interface AllProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {
  backdropFilter?: any;
  transition?: any;
  transform?: any;
  cursor?: "pointer" | "reverse";
  whiteSpace?: "nowrap" | "pre" | "pre-line" | "pre-wrap" | "reverse" | "normal";
  visibility?: any;
  backgroundClip?: any;
  textOverflow?: any;
  filter?: any;
  columnGap?: any;
  rowGap?: any;
  ref?: any;
  uppercase?: boolean;
  boxSizing?: any;
  mixBlendMode?: any;
  transformStyle?: any;
  textColor?: any;
  textTransform?: any;
  aspectRatio?: any;
  clipPath?: any;
  outline?: string;
  perspective?: string;
  objectFit?: "contain" | "cover" | "fill" | "revert" | "scale-down" | "unset" | "initial";
}

const transform = system({ transform: true });
const boxSizing = system({ boxSizing: true });
const mixBlendMode = system({ mixBlendMode: true });
const transformStyle = system({ transformStyle: true });
const aspectRatio = system({ aspectRatio: true });
const clipPath = system({ clipPath: true });
const textColor = system({ textColor: { property: "color", scale: "colors" } });
const rowGap = system({ rowGap: true });
const columnGap = system({ columnGap: true });
const backdropFilter = system({ backdropFilter: true });
const transition = system({ transition: true });
const filter = system({ filter: true });
const visibility = system({ visibility: true });
const textOverflow = system({ textOverflow: true });
const whiteSpace = system({ whiteSpace: true });
const backgroundClip = system({ backgroundClip: true });
const cursor = system({ cursor: true });
const textTransform = system({ textTransform: true });
const outline = system({ outline: true });
const perspective = system({ perspective: true });

// allCompose
export const allCompose = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  transform,
  boxSizing,
  mixBlendMode,
  transformStyle,
  textColor,
  aspectRatio,
  clipPath,
  columnGap,
  rowGap,
  backdropFilter,
  transition,
  filter,
  visibility,
  textOverflow,
  whiteSpace,
  backgroundClip,
  cursor,
  textTransform,
  outline,
  perspective
);

export interface DivProps extends AllProps {
  dFlex?: boolean;
  dGrid?: boolean;
  col?: boolean;
  justifyCenter?: boolean;
  alignCenter?: boolean;
  center?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
}

export interface InputProps extends AllProps {
  outline?: string;
}
export interface LinkProps extends AllProps {
  hoverBg?: string;
  hoverColor?: string;
  hoverUL?: string;
}
