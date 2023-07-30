import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[40rem] bg-gradient-to-tl from-cyan-700 via-green-200 to-cyan-700">
      <div className="relative top-28 flex ">
        <h1 className="self-center pl-6 font-extrabold  text-4xl text-neutral-700">
          Empowering the Future: Welcome to Africa Digital School, where
          knowledge meets innovation, and dreams take flight!
        </h1>
        <Image
          src="/assets/adfLogo.png"
          alt="adf logo"
          width={600}
          height={200}
        />
      </div>
    </main>
  );
}
