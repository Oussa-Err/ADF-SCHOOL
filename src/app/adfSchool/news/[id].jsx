import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const req = await fetch(
    "http://localhost:3000/adfSchool/news/" + params.id
  );
  const data = await req.json();

  return {
    props: { news: data },
  };
}

export default function NewItem({ news }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <main> {id}
        <img src={news.image} alt="f" />
        <div>
          <h1>{news.title}</h1>
          <p>{news.date}</p>
          <p>{news.description}</p>
        </div>
      </main>
    </>
  );
}
