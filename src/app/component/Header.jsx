"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [dropToggle, setDropToggle] = useState(false);

  return (
    <div className="fixed z-40 bg-opacity-40 lg:h-28 lg:top-0 bg-navbar backdrop-blur-md">
      <header className="flex  w-screen items-center lg:p-10">
        <div className="flex  lg:w-1/2 pl-2 font-extrabold ">
          <Link href="/" className="text-xl sm:text-2xl py-3">
            <span className="">AFRICA DIGITAL FARMING SCHOOL</span>
          </Link>
        </div>
        <nav className="hidden lg:flex relative w-1/2 gap-3 justify-around text-[1.2rem] font-bold font-mono">
          <Link href="/" className="hover:text-veryTop">
            Acceuil
          </Link>
          {dropToggle ? (
            <Link
              href=""
              className="hover:text-veryTop z-40 relative transition duration-300 ease-in-out"
              onClick={() => setDropToggle(false)}
            >
              ADF school
            </Link>
          ) : (
            <Link
              href=""
              className="hover:text-veryTop z-40 relative transition duration-300 ease-in-out"
              onClick={() => setDropToggle(true)}
            >
              ADF school
            </Link>
          )}
          {dropToggle && (
            <>
              <div
                onClick={() => setDropToggle(false)}
                className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 "
              ></div>
              <div className={`lg:absolute top-10 drop-shadow-lg bg-gray-200 rounded-lg p-6 flex flex-col transition-all duration-300 transform ${
              dropToggle ? 'scale-y-100' : 'scale-y-0'
            } origin-top`}
              >
                <Link
                  href="/adfSchool/aboutus"
                  className="hover:text-navbar text-gray-800 font-serif relative p-3"
                >
                  Qui sommes Nous?
                </Link>
                <Link
                  href="/adfSchool/organisation"
                  className="hover:text-navbar text-gray-800 font-serif relative p-3"
                >
                  Organisation
                </Link>
                <Link
                  href="/adfSchool/gouvernance"
                  className="hover:text-navbar  text-gray-800 font-serif relative p-3"
                >
                  Gouvernance
                </Link>
                <Link
                  href={`/adfSchool/[${news.id}]`}
                  className="hover:text-navbar  text-gray-800 font-serif relative p-3"
                >
                  Nos actualités
                </Link>
              </div>
            </>
          )}
          <Link href="/formation" className="hover:text-veryTop">
            Formation
          </Link>
          <Link href="/contact" className="hover:text-veryTop">
            Contact
          </Link>
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
            <div className="bg-orange-400 bg-opacity-30 backdrop-blur-lg absolute w-screen h-screen top-0 items-center pl-9 md:pl-0 right-0 z-49 flex md:justify-around md:items-center">
              <div className="flex flex-col text-slate-900 z-48 gap-10   ">
                <Link
                  href="/"
                  className="text-2xl py-3 pr-14 pt-10 font-extrabold text-gray-900"
                >
                  AFRICA DIGITAL FARMING SCHOOL
                </Link>
                <Link
                  href="/"
                  className="font-mono font-semibold text-xl hover:text-veryTop"
                  onClick={() => setToggle(false)}
                >
                  Acceuil
                </Link>
                <div
                  className="relative z-10 font-mono font-semibold text-xl hover:text-veryTop hover:cursor-pointer"
                  onClick={() => setDropToggle(!dropToggle)}
                >
                  ADF school
                  {dropToggle ? (
                    <FontAwesomeIcon
                      className="hover:cursor-pointer animate-bounce relative left-2"
                      icon={faCaretUp}
                      size="1x"
                      onClick={() => setDropToggle(false)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="hover:cursor-pointer animate-bounce relative left-2"
                      icon={faCaretDown}
                      size="1x"
                      onClick={() => setDropToggle(true)}
                    />
                  )}
                </div>
                {dropToggle && (
                  <>
                    <div
                      onClick={() => setDropToggle(false)}
                      className="fixed w-screen h-screen inset-0 bg-black bg-transparent"
                    ></div>
                    <div className="relative bg-white bg-opacity-30 rounded-lg p-2 md:p-6 flex flex-col transition-all ease-in-out duration-200">
                      <Link
                        href="/adfSchool/aboutus"
                        className="hover:text-veryTop p-3"
                        onClick={() => setToggle(false)}
                      >
                        Qui sommes Nous?
                      </Link>
                      <Link
                        href="/adfSchool/organisation"
                        className="hover:text-veryTop p-3"
                        onClick={() => setToggle(false)}
                      >
                        Organisation
                      </Link>
                      <Link
                        href="/adfSchool/gouvernance"
                        className="hover:text-veryTop p-3"
                        onClick={() => setToggle(false)}
                      >
                        Gouvernance
                      </Link>
                    </div>
                  </>
                )}
                <Link
                  href="/formation"
                  className="font-mono font-semibold text-xl hover:text-veryTop"
                  onClick={() => setToggle(false)}
                >
                  Formation
                </Link>
                <Link
                  href="/contact"
                  className="font-mono font-semibold text-xl hover:text-veryTop "
                  onClick={() => setToggle(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
