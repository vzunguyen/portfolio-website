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
        <p class="flex flex-auto mt-3 p-3">
          I am a full stack developer with a background in finance and
          accounting. I have a passion for technology and problem solving. I am
          a quick learner and always looking to improve my skills. I am a team
          player and I am always willing to help others. I am excited to start
          my career in tech and I am looking forward to the challenges that lie
          ahead.
        </p>
      </div>
      <div class="block p-6 m-6 bg-white border border-gray-100 rounded-lg shadow-sm">
        <div class="flex flex-wrap mx-auto justify-center">
          <h1 class="animate-fade-right font-extrabold font-sans text-3xl bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
            Contacts
          </h1>
        </div>
        {contactsData.contacts.map((contacts) => (
          <div class="m-7" key={contacts.id}>
            <p>{contacts.type}:</p>
            <p>{contacts.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
