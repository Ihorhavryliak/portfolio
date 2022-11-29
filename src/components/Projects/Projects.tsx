import { AiFillEye } from "react-icons/ai";
import { projectsInformation } from "../../data/project";
import { SectionAnimation } from "../../utils/SectionAnimation";
import "./Project.scss";

export const Projects = () => {
  const projectsVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 250 },
  };

 
  return (
    <section className="project_section" id="project">
      <SectionAnimation variant={projectsVariant}>
        <div className="projects__section__name">PORTFOLIO</div>
        <div className="projects__section__surname">PROJECTS</div>

        <div className="project__section__my__project">

        { projectsInformation.map((data, i) => {
          return (
            <div key={i + data.name} className="project__section__wrap__projects">
            <div className="project__photo">
              <img
                className="project__photo__img"
                src={data.img}
                alt="projectOne"
              />
              <a
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
                className="button__view btn btn-info"
              >
                <AiFillEye /> View
              </a>
            </div>
            <div className="project__name">{data.name}</div>
            <div className="project__description">
            {data.description}
            </div>
          </div>
          )
        })}
   
        </div>
      </SectionAnimation>
    </section>
  );
};
