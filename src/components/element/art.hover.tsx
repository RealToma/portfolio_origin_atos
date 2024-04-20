import { Div } from "components/compBase";
import { useEffect, useState } from "react";

export const RandomHoverBox: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      {children.split("").map((each, index) => (
        <RandomHoverCharBox key={index} order={index}>
          {each}
        </RandomHoverCharBox>
      ))}
    </>
  );
};
const RandomHoverCharBox: React.FC<{ order: number; children: string }> = ({ order, children }) => {
  const [char, setChar] = useState("");
  const [ended, setEnded] = useState(false);
  useEffect(() => {
    setChar(String.fromCharCode(Math.floor(Math.random() * 256)));
    setTimeout(() => {
      setEnded(true);
    }, (order + 1) * 50);
  }, []);
  useEffect(() => {
    if (!ended) {
      setTimeout(() => {
        setChar(String.fromCharCode(Math.floor(Math.random() * 57 + 65)));
      }, 100);
    }
  }, [char]);
  return <Div dFlex textTransform={"full-width"}>{ended ? children === " " ? <>&nbsp;</> : children : char}</Div>;
};
