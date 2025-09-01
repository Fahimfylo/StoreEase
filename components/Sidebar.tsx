/* eslint-disable no-unused-vars */
"use client";
/* eslint-disable tailwindcss/classnames-order */
import { avatarPlaceholderUrl, navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, email }: Props) => {
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
            <Link href={url} key={name}>
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active"
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active"
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Image
        src="/assets/images/files-2.png"
        alt="logo"
        width={506}
        height={418}
        className="w-full"
      />
      <div className="sidebar-user-info">
        <Image
          src={avatarPlaceholderUrl}
          alt="Avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
