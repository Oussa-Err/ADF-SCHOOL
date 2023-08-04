import news from '../../data/news.json'


const New = () => {
  return (
    <div>
      <div>
      <h1>{newsArticle.title}</h1>
      <p>{newsArticle.date}</p>
      <img src={newsArticle.image} alt={newsArticle.title} />
      <p>{/* Render the description or additional details of the news article */}</p>
    </div>        
    </div>
  )
}

export default New