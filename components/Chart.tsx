import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
type ApiResponse = {
  "Monthly Adjusted Time Series": {
    [date: string]: {
      "4. close": string;
    };
  };
};

export default function Chart() {
  const [data, setData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  }>({
    labels: [],
    datasets: [
      {
        label: "StockChart",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<ApiResponse>(
        "https://www.alphavantage.co/query",
        {
          params: {
            function: "TIME_SERIES_MONTHLY_ADJUSTED",
            symbol: "TSLA",
            apikey: "VYZAGOSFU3TE2D6U",
          },
        }
      );
      console.log(response.data);

      const monthlyData = response.data["Monthly Adjusted Time Series"];
      const monthlyDataEntries = Object.entries(monthlyData);
      const monthlyDataEntriesSorted = monthlyDataEntries.sort(
        ([aDate], [bDate]) => (aDate > bDate ? 1 : -1)
      );
      const dataLabels = monthlyDataEntriesSorted
        .filter(([date]) => {
          const currentDate = new Date(date);
          const currentDateMinusOneYear = new Date();
          currentDateMinusOneYear.setFullYear(
            currentDateMinusOneYear.getFullYear() - 1
          );
          return currentDate >= currentDateMinusOneYear;
        })
        .map(([date]) => date);
      const dataValues = monthlyDataEntriesSorted
        .filter(([date]) => {
          const currentDate = new Date(date);
          const currentDateMinusOneYear = new Date();
          currentDateMinusOneYear.setFullYear(
            currentDateMinusOneYear.getFullYear() - 1
          );
          return currentDate >= currentDateMinusOneYear;
        })
        .map(([, data]) => Number(data["4. close"]));
      const newData = {
        labels: dataLabels,
        datasets: [
          {
            label: "StockChart",
            data: dataValues,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };
      setData(newData);
    }
    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: `Chart.js Line Chart`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Stock Price",
        },
      },
    },
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
