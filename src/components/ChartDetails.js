import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const ChartDetails = ({ selected }) => {
  const [loading, setLoading] = useState(true);
  const [chartResult, setChartResult] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [seriesData, setSeriesData] = useState(null);

  useEffect(() => {
    const chart = async () => {
      const response = await axios.get(
        "https://api.coindesk.com/v1/bpi/historical/close.json?",
        {
          params: {
            currency: selected.value,
            start: "2021-01-01",
            end: "2021-03-01",
          },
        }
      );
      setChartResult(response.data.bpi);
      const categories = Object.keys(chartResult);
      const series = Object.values(chartResult);
      setChartData(categories);
      setSeriesData(series);
      setLoading(false);
      console.log(chartResult);
    };
    chart();
  }, [selected]);

  const renderContent = () => {
    if (!chartResult) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Line
            data={{
              labels: chartData,
              datasets: [
                {
                  label: "Last 60 days trend",
                  data: seriesData,
                },
              ],
            }}
          />
        </div>
      );
    }
  };

  return <>{renderContent()}</>;
};
export default ChartDetails;
