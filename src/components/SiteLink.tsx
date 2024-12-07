import Image from "next/image";
import Link from "next/link";
import React from "react";

const SiteLink = ({
  name,
  description,
  image,
  link,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className=" size-44 rounded-xl bg-[#1F1F1F] flex justify-center items-center relative"
    >
      <Image src={image} alt={name} width={70} height={70} />
      <div className="absolute -bottom-7 text-center w-[300px] text-lg font-semibold">
        {description}
      </div>
    </Link>
  );
};

export default SiteLink;
