import React from "react";
import { socials } from "@/config";

const Contact = () => {
  return (
    <section className="h-screen w-screen flex justify-center items-center flex-col pt-[80px]">
      <div className="bg-[#2F2D2D] max-w-[500px] h-[520px] w-full rounded-3xl relative p-10 pb-14 mt-5">
        <div className="flex flex-shrink-0">
          <div className="text-4xl font-semibold text-center w-full">
            Elérhetőségek
          </div>
        </div>
        <div className="flex flex-col mt-16">
          {socials.map((social, index) => (
            <div key={index}>
              <div className="flex">
                <span>
                  <social.icon color={social.color} />
                </span>
                <span className="text-xl font-semibold pl-3">
                  {social.title}
                </span>
              </div>
              <p className="text-lg font-semibold m-0 pl-14">{social.value}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2 pt-24">
          <input
            type="email"
            placeholder="Email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-black"
          />
          <button
            type="submit"
            className="bg-white text-black hover:bg-white/80 h-10 px-4 py-2 rounded-md text-sm font-medium"
          >
            Feliratkozás
          </button>
        </div>
        <div>
          <span className="text-sm text-muted-foreground">
            Ezzel hozzájárulsz ahhoz, hogy marketingcélú üzeneteket küldjünk
            neked.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
