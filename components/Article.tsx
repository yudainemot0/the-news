interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

export default function Article({ article }: { article: Article }) {
  return (
    <li>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1">
        {article.urlToImage && <img src={article.urlToImage} alt="article" />}
        <h2 className=" font-bold">{article.title}</h2>
        <p>{article.description}</p>
      </a>
    </li>
  );
}
