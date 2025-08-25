/* eslint-disable tailwindcss/classnames-order */
import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left side */}
      <section className="hidden lg:flex w-2/5 bg-brand pt-[110px] justify-center">
        <div className="max-w-[630px] mx-10 max-h-[800px] flex flex-col">
          {/* Logo */}
          <div className="flex gap-4 items-center">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={66}
              height={66}
              className="h-auto"
            />
            <h1 className="text-white font-medium text-[36px]">StoreEase</h1>
          </div>

          {/* Text content */}
          <div className="space-y-5 text-white mt-[90px]">
            <h1 className="font-semibold text-[46px]">
              Organize your files in the most effective way
            </h1>
            <p className="text-lg">
              This is the place where you can keep your documents.
            </p>
          </div>

          {/* Decorative image */}
          <div className="mt-20">
            <Image
              src="/assets/images/files.png"
              alt="Files Illustration"
              width={342}
              height={342}
              className="transition-all hover:rotate-2 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Right side */}
      <section className="flex flex-1 flex-col bg-white p-4 lg:p-10 justify-center items-center">
        {/* Logo for small screens */}
        <div className="flex gap-4 items-center mb-20">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={66}
            height={66}
            className="h-auto"
          />
          <h1 className="font-medium text-3xl text-[#FA7275]">StoreEase</h1>
        </div>

        {/* Children wrapper */}
        <div className="w-full max-w-md px-4">{children}</div>
      </section>
    </div>
  );
};

export default Layout;
