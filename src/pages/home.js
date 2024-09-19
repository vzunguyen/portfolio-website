import React from "react";
import contactsData from "../data/contacts.json";

export default function Home() {
  return (
    <div class="animate-fade-right">
      <div class="block p-6 m-6 bg-white border border-gray-100 rounded-lg shadow-sm">
        <div class="flex flex-wrap mx-auto justify-center">
          <h1 class="animate-fade-right font-extrabold font-sans text-3xl bg-gradient-to-r from-yellow-400 to-lime-400 bg-clip-text text-transparent">
            Who am I?
          </h1>
        </div>
        <p class="flex flex-auto mt-5 p-5">
          I am currently a second year student at Swinburne Univerisity of
          Technology, studying Computer Science with a major in Software
          Development. I am passionate about technology and problem-solving.
          Additionally, I am always eager to learn more and improve my skills as
          it is important to quickly adapt in this everchanging world of
          technology.
        </p>
      </div>
      <div class="block p-6 m-6 bg-white border border-gray-100 rounded-lg shadow-sm">
        <div class="flex flex-wrap mx-auto justify-center">
          <h1 class="animate-fade-right font-extrabold font-sans text-3xl bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
            Contacts
          </h1>
        </div>

        {contactsData.contacts.map((contacts) => {
          return (
            <div class="m-7" key={contacts.id}>
              <div class="inline-block">
                <img
                  src={require(`../assets/contacts/${contacts.type.toLowerCase()}.png`)}
                  alt={contacts.type.toLowerCase()}
                  className="contact-icon"
                  class="inline h-5 w-5 max-[640px]:h-3 max-[640px]:w-3"
                />
                <li class="inline m-2 max-[640px]:hidden">{contacts.type}:</li>
                <li class="inline ml-2 max-[640px]:text-xs">
                  {contacts.value}
                </li>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
