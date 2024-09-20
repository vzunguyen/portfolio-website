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

        {contactsData.contacts.map((contact, index) => {
          let href = contact.value;
          let action;

          // Define actions based on contact type
          if (contact.type === "Email") {
            href = `mailto:${contact.value}`;
            action = (
              <a
                href={href}
                className="inline ml-2 max-[640px]:text-xs hover:text-slate-500"
              >
                {contact.value}
              </a>
            );
          } else if (contact.type === "Phone") {
            href = `tel:${contact.value}`;
            action = (
              <a
                href={href}
                className="inline ml-2 max-[640px]:text-xs hover:text-slate-500"
              >
                {contact.value}
              </a>
            );
          } else if (contact.type === "LinkedIn" || contact.type === "GitHub") {
            action = (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline ml-2 max-[640px]:text-xs hover:text-slate-500"
              >
                {contact.value}
              </a>
            );
          } else {
            action = (
              <span className="inline ml-2 max-[640px]:text-xs">
                {contact.value}
              </span>
            );
          }

          return (
            <div class="m-7" key={contact.id}>
              <div class="inline-block">
                <img
                  src={require(`../assets/contacts/${contact.type.toLowerCase()}.png`)}
                  alt={contact.type.toLowerCase()}
                  className="contact-icon"
                  class="inline h-5 w-5 max-[640px]:h-3 max-[640px]:w-3"
                />
                <li class="inline m-2 max-[640px]:hidden">{contact.type}:</li>
                {action}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
