import React from "react";
import { socials } from "@/config";

const Contact = () => {
  return (
    <section className="min-h-screen w-full flex justify-center items-center flex-col pt-[80px] px-4 sm:px-6 lg:px-0">
      <div className="bg-[#2F2D2D] max-w-[500px] w-full rounded-3xl relative p-4 sm:p-6 lg:p-10 pb-8 sm:pb-10 lg:pb-14 mt-5">
        <div className="flex flex-shrink-0">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center w-full">
            Elérhetőségek
          </div>
        </div>
        <div className="flex flex-col mt-8 sm:mt-10 lg:mt-16">
          {socials.map((social, index) => (
            <div key={index} className="mb-3 sm:mb-4">
              <div className="flex items-center">
                <span>
                  <social.icon color={social.color} />
                </span>
                <span className="text-base sm:text-lg lg:text-xl font-semibold pl-2 sm:pl-3">
                  {social.title}
                </span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg font-semibold m-0 pl-8 sm:pl-10 lg:pl-14">
                {social.value}
              </p>
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2 pt-12 sm:pt-16 lg:pt-24">
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
        <div className="pt-3 sm:pt-4">
          <span className="text-xs sm:text-sm lg:text-base text-muted-foreground">
            Ezzel hozzájárulsz ahhoz, hogy marketingcélú üzeneteket küldjünk
            neked.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
