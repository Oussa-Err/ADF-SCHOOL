import Link from "next/link";

const Gouvernance = () => {
  return (
    <div>
      <div>
        <h1>Mission</h1>
        <hr />
        <p>
          Présentation TSF Foundation Fondation des Scientifiques Marocains à
          l'Etranger : Ce sont les scientifiques,les chercheurs, les
          professeurs, les experts, les bâtisseurs et les entrepreneurs qui
          répondent aux formidables défis du Maroc et de l'Afrique, les défis de
          l'innovation dans toutes les activités humaines , ainsi que de la
          ville durable, connectée et accessible.
        </p>
      </div>
      <div>
        <h1>Mission</h1>
        <hr />
        <p>
          La Fondation TSF des Scientifiques Marocains à l'étranger est au
          service de cette excellence! Au départ, le Groupe Ponts Afrique des
          ingénieurs des Ponts & Chaussées du Maroc et d'Afrique s'est élargi à
          toutes les Grandes Écoles ParisTech: S.M.E Foundation , les
          Scientifiques Marocains à l'Etranger, a réussi à mobiliser 3 Groupes
          importants : USA, Canada et France ce qui a donné la Trinational
          Science Foundation TSF Le site web www.academy-sciencestsf.org est en
          construction...🇺🇸🇨🇦🇫🇷 TSF Foundation, les Scientifiques Marocains à
          l'Etranger.
        </p>
      </div>

      <div className="w-screen flex flex-col justify-center h-40">
        <h1>Partner with Us</h1>
        <p>
          World Education strives to build lasting relationships with partners
          across diverse geographic regions and technical sectors to produce
          better education outcomes for all.
        </p>
        <button>
          <Link href={"/contact"}>Contacter Nous</Link>
        </button>
      </div>

      <div className="w-screen flex flex-row justify-center h-40">
        <h1>Subscribe To Our Newsletter</h1>
        <button>
          <Link href={"/contact"}>Contacter Nous</Link>
        </button>
      </div>
    </div>
  );
};

export default Gouvernance;
