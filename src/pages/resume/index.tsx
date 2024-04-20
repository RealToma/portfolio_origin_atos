import { Container, ContainerFluid } from "components/compBase";
import PageResumeBanner from "./resume.banner";
import PageResumeExperience from "./resume.experience";
import PageResumeStack from "./resume.stack";
import PageResumeSummary from "./resume.summary";

const PageResume = () => {
  return (
    <ContainerFluid>
      <Container col alignCenter>
        <PageResumeBanner />
      </Container>
      <PageResumeSummary />
      <Container col alignCenter>
        <PageResumeStack />
      </Container>
      <PageResumeExperience />
      {/* <PageResumeSummary /> */}
    </ContainerFluid>
  );
};

export default PageResume;
