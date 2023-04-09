import { useState, useEffect } from "react";

export default function CryptPrice() {
  const [ethereumPrice, setEthereumPrice] = useState<number | null>(null);

  const ids = "ethereum";
  const vs_currencies = "usd";
  const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currencies}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setEthereumPrice(data.ethereum.usd);
      })
      .catch((error) => console.error(error));
  }, [apiUrl]);

  return (
    <div className="flex gap-6">
      <div>
        {/* ethereum */}
        <h1 className="text-2xl font-bold">Ethereum</h1>
        <h2 className="text-lg font-medium">
          {ethereumPrice ? `$ ${ethereumPrice.toLocaleString()}` : "-"}
        </h2>
      </div>
    </div>
  );
}
