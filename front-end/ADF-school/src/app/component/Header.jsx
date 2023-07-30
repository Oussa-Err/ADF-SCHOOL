"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed">
      <header className="flex bg-transparent h-24 w-screen items-center ">
        <div className="flex w-1/2 pl-2">
          <Link href="/" className="text-2xl font-extrabold ">
            AFRICA DIGITAL FARMING SCHOOL
          </Link>
        </div>
        <nav className="hidden lg:flex w-1/2 gap-3 justify-around">
          <Link href="/">Acceuil</Link>
          <Link href="/adfSchool"> ADF school</Link>
          <Link href="/formation"> Formation</Link>
          <Link href="/contact"> Contact</Link>
        </nav>
        <div className="absolute top-6 right-7 lg:hidden">
          {toggle ? (
            <FontAwesomeIcon
              className="hover:cursor-pointer"
              icon={faClose}
              color="gray"
              size="2x"
              onClick={() => setToggle(false)}
            />
          ) : (
            <FontAwesomeIcon
              className="hover:cursor-pointer"
              icon={faBars}
              color="gray"
              size="2x"
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className="bg-orange-400 bg-opacity-35 w-screen h-screen absolute right-0 z-50 flex justify-around items-center ">
              <div className="flex flex-col text-slate-900 z-50 gap-10">
                <Link href="/">Acceuil</Link>
                <Link href="/adfSchool"> ADF school</Link>
                <Link href="/formation"> Formation</Link>
                <Link href="/contact"> Contact</Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
