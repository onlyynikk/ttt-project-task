import React, { useState } from "react";
import axios from "axios";
import Charts from "./Chart";

export default function Data() {
  const [data, setData] = useState("");

  const URL = "https://www.terriblytinytales.com/test.txt";
  const fetchData = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
          Accept: "application/json",
        },
      });
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const newData = data
    .replace(/[^a-zA-Z ]/g, " ")
    .replace(/"/g, "")
    .toLowerCase();
  const arr = newData.split(" ");
  let chars = {};

  for (let word of arr) {
    if (!chars[word]) {
      chars[word] = 1;
    } else {
      chars[word]++;
    }
  }

  const sortedObject = Object.fromEntries(
    Object.entries(chars)
      .sort(([, a], [, b]) => {
        return b - a;
      })
      .slice(1, 21)
  );

  return (
    <div className="container">
      <div className="button_container">
        <button type="submit" className="btn_submit" onClick={fetchData}>
          Submit
        </button>
      </div>
      <div className="chart_container">
        <Charts sortedObject={sortedObject} data={data} />
      </div>
    </div>
  );
}
