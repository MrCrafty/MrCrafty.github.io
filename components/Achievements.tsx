import { Award } from "lucide-react";
import { AchievementsInfo } from "../src/App";

const Achievements = (props: { AchievementsList: AchievementsInfo[] }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
        <Award className="mr-3 text-purple-400" />
        Achievements
      </h3>
      <div className="space-y-6">
        {props.AchievementsList.map((data, index) => (
          <div
            className="bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500"
            key={index}
          >
            <h4 className="text-lg font-semibold text-purple-300">
              {data.name}
            </h4>
            <p className="text-gray-400">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
