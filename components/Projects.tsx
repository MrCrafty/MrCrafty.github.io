import { Briefcase, ExternalLink } from "lucide-react";
import { ProjectsInfo } from "../src/App";

const Projects = (props: { ProjectsList: ProjectsInfo[] }) => {
  return (
    <section
      id="projects"
      className="snap-start h-screen bg-gray-800 flex items-center overflow-y-auto relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(100,50,255,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-6 py-12 relative">
        <h2 className="text-4xl font-bold mb-16 flex items-center text-white">
          <Briefcase className="mr-3 text-purple-400" size={40} />
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.ProjectsList.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-purple-900/30 text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 flex items-center group-hover:translate-x-2 transition-transform"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
