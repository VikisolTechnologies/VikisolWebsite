import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsGrid from "@components/ProjectsGrid";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";

const Projects2 = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Client <span className=\"mil-thin\">Engagements</span><br> & <span className=\"mil-thin\">Case Studies</span>"} breadTitle={"Case Studies"} anchorLabel={"View case studies"} anchorLink={"#portfolio"} />

      <ProjectsGrid projects={props.projects} />
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Projects2;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}