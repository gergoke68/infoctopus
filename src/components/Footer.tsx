import { InstagramIcon, Mail, Smartphone } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { socials } from "@/config";

const Footer = () => {
  const pages = [
    { name: "Főoldal", path: "/" },
    { name: "Elérhetőségek", path: "/about" },
    { name: "Rólunk", path: "/contact" },
  ];

  const creators = ["Gombár Martin", "Fabó Dudás Róbert", "Gémes Gergő"];

  return (
    <footer className="w-full min-h-[350px] h-fit  bg-[#2F2D2D] pt-10 flex flex-col justify-between">
      <div className="flex max-[1600px]:flex-col  max-[1600px]:mb-10 justify-between mx-20">
        <div className="flex max-md:flex-wrap gap-20 max-[1600px]:gap-8 max-[1600px]:mb-20">
          <div className="flex flex-col">
            <div className="mb-2 text-xl">Oldalak</div>
            <div className="flex flex-col gap-3">
              {pages.map((page) => {
                return (
                  <Link href={page.path} key={page.name}>
                    {page.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className="mb-2 text-xl">Elérhetőségek</div>
            <div className="flex flex-col gap-3">
              {socials.map((social) => {
                return (
                  <div className="flex gap-2" key={social.title}>
                    <social.icon color={social.color} />
                    {social.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className="mb-2 text-xl">Készítők</div>
            <div className="flex flex-col gap-3">
              {creators.map((creator) => {
                return (
                  <div className="gap-2" key={creator}>
                    {creator}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="max-w-[800px] w-full">
          <div className="mb-2 text-xl">Gyakori Kérdések</div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Geró tényleg 160cm?</AccordionTrigger>
              <AccordionContent>
                Igen, Geró tényleg 160cm, és kódoló tudása se nagyobb mint a
                magassága.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Martin tényleg meleg?</AccordionTrigger>
              <AccordionContent>
                Nem. Martin nem meleg akarmit is hiszel.{" "}
                <span className="!text-[#2F2D2D]">
                  (ne hidd el, tényleg meleg)
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Robi volt Vietnámban?</AccordionTrigger>
              <AccordionContent>
                Igen, a közismert kép is bizonyítja, amin látszodik a trauma a
                háborúból.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="w-full h-10 bg-[#1D1D1D] flex justify-center items-center">
        Infoctopus Inc. ©2024
      </div>
    </footer>
  );
};

export default Footer;
