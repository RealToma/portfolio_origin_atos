import { genRandomNumberArray } from "common/utills";
import { Div } from "components/compBase";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const ArtPieceTitle: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      {children.split("").map((each, index) => (
        <ArtPieceTitleChar key={index} order={index}>
          {each}
        </ArtPieceTitleChar>
      ))}
    </>
  );
};

const ArtPieceTitleChar: React.FC<{ order: number; children: string }> = ({ order, children }) => {
  const [built, setBuilt] = useState(false);
  useEffect(() => {
    setBuilt(true);
  }, []);
  return (
    <ArtPieceTitleCharBase order={order} built={built} color={"primary"}>
      {children}
      {children === " " && <>&nbsp;</>}
      {Array(9)
        .fill(0)
        .map((_, index) => (
          <span key={index}>{children}</span>
        ))}
    </ArtPieceTitleCharBase>
  );
};

const ArtPieceTitleCharBase = styled(Div)<{ order: number; built: boolean }>`
  position: relative;
  color: transparent;
  user-select: none;
  perspective: 50vw;
  transform-style: preserve-3d;
  transition-delay: ${(p) => p.order * 300 + 2900}ms;
  & > span {
    position: absolute;
    top: 0px;
    left: 0px;
    user-select: none;
    transform-style: preserve-3d;
    transition: 2s;
    color: #4461fa;
  }
  ${(p) => {
    const translateRange = 30;
    const _randomArray = genRandomNumberArray(27);
    return Array(9)
      .fill(0)
      .map((_, index) => {
        const opacity = Math.random() * 0.8 + 0.3;
        const clip = [(100 / 3) * (index % 3), (100 / 3) * Math.floor(index / 3), (100 / 3) * (2 - (index % 3)), (100 / 3) * (2 - Math.floor(index / 3))];
        const translate = [
          (_randomArray[index] - 5) * translateRange,
          (_randomArray[index + 9] - 5) * translateRange,
          (_randomArray[index + 18] - 5) * translateRange,
        ];
        const delay = p.order * 300 + index * 100;
        return `
            & > span:nth-child(${index + 1}) {
                opacity: ${opacity};
                clip-path: inset(${clip[0]}% ${clip[1]}% ${clip[2]}% ${clip[3]}%);
                transform: ${p.built ? `none` : `translate3d(${translate[0]}px, ${translate[1]}px, ${translate[2]}px) scale(0)`};
                transition-delay: ${delay}ms;
            }
        `;
      });
  }}
`;
