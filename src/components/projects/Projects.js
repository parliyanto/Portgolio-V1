import React from 'react'
import Title from '../layouts/Title'
import { portfolioOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
        <a href="https://www.solusimitratama.com"><ProjectsCard
          title="Company Profile Website"
          des="This website was created using CMS Wordpress"
          des2=" Note : To see the project directly, please click my card"
          src={portfolioOne}
        /></a>
        <a href="https://i-solution.co.id/"><ProjectsCard
          title="Company Profile Website"
          des="This website was created using React js, Bootstrap 5"
          des2=" Note : To see the project directly, please click my card"
          src={projectTwo}
        /></a>
        <a href="https://e-commerce-v1-one.vercel.app/"><ProjectsCard
          title="E-Commerce Website"
          des="This website was creates using React JS, Tailwind UI"
          des2=" Note : To see the project directly, please click my card"
          src={projectThree}
        /></a>
      </div>
    </section>
  );
}

export default Projects
