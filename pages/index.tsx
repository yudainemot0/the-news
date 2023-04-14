import Head from "next/head";
import Header from "@/components/Header";
import Article from "@/components/Article";
import Weather from "@/components/Weather ";
import StockPrice from "@/components/StockPrice";
import StockChart from "@/components/StockChart";
import BitcoinPrice from "@/components/BitcoinPrice";
import EthereumPrice from "@/components/EthereumPrice";
import BitcoinChart from "@/components/BitcoinChart";
import EthereumChart from "@/components/EthereumChart";
import PageHead from "@/components/PageHead";

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

interface HomeProps {
  topArticles: Article[];
  weatherData: {
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
      deg: number;
    };
  };
}

export default function Home(props: HomeProps) {
  console.log(props.topArticles);
  console.log(props.weatherData);

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
          <div>
            {/* weather */}
            <Weather weatherData={props.weatherData} />
            {/* Stock */}
            <StockPrice />
            <StockChart />
            {/* Crypt */}
            <BitcoinPrice />
            <BitcoinChart />
            <EthereumPrice />
            <EthereumChart />
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const newsApiRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${process.env.NewsAPI_KEY}`
  );
  const newsApiJson = await newsApiRes.json();
  const topArticles: Article[] = newsApiJson?.articles;

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=33.8218&lon=130.5415&appid=${process.env.WeatherAPI_KEY}&lang=ja&units=metric`;
  const weatherRes = await fetch(API_URL);
  const weatherJson = await weatherRes.json();
  const weatherData = {
    main: weatherJson.main,
    weather: weatherJson.weather,
    wind: weatherJson.wind,
  };

  return {
    props: {
      topArticles,
      weatherData,
    },
    revalidate: 60 * 10,
  };
};
