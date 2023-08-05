import { useRouter } from 'next/router';
import news from "../../data/news.json";

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000')
  const data = await res.json();

  const paths = data.map((news) => () => {
    return {
      params : {id: news.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ param }) {
  const req = await fetch('http://localhost:3000/adfSchool/news/' + news.id);
  const data = await req.json();

  return {
    props: { news: news.id.toString() },
  };
}


export default function New({ news }) {
  const router = useRouter();
  const { id } = router.query;
  

  return (
    <>
      <h1>
        <div>
          <img src={news.image} alt="f" />
          <div>
            <h1>{news.title}</h1>
            <p>{news.date}</p>
            <p>{news.description}</p>
          </div>
        </div>
      </h1>
    </>
  );
}

// export default New;
