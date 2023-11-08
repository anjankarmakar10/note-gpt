"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50  bg-white shadow dark:bg-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <Link href="/notes" className="flex items-center gap-1 font-bold">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <span>
            Note<span className=" text-lime-600">GPT</span>
          </span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem asChild>
              <Link href="/notes">
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  Notes
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem asChild>
              <UserButton afterSignOutUrl="/" />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
export default Navbar;
