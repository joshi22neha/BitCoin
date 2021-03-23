import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import axios from "axios";

const BitcoinPrice = ({ selected, setSelected, options }) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const resultrender = async () => {
      const response = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      if (selected.value === "USD") {
        setResult(response.data.bpi.USD.rate);
      } else if (selected.value === "GBP") {
        setResult(response.data.bpi.GBP.rate);
      }
      if (selected.value === "EUR") {
        setResult(response.data.bpi.EUR.rate);
      }
    };
    resultrender();
  });

  return (
    <div>
      <Dropdown
        label="1 Bitcoin Equals"
        selected={selected}
        onSelectChange={setSelected}
        options={options}
      />
      <p style={{ marginTop: "60px" , fontSize: "36px" }}>{result + " " + selected.label}</p>
    </div>
  );
};

export default BitcoinPrice;
