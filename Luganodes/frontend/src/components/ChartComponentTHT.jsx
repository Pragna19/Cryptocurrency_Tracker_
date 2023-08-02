import React, { useEffect, useState } from "react";
import axios from "axios";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function convertUnixTimestampToNormalFormat(unixTimestamp) {
  const date = new Date(unixTimestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const ChartComponentTHT = () => {
  const [res, setRes] = useState([]);
  const [days, setDays] = useState(1);

  const unixTimestamps = res.map((item) => item[0]);
  const prices = res.map((item) => item[1]);
  const data = {
    labels: unixTimestamps.map(convertUnixTimestampToNormalFormat),
    datasets: [
      {
        label: "USD Price",
        data: prices,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.4)",
      },
    ],
  };

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=${days}`
      )
      .then((response) => {
        setRes(response.data.prices);
        console.log(response.data.prices);
      })
      .catch((err) => console.log(err));
  }, [days]);

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <div>
        <br></br>
      <label style={{color:"#676565",fontWeight:"200",fontStyle:"normal",fontFamily:"Fredoka One",fontSize:"20px",lineHeight:"58px",marginRight:"1%"}} htmlFor="days">Enter number of days: </label>
      <input
        type="number"
        id="days"
        value={days}
        onChange={handleDaysChange}
        min="1"
      />

      <Line data={data} />
    </div>
  );
};

export default ChartComponentTHT;
