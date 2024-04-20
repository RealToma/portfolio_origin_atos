import { Div } from "components/compBase";
import { HexIconBtn } from "components/element/btn.hexIconBtn";
import {
  IconDiscord,
  IconGithub,
  IconGmail,
  IconTelegram,
} from "components/icon";
import { Nuclear } from "./comp.resume";

const PageResumeBanner = () => {
  return (
    <Div
      alignCenter
      flexDirection={["column-reverse", "column-reverse", "row", "row"]}
      width={"100%"}
      minHeight={"100vh"}
    >
      <Div
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
      >
        <BannerBg />
        <Div
          position={"absolute"}
          bottom={"0px"}
          left={["50%", "50%", "77%"]}
          background={"linear-gradient(#5fa6f811, transparent)"}
          fontFamily={"art2"}
          fontSize={"80vh"}
          lineHeight={"1em"}
          color={"transparent"}
          transform={"translateX(-50%)"}
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "1vw #5fcaf820",
            WebkitMaskImage:
              "repeating-linear-gradient(-30deg, black 0px 5px, transparent 5px 10px)",
          }}
        >
          S
        </Div>
      </Div>
      <Div
        col
        flex={["5", "5", "3"]}
        alignCenter
        width={["100%", "100%", "0px", "0px"]}
        fontSize={["40px", "40px", "60px", "80px"]}
      >
        <Div
          mb={"1em"}
          fontFamily={"art1"}
          fontSize={["40px", "40px", "60px", "80px"]}
          textAlign={"center"}
          fontWeight={"bold"}
          filter={"drop-shadow(-0px 0px 5px #5fc9f8)"}
          color={"#0e1118"}
        >
          ThOmaS Ken
        </Div>
        <Div
          background={"#5fc9f8"}
          fontFamily={"art2"}
          fontSize={["40px", "40px", "60px", "80px"]}
          color={"transparent"}
          textAlign={"center"}
          filter={
            "drop-shadow(-5px 5px 2px black) drop-shadow(-5px 5px 10px black)"
          }
          style={{ WebkitBackgroundClip: "text" }}
        >
          Senior Blockchain, Fullstack Developer
        </Div>
        <Div
          my={"0.4em"}
          background={
            "repeating-linear-gradient(90deg, transparent 2px, #5fcaf85c 2px 4px, transparent 4px 6px)"
          }
          width={"70%"}
          height={"0.3em"}
          style={{ WebkitMaskImage: "radial-gradient(black, transparent 70%)" }}
        />
        <Div
          justifyContent={"center"}
          gridGap={["0.3em", "0.3em", "0.5em", "0.5em"]}
          fontSize={["24px", "24px", "32px"]}
        >
          <HexIconBtn icon={<IconGithub />}></HexIconBtn>
          <HexIconBtn icon={<IconTelegram />}></HexIconBtn>
          <HexIconBtn icon={<IconDiscord />}></HexIconBtn>
          <HexIconBtn icon={<IconGmail />}></HexIconBtn>
        </Div>
      </Div>
      <Div
        flex={["4", "4", "2"]}
        justifyCenter
        width={["100%", "100%", "0px", "0px"]}
      >
        <Nuclear width={["70%", "70%", "60%", "60%"]} />
      </Div>
    </Div>
  );
};

const BannerBg = () => {
  return (
    <svg
      width="90vw"
      height="90vh"
      viewBox="0 0 1121 682"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.1" filter="url(#filter0_f)">
        <path
          d="M247 586.501C162.2 619.301 117 540.168 105 496.501C116.5 479.168 158.5 430.201 234.5 373.001C329.5 301.501 280 223.001 354.5 141.001C429 59.001 581.554 248.652 686 209.001C1010 86.001 915.855 266.784 949.5 357.001C996 499.001 1030.37 559.555 963.5 580.501C873.108 608.817 626 349.501 542.5 326.001C459 302.501 353 545.501 247 586.501Z"
          fill="#5fa6f8"
        />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="-15"
          y="0.203125"
          width="1135.85"
          height="714.054"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="60"
            result="effect1_foregroundBlur"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export default PageResumeBanner;
