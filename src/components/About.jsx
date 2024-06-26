import React from 'react';
import TechBadge from './TechBadge';
import { useThemeContext } from '../contexts/ThemeContext';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaPython, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiRedux, SiNextdotjs, SiExpress, SiTailwindcss, SiJquery, SiAdobephotoshop } from "react-icons/si";

const techStack = [
  { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  { Icon: FaJsSquare, name: "JavaScript", color: "#F7DF1E" },
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: SiRedux, name: "Redux", color: "#764ABC" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#000000", darkColor: "white" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
  { Icon: FaNodeJs, name: "Node.js", color: "#5FA04E" },
  { Icon: SiExpress, name: "Express", color: "#000000", darkColor: "white" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: FaPython, name: "Python", color: "#3776AB" },
  { Icon: FaGitAlt, name: "Git", color: "#F05032" },
  // { Icon: SiJquery, name: "jQuery", color: "#0769AD" },
  // { Icon: FaFigma, name: "Figma", color: "#F24E1E" },
  // { Icon: SiAdobephotoshop, name: "Photoshop", color: "#31A8FF" }
];

const IMAGE_URL = "/real-me.jpg";

const About = () => {
  const { setColor, dynamicColor } = useThemeContext();


  return (
    <div id='about' className="min-h-screen flex items-center justify-center p-8 transition-all duration-500">
      <div className="max-w-4xl w-full bg-card bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-12 transition-all duration-500 ease-in-out hover:shadow-3xl hover:scale-105">
        <h1 className="text-5xl font-bold text-primary mb-8">
          Hey, I'm <span className={`${dynamicColor ? 'text-dynamic' : 'text-cta'} font-light`}>John Wright</span> 👋
        </h1>
        
        <div className="flex flex-col md:flex-row items-start mb-12">
          <img 
            src={IMAGE_URL}
            alt="John Wright" 
            className="w-48 h-48 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8 transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="flex-1">
            <p className="text-lg text-ptag mb-4">
              I'm a passionate full-stack developer with a keen eye for improving UX. My journey in tech so far has afforded me firsthand experience across the development lifecycle - from project management and design, to crafting sleek UIs, to architecting APIs and robust backend systems.
            </p>
            <p className="text-lg text-ptag">
              When I'm not coding, you'll often find me playing or producing music, trying out new recipes in the kitchen, enjoying the great outdoors, and exploring the latest tech trends.
            </p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          My Tech Stack
        </h2>
        
        <div className="flex flex-wrap justify-center">
          {techStack.map(({ Icon, name, color, darkColor }) => (
            <TechBadge 
              key={name}
              Icon={Icon} 
              name={name} 
              color={color}
              darkColor={darkColor}
              onClick={() => setColor(color)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;