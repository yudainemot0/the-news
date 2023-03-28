import React, { useEffect, useState } from "react";
import axios from "axios";

type ApiResponse = {
  "Global Quote": {
    "01. symbol": string;
    "05. price": string;
  };
};

export default function Stock() {
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<ApiResponse>(
        "https://www.alphavantage.co/query",
        {
          params: {
            function: "GLOBAL_QUOTE",
            symbol: "TSLA",
            apikey: "VYZAGOSFU3TE2D6U",
          },
        }
      );
            console.log(response.data);

      const priceNumber = Number(response.data["Global Quote"]["05. price"]);
      const formattedPrice = priceNumber.toFixed(2); // 小数点第2位までフォーマットする
      setSymbol(response.data["Global Quote"]["01. symbol"]);
      setPrice(formattedPrice);      
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{symbol}</h1>
      <h2 className="text-lg font-medium">${price}</h2>
    </div>
  );
}
