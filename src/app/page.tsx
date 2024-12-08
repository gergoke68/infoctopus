"use client";
import SiteLink from "@/components/SiteLink";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Home = () => {
  const sectionRef = useRef(null);
  const mainTextRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-float-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (mainTextRef.current) {
      mainTextRef.current.classList.add("animate-float-in");
    }

    if (subTextRef.current) {
      subTextRef.current.classList.add("animate-float-in");
    }

    if (buttonRef.current) {
      buttonRef.current.classList.add("animate-float-in");
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const Links = [
    {
      name: "Levegő BéEnBé",
      description: "Development oldal",
      image: "/flood.svg",
      link: "https://berles.gemes.eu/ ",
    },
    {
      name: "Figma",
      description: "Figma - dizájn",
      image: "/figma_logo.svg",
      link: "https://www.figma.com/design/PG29cx0CPSSPaUGA1EnXQb/Lakásbérlés?node-id=177-111&t=kgUvxpevGtyb6EFS-1",
    },
    {
      name: "Notion",
      description: "Notion - task manager",
      image: "/notion.svg",
      link: "https://fuschia-bonsai-488.notion.site/Lak-sb-rl-oldal-99198df203fc43aa9efdd9b9e0ebeb21?pvs=4",
    },
    {
      name: "GitHub",
      description: "Github - forráskód",
      image: "/github.svg",
      link: "https://github.com/Kedves1/Lakasberles/",
    },
  ];
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center flex-col gap-0">
        <div
          ref={mainTextRef}
          className="text-[120pt] max-lg:text-[90pt] max-sm:text-[35pt] font-semibold"
        >
          Infoctopus
        </div>
        <div ref={subTextRef} className="text-2xl max-md:text-xl text-center">
          Forradalmi weboldalak a jövő technikusaitól
        </div>
        <Link
          ref={buttonRef}
          href={"/about"}
          className="bg-[#4043FC] py-2 px-4 rounded-xl mt-10 select-none"
        >
          Tudj meg többet
        </Link>
      </main>
      <section
        ref={sectionRef}
        className="min-h-screen w-screen flex justify-center items-center flex-col pt-[80px] max-[900px]:mb-20"
      >
        <div className="bg-[#2F2D2D] max-w-[900px] w-full h-fit rounded-3xl relative p-10 pb-14 mt-5">
          <div className="flex flex-shrink-0 max-[900px]:flex-col">
            <div className="absolute top-[-90px] left-0 text-7xl max-md:text-4xl max-[900px]:text-center max-[900px]:w-full font-semibold">
              Fő projektünk
            </div>
            <div className="max-w-[400px]">
              <h1 className="text-3xl font-semibold">Levegő BéEnBé</h1>
              <p>
                A projekt 2024. szeptember 17-én indult a HSZC Szentesi Pollák
                Antal Technikum Info I.-es terméből projektmunka órán.
              </p>
              <p>
                A weboldal a Next.js keretrendszeren fut PayloadCMS backend-el
                ami segítségével egy gyorsan és jól működkő lakásberlő weboldal
                jött létre, az AirBnB nevű híresebb lakásbérlő oldal mintájára.
              </p>
              <p>
                A weboldal 2025. január 17.-én készül el, addig az alábbi
                linkeken elérhető a fejlesztési folyamat:
              </p>
            </div>

            <div className="flex-shrink-0">
              <Image
                src={"/project-image.png"}
                className="rounded-3xl flex-shrink-0"
                alt="airbnb"
                width={400}
                height={300}
              />
            </div>
          </div>

          <div className="flex justify-between mt-10 max-[900px]:flex-col max-[900px]:items-center">
            {Links.map((link) => {
              return (
                <SiteLink
                  image={link.image}
                  name={link.image}
                  description={link.description}
                  key={link.name}
                  link={link.link}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
