import Link from "next/link";
import style from "./ProjectBox.module.css";
import type { ProjectType } from "@/types/ProjectType";

const ProjectBox = ({
  name,
  desc,
  imageURL,
  codeURL,
  demoURL,
}: ProjectType) => {
  return (
    <li className="card card-project">
      <div className={style.box}>
        <h2>{name}</h2>
        <div className="p-10">
          <p>{desc}</p>
        </div>
        <div className={style.btns}>
          <Link
            href={demoURL || "/"}
            target="_blank"
            className="btn btn-action"
          >
            Demo
          </Link>
          <Link
            href={codeURL || "/"}
            target="_blank"
            className="btn btn-secondary"
          >
            Code
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ProjectBox;
