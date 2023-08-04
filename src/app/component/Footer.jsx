import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex bg-veryTop">
      <footer className=" flex flex-col justify-start gap-6 text-start items-start p-5 md:items-start  lg:flex-row md:py-6 ">
        <Image
          className="object-cover self-center"
          src="/assets/adfLogo.png"
          alt="adf logo"
          width={400}
          height={200}
        />
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="text-lg font-extrabold">Adresses</h2>
          <hr className="bg-black"/>
          <p>
            ADF school de Rabat – 81, Avenue Allal Ben Abdellah Hassane - Rabat
          </p>
          <p>
            ADF school de Bhalil – Zone Hors Douane de la TFZ ILOT – I 3 – Commune
            Urbaine de Gueznaya – Tanger
          </p>
          <p>
            ADF school de Khemisset –  Ait ourible à 18 km de Khemisset pres de daya Ait roumi
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-extrabold">HORAIRES D’OUVERTURE</h2>
          <hr className="bg-black"/>
          <p>
            Du lundi au vendredi: de 8h30 à 17h30
          </p>
          <p>samedi: de 8h30 à 12h30</p>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-extrabold">Contact</h2>
          <hr className="bg-black"/>
          <p>Rabat: 05 36 70 50 59</p>
          <p>Bhalil: 05 39 39 51 40</p>
          <p>Khémisset: 05 36 70 50 59</p>
          <p>Academy.sciences.TSF@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
