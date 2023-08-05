import Image from "next/image";
import Link from "next/link";
import news from "../../public/data/news.json";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-heroBg to-white">
      <div className="sm:px-24 md:px-14 lg:flex-row gap-24  pt-16 sm:pt-38 flex items-center flex-col">
        <h1 className="self-center w-full font-extrabold text-2xl sm:text-3xl lg:text-4xl px-5 text-veryTop">
          Empowering the Future: <br />
          <span className="text-emerald-800">
            Welcome to Africa Digital Farming School
          </span>
        </h1>
        <Image
          className="object-cover"
          src="/assets/adfLogo.png"
          alt="adf logo"
          width={600}
          height={200}
        />
      </div>

      <h1 className="text-slate-900 font-extrabold text-2xl pt-24">
        Nos actualités
      </h1>
      <div className="bg-veryTop h-1 w-full rounded-md mt-2"> </div>

      <div className="my-4">
        <ul className="gap-5 py-10 grid grid-cols-1 md:grid-cols-2 justify-center">
          {news.map((newsItem) => (
            <li key={newsItem.id} >
              <Link href={'/adfSchool/news/' + newsItem.id} className='flex flex-row gap-7 py-4 hover:scale-y-110 backdrop-blur-md'>
                <img
                  className="max-w-[7rem] max-h-[5rem] flex-1"
                  src={newsItem.image}
                  alt="f"
                />
                <div className="flex-1">
                  <p className="text-slate-600 font-mono pb-4">{newsItem.date}</p>
                  <p className="pr-3 font-bold">{newsItem.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full bg-slate-500 h-24 flex rounded-2xl pt-4">
        <h1>NOS PARTENAIRE</h1>
        <Image
          className="object-fill"
          src="/assets/adfLogo.png"
          alt="adf logo"
          width={100}
          height={50}
        />
      </div>
    </main>
  );
}
