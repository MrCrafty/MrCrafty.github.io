import { GraduationCap, Code } from "lucide-react";
import { AchievementsInfo, EducationInfo } from "../src/App";
import Achievements from "./Achievements";

const Education = (props: {
  EducationList: EducationInfo[];
  AchievementList: AchievementsInfo[];
}) => {
  return (
    <section
      id="education"
      className="snap-start h-screen bg-gray-900 flex items-center relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(100,50,255,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold mb-16 flex items-center text-white">
          <GraduationCap className="mr-3 text-purple-400" size={40} />
          Education & Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {props.EducationList.map((data, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {data.degree}
                </h3>
                <p className="text-purple-400 mb-2">
                  {`${data.university} | ${data.start_year} - ${data.end_year}`}
                </p>
                <p className="text-gray-300 mb-4">{data.description}</p>
                <ul className="text-gray-400 space-y-2">
                  {data.skills.map((data, index) => (
                    <li className="flex items-center" key={index}>
                      <Code size={16} className="mr-2 text-purple-400" />{" "}
                      {data.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <Achievements AchievementsList={props.AchievementList} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
