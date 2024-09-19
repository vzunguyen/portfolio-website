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
      <div class="max-w-screen-2xl flex flex-wrap items-center justify-evenly mx-auto p-10">
        {skillsData.skills.map((skill) => (
          <div class="inline-block">
            <div key={skill.id}>
              <div class="flex">
                <article class="p-2 m-2">
                  <div class="justify-center">
                    <h2 class="font-bold align-top justify-center">
                      {skill.name}
                    </h2>
                    {skill.properties.map((property) => (
                      <p key={property}>{property}</p>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
