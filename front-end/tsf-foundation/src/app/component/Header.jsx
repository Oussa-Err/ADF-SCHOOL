"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const navbarLinks = (
  <>
    <Link href="/">Acceuil</Link>
    <Link href="/adfSchool"> ADF school</Link>
    <Link href="/formation"> Formation</Link>
    <Link href="/contact"> Contact</Link>
  </>
);

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!state)
  }

  return (
    <div className="absolute container">
      <header className="flex bg-transparent h-24 items-center ">
        <div className="flex-1 pl-2">
          <Link href="/" className="text-2xl font-extrabold ">
            AFRICA DIGITAL FARMING SCHOOL
          </Link>
        </div>
        {toggle? (
          <nav className="flex-1 flex justify-around">
            <navbarLinks /> 
          </nav>
        ) : (
          <FontAwesomeIcon className="hover:cursor-pointer" icon={faBars}
          size='2x'
          color="gray"
          onClick={handleToggle()}
          />
        )}
        <div></div>
      </header>
    </div>
  );
};

export default Header;
