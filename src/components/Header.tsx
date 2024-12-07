import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-fit px-10 pt-10 flex justify-between items-center absolute top-0">
      <Link href={"/"} className="flex gap-10 items-center">
        <Image
          src={"/logo.svg"}
          className="scale-x-[-1]"
          alt="logo"
          width={70}
          height={71}
        />
        <div className=" text-3xl font-black">Infoctopus</div>
      </Link>
      <div className="">
        <ul className="flex gap-5 text-3xl items-center">
          <li>
            <Link href={"/contact"}>Elérhetőségek</Link>
          </li>
          <li>
            <Link href={"/about"}>Rólunk</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
