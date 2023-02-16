import React from "react";
import "./Skills.scss";
import { SectionAnimation } from "../../utils/SectionAnimation";
import { skills } from "../../data/skills";

export const Skills = React.memo(() => {
  return (
    <section className="skills__section" id="skills">
      <SectionAnimation>
        <div className="block__name_section">
          <div className="block__technologies__name">Technologies</div>
          <div className="block__my_skills__name">SKILLS</div>
        </div>
        <div className="block__my__skills">
          {skills.map((m, i) => {
            return (
              <div key={i + m.name} className="block__skills">
                {m.icon}
                <div className="block__skills_name">{m.name}</div>
                <div className="block__skills_description">{m.description}</div>
              </div>
            );
          })}
        </div>
      </SectionAnimation>
    </section>
  );
});
