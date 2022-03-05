import React, { useState, useEffect } from "react";
import QuoteText from "../components/QuoteText";
import Data from "../data";

export default function QuoteGen() {
  const randomRGB = () => Math.floor(Math.random() * 256);

  const randomColorGen = () =>
    "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";

  const [QuoteData, setQuoteData] = useState([]);
  const [BgChange, setBgChange] = useState(randomColorGen());

  useEffect(() => {
    // Update the document title using the browser API
    setQuoteData(Data[Math.floor(Math.random() * Data.length)]);
  }, []);

  function randomGen() {
    return Data[Math.floor(Math.random() * Data.length)];
  }

  function handleClick() {
    setQuoteData(randomGen);
    setBgChange(randomColorGen);
  }
  return (
    <div className="body" style={{ backgroundColor: BgChange }}>
      <div className="App">
        <QuoteText
          name={QuoteData.quote}
          author={QuoteData.author}
          colorChange={BgChange}
        />
        <button
          style={{ backgroundColor: BgChange }}
          className="QuoteCTA"
          value={QuoteData}
          onClick={handleClick}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
