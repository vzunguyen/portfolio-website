import React from "react";
import expData from "../data/experiences.json";

export default function Experience() {
  return (
    <div class="animate-fade-right">
      <div class="flex flex-wrap mx-auto justify-center">
        <h1 class="animate-fade-right font-extrabold font-sans text-3xl bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          Experience
        </h1>
      </div>
      <div class="">
        {expData.experiences.map((exp) => (
          <div class="m-7" key={exp.id}>
            <h2 class="text-2xl pb-2">{exp.title}</h2>
            <p>
              <i>at {exp.company}</i>
            </p>
            <p>{exp.duration}</p>
            {exp.description.map((desc) => (
              <li class="mt-2">{desc}</li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
