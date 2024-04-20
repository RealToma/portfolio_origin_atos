import { skillData } from "common/constant";
import { Div } from "components/compBase";
import { Box3d } from "components/element/art.box_3d";

const PageResumeStack = () => {
  return (
    <Div col py={"10em"}>
      <Div my={"1em"} fontSize={"2em"} fontWeight={"bold"}>
        Skills
      </Div>
      <Div
        dGrid
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
        ]}
        rowGap={"10px"}
        justifyContent={"center"}
        justifyItems={"center"}
        width={"100%"}
        height={"100%"}
      >
        {skillData.map((each, index) => {
          const width = 200;
          const progress = each.score * width;
          const height = 20;
          const depth = 50;
          return (
            <Div dFlex key={index} col gridGap={"16px"} p={"16px 40px"}>
              <Box3d
                key={index}
                width={`${width}px`}
                height={`${height}px`}
                depth={`${depth}px`}
                color={"rgba(254, 254, 254, 0.3)"}
              >
                <Box3d
                  width={`${progress}px`}
                  height={`${height}px`}
                  depth={`${depth}px`}
                  color={`hsla(${each.score * 200 - 20}, 100%, 50%, 0.5)`}
                  style={{ perspective: "unset" }}
                />
              </Box3d>
              <Div
                dFlex
                alignCenter
                gridGap={"0.4em"}
                color={"white"}
                fontSize={"20px"}
              >
                <Div dFlex color={"#5fc9f8"}>
                  {each.icon}
                </Div>
                {/* <Div dFlex color={"rgb(68, 97, 250)"}>{each.icon}</Div> */}
                {each.title}
              </Div>
            </Div>
          );
        })}
      </Div>
    </Div>
  );
};

export default PageResumeStack;
