import { Div, Link } from "components/compBase";
import styled, { keyframes } from "styled-components";
import { HexagonBox } from "./art.polygon";

export const HexIconBtn: React.FC<{ icon?: React.ReactNode; [index: string]: any }> = ({
  icon = <i className={"devicon-react-original"} />,
  children,
  ...props
}) => {
  return (
    <HexIconBtnBase
      alignItems={"center"}
      justifyContent={"center"}
      gridGap={"0.7em"}
      p={"5px"}
      {...props}
    >
      <HexagonBox background={"transparent"} height={"2em"}>
        <IconContainer alignCenter justifyCenter width={"200%"} height={"200%"}>
          <HexagonBox background={"black"} color={"#5fc9f8"} height={"1.8em"}>
            {icon}
          </HexagonBox>
        </IconContainer>
      </HexagonBox>
      {children}
    </HexIconBtnBase>
  );
};

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const HexIconBtnBase = styled(Link)`
  --corner-size: 0.5em;
  --corner-width: 0.15em;
  clip-path: polygon(
    0% 0%,
    var(--corner-size) 0%,
    var(--corner-size) var(--corner-width),
    calc(100% - var(--corner-size)) var(--corner-width),
    calc(100% - var(--corner-size)) 0%,
    100% 0%,
    100% var(--corner-size),
    calc(100% - var(--corner-width)) var(--corner-size),
    calc(100% - var(--corner-width)) calc(100% - var(--corner-size)),
    100% calc(100% - var(--corner-size)),
    100% 100%,
    calc(100% - var(--corner-size)) 100%,
    calc(100% - var(--corner-size)) calc(100% - var(--corner-width)),
    var(--corner-size) calc(100% - var(--corner-width)),
    var(--corner-size) 100%,
    0% 100%,
    0% calc(100% - var(--corner-size)),
    var(--corner-width) calc(100% - var(--corner-size)),
    var(--corner-width) var(--corner-size),
    0% var(--corner-size)
  );
  border-width: calc(var(--corner-width) - 1px);
  border-style: solid;
  border-color: transparent;
  transition: border-color 1000ms;
  &:hover {
    border-color: white;
    > div > div {
      background: conic-gradient(from 0deg, transparent, #5fc9f8);
      animation: ${rotation} 4s linear infinite;
      & > div {
        animation: ${rotation} 4s linear infinite reverse;
      }
    }
  }
`;

const IconContainer = styled(Div)`
  background: #5fc9f888;
`;
