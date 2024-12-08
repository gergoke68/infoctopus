import React from "react";
import Image from "next/image";
import { teamMembers } from "@/config";

const About = () => {
  return (
    <section className="min-h-screen w-screen flex justify-center items-center flex-col py-36 max-[900px]:mb-20">
      <div className="bg-[#2F2D2D] max-w-[1300px] w-full h-fit rounded-3xl relative p-6 md:p-24 pt-14 pb-14 pr-6 md:pr-24 mt-5">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-3xl max-md:text-4xl text-center md:text-left md:w-1/2 font-black">
            Rólunk
            <div className="max-w-[700px] text-lg font-normal mt-4">
              <p>
                Az Infoctopus inc. 2024 szeptember kilencedikén alapult a Pollák
                Antal technikum Info I.-es termében egy projektmunka órán, mikor
                Robi, Gergő és Martin egyik osztályársa, Sándor kitalálta nekik
                a mára hírhedt nevet, az Infoctopust.
              </p>
              <p>
                Hármuk munkássága leírható az élet nagyszerű legnagyob
                harmoniájaként, amikor is elkezdték az első projektüket, A
                Levegő BéEnBé-t, a lakásberlő weboldalukat.
              </p>
            </div>
          </div>
          <div className="bg-[#1F1F1F] h-fit rounded-3xl p-5 mt-5 md:mt-0 md:ml-5 flex justify-center items-center">
            <div className="text-center">
              <Image
                src={"/logo.svg"}
                className="scale-x-[-1] select-none mx-auto"
                alt="logo"
                width={150}
                height={150}
              />
              <h1 className="text-3xl font-black">Infoctopus Inc.</h1>
              <p>2024 óta</p>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-10">
          <p className="text-lg font-normal">
            A weboldal a tervek szerint 2025. január 17.-re készül el sok kemény
            tervezés, forntend és backend munka után. További információk a
            főoldalon, a főprojektek résznél található meg.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 p-2 flex flex-col items-center"
            >
              <Image
                src={member.image}
                alt={member.alt}
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="font-black text-lg mt-2">{member.name}</p>
              <p className="text-sm font-extralight mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
