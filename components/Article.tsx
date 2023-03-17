interface Article {
  title: string;
  description: string;
  urlToImage: string;
}

export default function Article({ article }: { article: Article }) {
  return (
    <li>
      <h2>{article.title}</h2>
      {article.urlToImage && <img src={article.urlToImage} alt="article" />}
      <p>{article.description}</p>
    </li>
  );
}
