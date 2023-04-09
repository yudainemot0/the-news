import { useState, useEffect } from "react";

export default function CryptPrice() {
  const [bitcoinPrice, setBitcoinPrice] = useState<number | null>(null);
  const [ethereumPrice, setEthereumPrice] = useState<number | null>(null);

  const ids = "bitcoin,ethereum";
  const vs_currencies = "usd";
  const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currencies}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBitcoinPrice(data.bitcoin.usd);
        setEthereumPrice(data.ethereum.usd);
      })
      .catch((error) => console.error(error));
  }, [apiUrl]);

  return (
    <div className="flex gap-6">
      <div>
        {/* bitcoin */}
        <h1 className="text-2xl font-bold">Bitcoin</h1>
        <h2 className="text-lg font-medium">
          {bitcoinPrice ? `$ ${bitcoinPrice.toLocaleString()}` : "-"}
        </h2>
      </div>
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
