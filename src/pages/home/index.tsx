import { Div } from "components/compBase";
import { BlinkingTitle } from "components/element/effect.fade";
import { ArtPieceTitle } from "components/element/effect.piece";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let _interval: string | number | NodeJS.Timeout | undefined;
    const _timeout = setTimeout(() => {
      _interval = setInterval(() => {
        if (document.readyState === "complete") {
          setTimeout(() => {
            navigate("intro");
          }, 1000);
        }
      }, 100);
    }, 5000);
    return () => {
      clearTimeout(_timeout);
      clearInterval(_interval);
    };
  }, []);

  return (
    <Div
      dFlex
      col
      alignCenter
      justifyCenter
      position={"fixed"}
      width={"100%"}
      height={"100%"}
    >
      <Div
        dFlex
        maxWidth={"100%"}
        fontFamily={"art2"}
        fontSize={["50px", "50px", "75px", "100px"]}
        filter={"drop-shadow(5px 5px 5px black)"}
        flexWrap={"wrap"}
      >
        <ArtPieceTitle>THOMAS KEN</ArtPieceTitle>
      </Div>
      <Div
        dFlex
        flexWrap={"wrap"}
        maxWidth={"100%"}
        color={"#5fc9f8"}
        fontFamily={"art1"}
        fontSize={["10px", "10px", "15px", "20px"]}
        lineHeight={"2em"}
        letterSpacing={"0.4em"}
      >
        <BlinkingTitle>FullsTack BLOckchAin DEvElOpeR</BlinkingTitle>
      </Div>
    </Div>
  );
};

export default PageHome;
