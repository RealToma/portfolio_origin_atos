import { Container, ContainerFluid, Div } from "components/compBase";

const LayoutHeader = () => {
  return (
    <ContainerFluid position={"fixed"} py={"1.5em"} zIndex={"100"}>
      <Container
        background={"#5fc9f805"}
        backdropFilter={"blur(10px)"}
        backgroundClip={"padding-box"}
        outline={"2px solid #5fc9f840"}
        border={"3px solid transparent"}
        borderTop={"none"}
        borderBottom={"none"}
        p={"1em"}
        boxShadow={"-0.1em -0.1em 1em 0px #5fc9f840 inset"}
        borderRadius={"1em"}
      >
        <Div fontFamily={"art1"} fontSize={"30px"} fontWeight={"bol"}>
          TK
        </Div>
      </Container>
    </ContainerFluid>
  );
};

export default LayoutHeader;
