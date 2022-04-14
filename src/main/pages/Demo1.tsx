import React, { useState } from "react";
import Chart from "react-google-charts";
import data from "../../data/demo1/demo1_linechart.json";

export const Demo1 = () => {

  const [displayColumns, setDisplayColumns] = useState(["National"]);

  const fullChartData = data.google_chart_data;
  const chartOptions = {
    title: data.name,
    vAxis: {
      format: "#'%'"
    }
  };

  const columnsToInclude = ["Age"].concat(displayColumns);
  const indices = columnsToInclude.map(column => fullChartData[0].findIndex(x => x === column)).sort();

  const chartData = fullChartData.map(row => indices.map(index => row[index]));

  const handleColumnChange = (event: any) => {
    const column = event.currentTarget.value;
    if (event.currentTarget.checked && !displayColumns.includes(column))
      setDisplayColumns([...displayColumns, column]);
    else if (!event.currentTarget.checked && displayColumns.includes(column)) {
      const newColumns = displayColumns.filter(x => x !== column);
      setDisplayColumns(newColumns);
    }
  };

  return (
    <div className="text-center p-4">
      <h1>Demo 1</h1>
      <div className="mx-auto">
        <div className="d-flex flex-row justify-content-center align-items-stretch" style={{ maxHeight: "500px" }}>
          <div style={{ minWidth: "500px" }}>
            {displayColumns.length > 0 &&
              <Chart
                chartType="LineChart"
                width="600px"
                height="400px"
                data={chartData}
                options={chartOptions}
              />
            }
            {displayColumns.length == 0 &&
              <div className="h-100 d-flex justify-content-center align-items-center">
                <h5>Select columns to display</h5>
              </div>
            }
          </div>
          <div style={{ minWidth: "500px" }}>
            <div className="mb-2">
              <button
                className="btn btn-primary mx-2"
                onClick={() => setDisplayColumns(fullChartData[0].slice(1).map(x => x.toString()))}
              >
                Select All
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() => setDisplayColumns([])}
              >
                Clear All
              </button>
            </div>
            <div className="w-100 h-100 d-flex flex-column flex-wrap">
              {fullChartData[0].slice(1).map(column => {
                const colDisplay = column.toString();
                return (
                  <div key={colDisplay} className="d-flex flex-row me-3">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      value={colDisplay}
                      checked={displayColumns.includes(colDisplay)}
                      onChange={handleColumnChange}
                    />
                    <span>{colDisplay}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};