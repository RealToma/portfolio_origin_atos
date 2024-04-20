import { Container, ContainerFluid, Div } from "components/compBase";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const PageResumeExperience = () => {
  const container = useRef<any>(null);
  const [rotation, setRotation] = useState(240);
  const onScroll = (e: any) => {
    const scrolled = window.scrollY;
    const offset = container?.current?.offsetTop;
    const screenHeight = window.innerHeight;
    if (scrolled - offset > -screenHeight && scrolled - offset < screenHeight) {
      setRotation(((scrolled - offset) / screenHeight) * 60 + 60);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <ExperienceContainer ref={container}>
      <Container>
        <Div my={"2em"} fontSize={"2em"} fontWeight={"bold"}>
          Experience
        </Div>
      </Container>
      <Floor rotation={rotation}>{<Milestones />}</Floor>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled(ContainerFluid)`
  *,
  *::before,
  *::after {
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
`;
ExperienceContainer.defaultProps = {
  width: "100%",
  minHeight: "100vh",
  perspective: "100vh",
  overflow: "hidden",
  // backgroundColor: "green",
  backgroundColor: "#0e1118",
};

const Floor = styled(Div)<{ rotation: number }>`
  position: absolute;
  background-color: #0e1118;
  background-image: radial-gradient(transparent, #0e1118 90%),
    repeating-linear-gradient(#182127a0 0px 2px, transparent 2px 50px),
    repeating-linear-gradient(90deg, #182127a0 0px 2px, transparent 2px 50px);
  background-position: center center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  rotate: X ${(p) => p.rotation}deg;
`;

const LocationItemBase = styled(Div)`
  --size: 5vh;
  position: absolute;
  rotate: X -90deg;
  transition: 500ms;
  translate: 0px 0px 2vh;
  pointer-events: none;
  animation: identifier 5s infinite linear;
  @keyframes identifier {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
  * {
    backface-visibility: visible;
  }
  & > div {
    position: absolute;
    bottom: 0px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(-50%);
    filter: drop-shadow(0px 0px 1px blue);
    &:nth-child(1) {
      transform: translateX(-50%) translateZ(-4px);
    }
    &:nth-child(2) {
      transform: translateX(-50%) translateZ(-3px);
    }
    &:nth-child(3) {
      transform: translateX(-50%) translateZ(-2px);
    }
    &:nth-child(4) {
      transform: translateX(-50%) translateZ(-1px);
    }
    &:nth-child(5) {
      transform: translateX(-50%) translateZ(0px);
    }
    &:nth-child(6) {
      transform: translateX(-50%) translateZ(1px);
    }
    &:nth-child(7) {
      transform: translateX(-50%) translateZ(2px);
    }
    &:nth-child(8) {
      transform: translateX(-50%) translateZ(3px);
    }
    &:nth-child(9) {
      transform: translateX(-50%) translateZ(4px);
    }
    &::before {
      content: "";
      width: var(--size);
      aspect-ratio: 1;
      box-sizing: border-box;
      border: calc(var(--size) * 0.3) solid cyan;
      border-radius: 100%;
    }
    &::after {
      content: "";
      margin-top: calc(var(--size) * -0.22);
      background: cyan;
      width: calc(var(--size) * 0.8);
      aspect-ratio: 1.3;
      clip-path: polygon(100% 0, 60% 95%, 50% 100%, 40% 95%, 0 0);
    }
  }
`;

const LocationItem: React.FC<{ [index: string]: any }> = ({ ...props }) => {
  return (
    <LocationItemBase {...props}>
      {Array(9)
        .fill(0)
        .map((_, index) => (
          <div key={index} />
        ))}
    </LocationItemBase>
  );
};

const MilestoneSignBase = styled(Div)`
  &,
  &::after,
  &::before,
  & > div,
  & > div::after,
  & > div::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background: radial-gradient(yellow, orange);
    width: 4vh;
    aspect-ratio: 1;
    border-radius: 100%;
    translate: -50% -50%;
    box-shadow: 0px 0px 0.5vh 0px red;
  }
  &::after {
    transform: translateZ(2px) scale(0.9);
  }
  &::before {
    transform: translateZ(4px) scale(0.8);
  }
  & > div {
    transform: translateZ(6px) scale(0.7);
  }
  & > div::after {
    transform: translateZ(2px) scale(0.8);
  }
  & > div::before {
    transform: translateZ(4px) scale(0.6);
  }
`;
const MilestoneSign = () => {
  return (
    <MilestoneSignBase>
      <div />
    </MilestoneSignBase>
  );
};

const Milestone: React.FC<{ [index: string]: any }> = ({
  top,
  left,
  children,
  ...props
}) => {
  return (
    <Div
      position={"absolute"}
      top={`${top}%`}
      left={`${left}%`}
      cursor={"pointer"}
      {...props}
    >
      <MilestoneSign></MilestoneSign>
      <Div
        position={"absolute"}
        top={"1em"}
        left={"50%"}
        fontSize={"1.5em"}
        transform={"translate(-50%, 0%)"}
      >
        {children}
      </Div>
    </Div>
  );
};

const experienceData = [
  { year: "...", title: "Freelancer", position: { top: 10, left: 20 } },
  { year: "2019", title: "RBSGroup", position: { top: 26, left: 70 } },
  { year: "2020", title: "RBSGroup", position: { top: 42, left: 30 } },
  { year: "2021", title: "Shoefy", position: { top: 58, left: 60 } },
  { year: "2022", title: "DAOLabs", position: { top: 74, left: 30 } },
  { year: "2023", title: "Who ??", position: { top: 80, left: 70 } },
];

const Milestones = () => {
  const [hoverLocation, setHoverLocation] = useState<number>(
    experienceData.length
  );
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const _timeout = setTimeout(() => {
      setOffset((offset + 1) % 50);
    }, 10);
    return () => clearTimeout(_timeout);
  }, [offset]);
  return (
    <>
      <svg
        style={{ position: "absolute", top: "0px", left: "0px" }}
        width={"100%"}
        height={"100%"}
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points={experienceData
            .map((each) => `${each.position.left},${each.position.top}`)
            .join(" ")}
          stroke={"yellow"}
          strokeWidth={"0.3"}
          strokeDasharray="0.5, 0.5"
          strokeDashoffset={-offset / 50}
          fill={"none"}
        />
      </svg>
      {experienceData.map((each, index, array) => (
        <Milestone
          key={index}
          {...each.position}
          onMouseOver={() => setHoverLocation(index + 1)}
        >
          {each?.year}
        </Milestone>
      ))}
      <LocationItem
        top={`${experienceData[hoverLocation - 1].position.top}%`}
        left={`${experienceData[hoverLocation - 1].position.left}%`}
      />
    </>
  );
};

export default PageResumeExperience;
