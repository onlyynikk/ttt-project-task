import React from "react";
import Histogram from "react-chart-histogram";

export default function Charts(props) {
  const { sortedObject, data } = props;

  let keyArr = Object.keys(sortedObject);
  let valueArr = Object.values(sortedObject);

  const options = {
    fillColor: "aqua",
    strokeColor: "black",
    xName: "Most repeated words",
    yName: "Total number of occurance",
  };

  function display() {
    if (!data) {
      return;
    } else {
      return (
        <div className="data_container">
          <div className="data">{data}</div>
          <div className="title_container">
            <h1 className="title">Histogram of most repeated words</h1>
          </div>
          <div className="histogram_container">
            <Histogram
              className="histogram"
              xLabels={keyArr}
              yValues={valueArr}
              width="1440"
              height="800"
              options={options}
            />
          </div>
        </div>
      );
    }
  }

  return <div>{display()}</div>;
}
