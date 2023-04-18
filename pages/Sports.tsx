import Header from "@/components/Header";
import Article from "@/components/Article";
import PageHead from "@/components/PageHead";

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

interface SportsProps {
  topArticles: Article[];
}

export default function Sports(props: SportsProps) {
  console.log(props.topArticles);
  const [mainArticle, ...otherArticles] = props.topArticles;

  return (
    <>
      <PageHead
        title="THE NEWS"
        description="最新のヘッドラインニュース、天気予報、株価情報が一箇所でご覧いただけます。包括的な報道で最新情報にアクセスしましょう。"
      />

      <main>
        <Header />
        <div className="mx-8 sm:mx-12 lg:mx-32 mt-4 sm:mt-6 md:mt-10 flex gap-5">
          <div>
            {/* Main article */}
            <div className="list-none">
              <Article article={mainArticle} />
            </div>
            {/* Other articles */}
            <ul className="grid grid-cols-3 gap-3">
              {otherArticles.map((article, id) => (
                <Article key={id} article={article} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const newsApiRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=10&apiKey=${process.env.NewsAPI_KEY}`
  );
  const newsApiJson = await newsApiRes.json();
  const topArticles: Article[] = newsApiJson?.articles;

  return {
    props: {
      topArticles: JSON.parse(JSON.stringify(topArticles)),
    },
    revalidate: 60 * 10,
  };
};

