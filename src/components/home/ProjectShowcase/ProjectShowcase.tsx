import Link from "next/link";
import projects from "@/assets/projects.json";
import Container from "../Container/Container";
import Subtitle from "../Titles/Subtitle";
import style from "./ProjectShowcase.module.css";
import type { ProjectType } from "@/types/ProjectType";

const ProjectShowcase = () => {
  return (
    <>
      <Subtitle>Projects</Subtitle>
      <Container variant="2/3">
        <ul className={style.list}>
          {(projects as ProjectType[])?.map((project) => (
            <li key={project.name.replace(" ", "-")} className={style.item}>
              <h4 className={style.title}>{project.name}</h4>
              <p className={style.description}>{project.desc}</p>
              <div className={style.buttons}>
                <Link
                  href={project.demoURL}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Demo
                </Link>
                <Link
                  href={project.codeURL}
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Code
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default ProjectShowcase;
