import { Div } from "components/compBase";
import styled from "styled-components";

const PageResumeSummary = () => {
  return (
    <Div
      dFlex
      justifyCenter
      background={
        "linear-gradient(45deg, #5fa6f811 32%, #0000 32% 34%, #5fa6f831 34% 38%, #0000 38% 40%, #5fa6f821 40%)"
      }
      px={"2em"}
      py={"5em"}
      clipPath={
        "polygon(0% 15px, 15px 0%, calc(60% - 15px) 0%, 60% 15px, 80% 15px, calc(80% + 15px) 0%, calc(100% - 15px) 0%, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, calc(70% + 15px) 100%, 70% calc(100% - 15px), 30% calc(100% - 15px), calc(30% - 15px) 100%, 15px 100%, 0% calc(100% - 15px))"
      }
      backdropFilter={"blur(3px)"}
    >
      <Div
        maxWidth={["100%", "100%", "90%", "80%", "80%"]}
        lineHeight={"2em"}
        fontSize={["15px", "15px", "20px", "25px"]}
        filter={
          "drop-shadow(0px 0px 5px black) drop-shadow(0px 0px 20px black)"
        }
        background={
          "conic-gradient(at 30% 50%, #9affff, #5fc9f8, #9affff, #9affff, #5fc9f8, #9affff)"
        }
        color={"transparent"}
        style={{ WebkitBackgroundClip: "text" }}
      >
        I am a <Strong>blockchain, full-stack developer</Strong> with over 7
        years of experience in{" "}
        <Strong>
          Javascript, Typescript, Solidity, Rust, Python, HTML, CSS
        </Strong>{" "}
        and their frameworks. I have extensive experience in web development and
        manage all aspects of the development process. I have worked on 20+
        projects and solved complex business problems in various industries
        including marketing, healthcare, eCommerce, real estate, blockchain and
        car insurance. I have consistently saved costs while increasing profits.
        I am ready for an opportunity to use my skills to grow your revenue
        exponentially.{" "}
        <Strong>As a full-time developer, I can work anytime.</Strong>
      </Div>
    </Div>
  );
};

const Strong = styled(Div)``;
Strong.defaultProps = {
  display: "contents",
  color: "#5fc9f8",
  fontSize: "1.1em",
};

export default PageResumeSummary;
