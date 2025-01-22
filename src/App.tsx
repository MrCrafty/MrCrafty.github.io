import { Header } from "../components/Header";
import Education from "../components/Education";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Cursor from "../components/Cursor";

export type EducationInfo = {
  degree: string;
  university: string;
  description: string;
  start_year: number;
  end_year: number;
  skills: { icon: string; title: string }[];
};
export type AchievementsInfo = {
  name: string;
  description: string;
};
export type PageInfo = {
  name: string;
  url: string;
};
export type ProjectsInfo = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};
export type PersonalInfo = {
  name: string;
  designation: string;
  description: string;
  image_url: string;
  skills: string[];
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
};
function App() {
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/MrCrafty/jsonserver/main/db.json"
    ).then(async (data) => {
      const res = await data.json();
      console.log(res);
      setAchievementsList(res.achievements);
      setEducationList(res.education);
      setProjectsList(res.projects);
      setPersonalData(res.personalData);
    });
  }, []);
  const [EducationList, setEducationList] = useState<EducationInfo[]>([]);
  const [AchievementsList, setAchievementsList] = useState<AchievementsInfo[]>(
    []
  );
  const [ProjectsList, setProjectsList] = useState<ProjectsInfo[]>([]);
  const [personalData, setPersonalData] = useState<PersonalInfo>();
  const pagesList: PageInfo[] = [
    { name: "Education & Acheivements", url: "#education" },
    { name: "Projects", url: "#projects" },
    { name: "Contact Me", url: "#contact-me" },
  ];
  return (
    <div className="h-screen overflow-y-scroll">
      <Header pagesList={pagesList} personalData={personalData!} />
      <Education
        EducationList={EducationList}
        AchievementList={AchievementsList}
      />
      <Projects ProjectsList={ProjectsList} />
      <ContactMe />
      <Cursor />
      <Footer />
    </div>
  );
}

export default App;
