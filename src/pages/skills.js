import React from "react";
import skillsData from "../data/skills.json";

// skill.properties - array - display seperately each property

export default function Skills() {
  return (
    <div class="animate-fade-right">
      <div class="flex flex-wrap mx-auto justify-center">
        <h1 class="animate-fade-right font-extrabold font-sans text-3xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          My Skills
        </h1>
      </div>
      {skillsData.skills.map((skill) => (
        <div key={skill.id}>
          <h2 class="font-bold">{skill.name}</h2>
          <ul>
            {skill.properties.map((property) => (
              <li key={property}>{property}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
