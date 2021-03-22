import "./bitcoin.css";
import React, {useState} from "react";
import BitcoinPrice from "./BitcoinPrice";
import ChartDetails from "./ChartDetails";

const options = [
    {
      label: "United States Dollar",
      value: "USD",
    },
    {
      label: "British Pound Sterling",
      value: "GBP",
    },
    {
      label: "Euro",
      value: "EUR",
    },
  ];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container Calign">
      <div className="ui celled grid">
        <div className="ui two column horizontally padded grid">
          <div className="column">
            <BitcoinPrice selected={selected} setSelected={setSelected} options={options} />
          </div>
          <div className="column">
            <ChartDetails selected={selected}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
