import React from "react";
import projectsData from "../data/projects.json";

export default function Projects() {
  return (
    <div class="animate-fade-right">
      <div class="flex flex-wrap mx-auto justify-center">
        <h1 class="animate-fade-right font-extrabold font-sans text-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
          Projects
        </h1>
      </div>
      {projectsData.projects.map((project) => (
        <div class="p-6 m-0">
          <div
            class="bg-white border w-200 p-5 mx-auto border-gray-100 rounded-lg shadow-sm"
            key={project.id}
          >
            <div class="text-wrap">
              <div class="inline-block">
                <h class="font-semibold text-xl mr-3 leading-5">
                  {project.title}
                </h>
                {project.skills.map((skill, index) => (
                  <li
                    class="inline text-sm text-gray-600 font-mono leading-5 align-middle mr-2"
                    key={skill}
                  >
                    {skill}
                    {index < project.skills.length - 1 ? "," : "."}
                  </li>
                ))}
              </div>
              <p class="text-sm text-gray">{project.state}</p>
              <a href={project.link} class="text-sm hover:text-slate-500">
                {project.link}
              </a>
              <p class="mt-2">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
