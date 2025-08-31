/* eslint-disable tailwindcss/classnames-order */
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/">
        <div className="flex flex-row items-center gap-3">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={45}
            height={45}
            className="hidden h-auto lg:block"
          />
          <span className="hidden lg:inline font-poppins text-[#FA7275] text-2xl leading-9 font-medium tracking-normal">
            StoreEase
          </span>
        </div>
        <div>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={38}
            height={38}
            className="lg:hidden"
          />
        </div>
      </Link>
      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link href={url} key={name} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-items",
                  pathname === url && "shad-active"
                )}
              >
                <Image src={icon} alt={name} width={24} height={24} />
                <p>{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
