import React from "react";
import projectsData from "../data/projects.json";

export default function Projects() {
    return (
        <div className="animate-fade-right">
            <div class="flex flex-wrap mx-auto justify-center">
                <h1 class="animate-fade-right font-extrabold font-sans text-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                    Projects
                </h1>
            </div>
            {projectsData.projects.map((project) => (
                <div className="p-6 m-0">
                    <div
                        className="bg-white border w-200 p-5 mx-auto border-gray-100 rounded-lg shadow-sm"
                        key={project.id}
                    >
                        <div className="text-wrap">
                            <div className="inline-block">
                                <h class="font-semibold text-xl mr-3 leading-5">
                                    <a href={project.link} class="hover:text-slate-500">
                                        {project.title}
                                    </a>
                                </h>
                                <div class="text-wrap max-[640px]:hidden">
                                    {project.skills.map((skill, index) => (
                                        <p
                                            class="inline text-wrap text-sm text-gray-600 font-mono leading-5 align-middle mr-2"
                                            key={skill}
                                        >
                                            {skill}
                                            {index < project.skills.length - 1 ? "," : "."}
                                        </p>
                                    ))}
                                </div>
                                <div className="min-[640px]:hidden">
                                    {project.skills.map((skill) => (
                                        <p className="text-xs text-gray-600 font-mono mr-2" key={skill}>
                                            {skill}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <p className="text-wrap text-sm text-gray">{project.state}</p>
                            <p className="mt-2">{project.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
