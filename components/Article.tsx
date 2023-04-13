interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

export default function Article({ article }: { article: Article }) {
  return (
    <li className="bg-stone-50">
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1">
        {article.urlToImage && <img src={article.urlToImage} alt="article" />}
        <h2 className=" font-bold p-1">{article.title}</h2>
        <p className="p-1">{article.description}</p>
      </a>
    </li>
  );
}
