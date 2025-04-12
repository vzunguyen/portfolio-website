import React from "react";
import contactsData from "../data/contacts.json";

export default function Home() {
    return (
        <div className="animate-fade-right">
            <div class="block p-6 m-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                <div class="flex flex-wrap mx-auto justify-center">
                    <h1 class="animate-fade-right font-extrabold font-sans text-3xl bg-gradient-to-r from-yellow-400 to-lime-400 bg-clip-text text-transparent">
                        Who am I?
                    </h1>
                </div>
                <p class="flex flex-auto mt-5 p-5">
                    I am currently a third year student at Swinburne University of
                    Technology, studying Computer Science with a major in Software
                    Development. Additionally, I'm also an intern at Education Network
                    Group, working in WhizKids Game branch, games for autistic children.
                    Due to my passion for problem-solving and understanding how things
                    work, I have made it my goal to become a software developer. Despite
                    being new to the industry, I am always eager to learn more and improve
                    my skills as I believe it is important to quickly adapt in this
                    everchanging world of technology.
                </p>
            </div>
        </div>
    );
}
