import { Div } from "components/compBase";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const BlinkingTitle: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      {children.split("").map((each, index) => (
        <BlinkingTitleChar key={index} order={index}>
          {each}
        </BlinkingTitleChar>
      ))}
    </>
  );
};

const BlinkingTitleChar: React.FC<{ order: number; children: string }> = ({ order, children }) => {
  const [built, setBuilt] = useState(false);
  useEffect(() => {
    setBuilt(true);
  }, []);
  return (
    <BlinkingTitleCharBase order={order} built={built}>
      {children}
      {children === " " && <>&nbsp;</>}
    </BlinkingTitleCharBase>
  );
};

const BlinkingTitleCharBase = styled(Div)<{ order: number; built: boolean }>`
  position: relative;
  opacity: ${(p) => (p.built ? "1" : "0")};
  user-select: none;
  transition: 2000ms;
  transition-delay: ${(p) => p.order * 100}ms;
  transform: ${(p) => (p.built ? "none" : `translate(100px)`)};
`;
