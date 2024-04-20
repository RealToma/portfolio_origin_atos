import styled from "styled-components";
import { allCompose, AllProps, DivProps, InputProps, LinkProps } from "./interface.base";

// Containers
export const Div = styled.div<DivProps>`
  ${allCompose}
  display: ${(p: DivProps) => (p.dFlex ? "flex" : p.dGrid ? "grid" : "")};
  flex-direction: ${(p: DivProps) => (p.col ? "column" : "")};
  justify-content: ${(p: DivProps) =>
    p.center
      ? "center"
      : p.justifyCenter
      ? "center"
      : p.spaceBetween
      ? "space-between"
      : p.spaceAround
      ? "space-around"
      : ""};
  align-items: ${(p: DivProps) => (p.center ? "center" : p.alignCenter ? "center" : "")};
`;
Div.defaultProps = {
  boxSizing: "border-box",
  display: "flex",
};
export const ContainerFluid = styled(Div)``;
ContainerFluid.defaultProps = {
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
};
export const Container = styled(Div)``;
Container.defaultProps = {
  width: "100%",
  maxWidth: "1600px",
  px: "20px",
};

// Input
export const Input = styled.input<InputProps>`
  ${allCompose}
  &::-webkit-inner-spin-button {
    display: none;
  }
`;
Input.defaultProps = {
  outline: "none",
  boxSizing: "border-box",
};
export const TextArea = styled.textarea<InputProps>`
  ${allCompose}
  &::-webkit-inner-spin-button {
    display: none;
  }
`;
TextArea.defaultProps = {
  outline: "none",
  boxSizing: "border-box",
};

// Image
export const Image = styled.img<AllProps>`
  ${allCompose}
`;

// Link
export const Link = styled.a<LinkProps>`
  ${allCompose}
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  display: inline-flex;
  &:hover {
    background: ${(p: any) => (p.hoverBg ? p.hoverBg : "reverse")};
    color: ${(p: any) => (p.hoverColor ? p.hoverColor : "reverse")};
    text-decoration: ${(p: any) => (p.hoverUL ? p.hoverUL : "reverse")};
  }
`;
