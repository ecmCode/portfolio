import ProjectBox from "./ProjectBox";
import type { ProjectType } from "@/types/ProjectType";

const ProjectContainer = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center place-items-center w-full lg:w-4/5 h-auto gap-10 lg:gap-20 p-10">
      {projects?.map((project) => (
        <ProjectBox key={project.name.split(" ").join("-")} {...project} />
      ))}
    </ul>
  );
};

export default ProjectContainer;
