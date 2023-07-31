import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[80rem]  bg-gradient-to-b from-heroBg to-white">
      <div className="sm:px-24 md:px-14 md:flex-row gap-24  pt-16 sm:pt-38  top-0 flex flex-col">
        <h1 className="self-center w-full font-extrabold text-2xl sm:text-3xl lg:text-4xl px-5 text-veryTop">
          Empowering the Future: <br /> 
          <span className="text-emerald-800"> Welcome to Africa Digital Farming School</span>
        </h1>
        <Image
          className="w-full"
          src="/assets/adfLogo.png"
          alt="adf logo"
          width={600}
          height={200}
        />
      </div>
    </main>
  );
}
