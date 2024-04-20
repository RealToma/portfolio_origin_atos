import { Div } from "components/compBase";
import styled, { keyframes } from "styled-components";

export const Nuclear: React.FC<{ [index: string]: any }> = ({ ...props }) => {
  return (
    <NuclearContainer {...props}>
      <NuclearBase width={"100%"} aspectRatio={"1"}>
        <NuclearRoundBase />
        <NuclearRoundBase />
        <NuclearRoundBase />
      </NuclearBase>
    </NuclearContainer>
  );
};

const NuclearContainer = styled(Div)`
  transform-style: preserve-3d;
  perspective: 100vh;
  * {
    transform-style: preserve-3d;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background: radial-gradient(cyan, transparent), #9affff;
    width: 2.5vw;
    min-width: 25px;
    aspect-ratio: 1;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    animation: ${keyframes`
      from {
        filter: drop-shadow(0px 0px 15px cyan) drop-shadow(0px 0px 5px blue);
      }
      to {
        filter: drop-shadow(0px 0px 5px cyan) drop-shadow(0px 0px 15px blue);
      }
    `} 1s infinite linear alternate;
  }
`;
const NuclearBase = styled(Div)`
  animation: ${keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
  `} 20s infinite linear;
`;
const NuclearRoundBase = styled(Div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 100%;
  translate: -50% -50%;
  rotate: X 90deg;
  scale: 1 0.4;
  &:nth-child(3n + 1) {
    transform: rotateY(30deg);
  }
  &:nth-child(3n + 2) {
    transform: rotateY(90deg);
  }
  &:nth-child(3n + 3) {
    transform: rotateY(150deg);
  }
  &:nth-child(n + 4) {
    translate: 0px 1px;
    background: #f001;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-top: 15px solid cyan;
    border-radius: 100%;
    filter: drop-shadow(0px 0px 10px cyan) drop-shadow(0px 0px 10px blue);
    outline: 3px solid cyan;
    transform-style: preserve-3d;
    box-sizing: border-box;
    animation: ${keyframes`
      from {
        rotate: 0deg;
      }
      to {
        rotate: 360deg;
      }
    `} 1.5s infinite linear;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-top: 15px solid cyan;
    border-radius: 100%;
    rotate: X 90deg;
    scale: 0.6 0.15;
    filter: drop-shadow(0px 0px 10px cyan) drop-shadow(0px 0px 10px blue);
    transform-style: preserve-3d;
    box-sizing: border-box;
    animation: ${keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `} 1.5s infinite linear reverse;
    animation-fill-mode: forwards;
  }
`;
