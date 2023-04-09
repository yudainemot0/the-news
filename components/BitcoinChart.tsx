import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

export default function BitcoinChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Bitcoin Price",
        data: [],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365"
      );
      console.log(result.data);
      const chartData = {
        labels: result.data.prices.map((price: any) =>
          new Date(price[0]).toLocaleDateString()
        ),
        datasets: [
          {
            label: "Bitcoin Price",
            data: result.data.prices.map((price: any) => price[1]),
            fill: false,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
          },
        ],
      };
      setChartData(chartData);
    };
    fetchData();
  }, []);

  return <Line data={chartData} />;
}
