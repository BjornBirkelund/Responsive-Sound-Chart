import React, { Component } from "react";
import classes from "./Chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class Chart extends Component {
  render() {
    return (
      <div className={classes.graphContainer}>
        <LineChart
          width={1000}
          height={300}
          data={this.props.data}
          margin={{
            top: 10,
            right: 40,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="Decibel Level"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    );
  }
}

export default Chart;
