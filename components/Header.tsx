import { Github, Linkedin, Mail } from "lucide-react";
import { PersonalInfo } from "../src/App";

export const Header = (props: {
  pagesList: { name: string; url: string }[];
  personalData: PersonalInfo;
}) => {
  return (
    <section className="snap-start h-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white flex items-center relative overflow-hidden">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-20 font-light text-xl z-50">
        <ul className="flex gap-10  *:border-e-2 *:pe-10 ">
          {props.pagesList.map((data, index) => (
            <li className="last:border-e-0" key={index}>
              <a href={data.url} className="hover:text-purple-300 duration-300">
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,50,255,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-purple-400 shadow-2xl relative">
            <img
              src="image.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              {props?.personalData?.name}
            </h1>
            <p className="text-2xl mb-4 text-gray-300">
              {props?.personalData?.designation}
            </p>
            <p className="text-xl mb-8 text-gray-400">
              {props?.personalData?.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              {props?.personalData?.skills?.map((data, index) => {
                return (
                  <span
                    className="px-4 py-2 bg-purple-800/50 rounded-full text-purple-200"
                    key={index}
                  >
                    {data}
                  </span>
                );
              })}
            </div>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a
                href={props?.personalData?.links?.github}
                className="text-gray-300 hover:text-purple-400 transition-all transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href={props?.personalData?.links?.linkedin}
                className="text-gray-300 hover:text-purple-400 transition-all transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a
                href={`mailto:${props?.personalData?.links?.email}`}
                className="text-gray-300 hover:text-purple-400 transition-all transform hover:scale-110"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
