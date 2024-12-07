"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="w-full h-fit px-10 max-md:px-3 pt-10 flex justify-between items-center absolute top-0">
      <Link href={"/"} className="flex gap-10 max-md:gap-3 items-center">
        <Image
          src={"/logo.svg"}
          className="scale-x-[-1] select-none"
          alt="logo"
          width={70}
          height={71}
        />
        <div className=" text-3xl max-md:text-2xl font-black">Infoctopus</div>
      </Link>
      <div className="max-[750px]:hidden">
        <ul className="flex gap-5 text-3xl items-center">
          <li>
            <Link
              href={"/contact"}
              className={cn({ "text-slate-500": pathname === "/contact" })}
            >
              Elérhetőségek
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={cn({ "text-slate-500": pathname === "/about" })}
            >
              Rólunk
            </Link>
          </li>
        </ul>
      </div>
      <Sheet>
        <SheetTrigger className="min-[750px]:hidden">
          <Menu size={60} />
        </SheetTrigger>
        <SheetContent className="dark">
          <SheetHeader>
            <SheetTitle>Navigáció</SheetTitle>
            <SheetDescription>
              <span className="flex gap-5 text-3xl items-start mt-10 flex-col">
                <span>
                  <Link
                    href={"/"}
                    className={cn({ "text-slate-500": pathname === "/" })}
                  >
                    Főoldal
                  </Link>
                </span>
                <span>
                  <Link
                    href={"/contact"}
                    className={cn({
                      "text-slate-500": pathname === "/contact",
                    })}
                  >
                    Elérhetőségek
                  </Link>
                </span>
                <span>
                  <Link
                    href={"/about"}
                    className={cn({ "text-slate-500": pathname === "/about" })}
                  >
                    Rólunk
                  </Link>
                </span>
              </span>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
