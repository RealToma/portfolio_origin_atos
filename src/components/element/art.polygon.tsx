import { Div } from "components/compBase";
import styled, { keyframes } from "styled-components";

interface HexagonBoxProps {
  hexBWidth?: string;
  hexBColor?: string;
}
export const HexagonBox = styled(Div)<HexagonBoxProps>`
  --border-width: ${(p) => p.hexBWidth || "unset"};
  aspect-ratio: ${2 / Math.sqrt(3)};
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  &::after {
    content: "";
    position: absolute;
    display: ${(p) => (p.hexBWidth ? "block" : "none")};
    top: 0px;
    left: 0px;
    background: ${(p) => p.hexBColor || "unset"};
    width: 100%;
    height: 100%;
    clip-path: polygon(
      25% 0%,
      75% 0%,
      100% 50%,
      75% 100%,
      25% 100%,
      0% 50%,
      25% 0%,
      calc(25% + var(--border-width)) calc(0% + var(--border-width) * ${Math.sqrt(3)}),
      calc(0% + var(--border-width) * 2) calc(50%),
      calc(25% + var(--border-width)) calc(100% - var(--border-width) * ${Math.sqrt(3)}),
      calc(75% - var(--border-width)) calc(100% - var(--border-width) * ${Math.sqrt(3)}),
      calc(100% - var(--border-width) * 2) calc(50%),
      calc(75% - var(--border-width)) calc(0% + var(--border-width) * ${Math.sqrt(3)}),
      calc(25% + var(--border-width)) calc(0% + var(--border-width) * ${Math.sqrt(3)})
    );
  }
`;
HexagonBox.defaultProps = {
  justifyContent: "center",
  alignItems: "center",
};
