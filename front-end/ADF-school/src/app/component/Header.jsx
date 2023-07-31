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
    <div className="fixed z-40 bg-opacity-40 lg:h-28 lg:top-0 bg-navbar backdrop-blur-md">
      <header className="flex  w-screen items-center lg:p-10">
        <div className="flex  lg:w-1/2 pl-2">
          <Link href="/" className="text-2xl py-3 font-extrabold ">
            <span className="">
              AFRICA DIGITAL FARMING SCHOOL
            </span>
          </Link>
        </div>
        <nav className="hidden lg:flex w-1/2 gap-3 justify-around active:underline-offset-8">
          <Link href="/" className="active:text-veryTop">Acceuil</Link>
          <Link href="/adfSchool" className="active:text-veryTop"> ADF school</Link>
          <Link href="/formation" className="active:text-veryTop"> Formation</Link>
          <Link href="/contact" className="active:text-veryTop"> Contact</Link>
        </nav>
        <div className="lg:hidden flex w-1/2 justify-end pr-5 transition-all ease-in-out duration-150">
          {toggle ? (
            <FontAwesomeIcon
              className="hover:cursor-pointer z-50 "
              icon={faClose}
              color="#fff"
              size="2x"
              onClick={() => setToggle(false)}
            />
          ) : (
            <FontAwesomeIcon
              className="hover:cursor-pointer"
              icon={faBars}
              color="#fee"
              size="2x"
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className="bg-orange-400 bg-opacity-30 backdrop-blur-lg absolute w-screen h-screen top-0  right-0 z-49 flex md:justify-around md:items-center transition-all ease-in-out duration-150">
              <div className="flex flex-col text-slate-900 z-48 gap-10">
                <Link href="/" className="text-2xl py-3 pt-10 font-extrabold">
                  <span className=" drop-shadow-2xl pr-14">
                    AFRICA DIGITAL FARMING SCHOOL
                  </span>
                </Link>
                <Link href="/"> Acceuil</Link>
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
