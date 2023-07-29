import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex bg-transparent h-24 items-center">
        <div className="flex-1 pl-2">
          <Link href="/" className="text-2xl font-extrabold ">AFRICA DIGITAL FARMING SCHOOL</Link>
        </div>
        <nav className="flex-1 flex justify-around">
          <Link href="/"> Acceuil</Link>
          <Link href="/adfSchool"> ADF school</Link>
          <Link href="/formation"> Formation</Link>
          <Link href="/contact"> Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
