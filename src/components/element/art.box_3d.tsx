import { Div } from "components/compBase";
import styled, { keyframes } from "styled-components";

export const Box3d: React.FC<{ [index: string]: any }> = ({ children, ...props }) => {
  return (
    <Box3dContainer {...props}>
      <div className="custom_3d_box_wrapper">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div key={index} />
          ))}
      </div>
      {children}
    </Box3dContainer>
  );
};

interface Box3dContainerProps {
  width?: string;
  height?: string;
  depth?: string;
}
const Box3dContainer = styled(Div)<Box3dContainerProps>`
  --width: ${(p) => p.width || "20em"};
  --height: ${(p) => p.height || "5em"};
  --depth: ${(p) => p.depth || "10em"};
  position: relative;
  width: var(--width);
  height: var(--height);
  /* aspect-ratio: 1; */
  perspective: 500px;
  transform-style: preserve-3d;
  & > div.custom_3d_box_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateX(-30deg);
    transform-style: preserve-3d;
    /* animation: ${keyframes`
        from {
            transform: translate(-50%, -50%) rotateX(360deg) rotateY(0deg) rotateZ(0deg);
        }
        to {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(360deg) rotateZ(360deg);
        }
    `} linear 10s infinite; */
  }
  & > div.custom_3d_box_wrapper > div {
    position: absolute;
    top: 50%;
    left: 50%;
    /* border: 0.1px solid #fff5; */
    background: linear-gradient(currentColor, #fff0);
    background: currentColor;
    width: 100%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    text-align: center;
    /* box-shadow: 0px 0px 10px 0px currentColor; */
  }
  & > div.custom_3d_box_wrapper > div:nth-child(1) {
    /* front */
    background: linear-gradient(currentColor, transparent);
    width: var(--width);
    height: var(--height);
    transform: translate(-50%, -50%) rotateY(-90deg) translate(calc(var(--depth) / 2)) rotateY(90deg);
  }
  & > div.custom_3d_box_wrapper > div:nth-child(2) {
    /* back */
    width: var(--width);
    height: var(--height);
    transform: translate(-50%, -50%) rotateY(90deg) translate(calc(var(--depth) / 2)) rotateY(90deg);
  }
  & > div.custom_3d_box_wrapper > div:nth-child(3) {
    /* top */
    background: linear-gradient(transparent, currentColor);
    width: var(--width);
    height: var(--depth);
    opacity: 0.7;
    transform: translate(-50%, -50%) translateY(calc(var(--height) / -2)) rotateX(90deg);
  }
  & > div.custom_3d_box_wrapper > div:nth-child(4) {
    /* bottom */
    box-shadow: 0 0.1em 0.6em rgb(0, 0, 0, 0.1), 0.6em -0.5em 3em rgb(0, 0, 0, 0.1), 1em -1em 8em currentColor;
    width: var(--width);
    height: var(--depth);
    transform: translate(-50%, -50%) translateY(calc(var(--height) / 2)) rotateX(-90deg);
  }
  & > div.custom_3d_box_wrapper > div:nth-child(5) {
    /* left */
    width: var(--depth);
    height: var(--height);
    transform: translate(-50%, -50%) translateX(calc(var(--width) / -2)) rotateY(-90deg);
  }
  & > div.custom_3d_box_wrapper > div:nth-child(6) {
    /* right */
    width: var(--depth);
    height: var(--height);
    transform: translate(-50%, -50%) translateX(calc(var(--width) / 2)) rotateY(90deg);
  }
`;
