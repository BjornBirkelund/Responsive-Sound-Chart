import Chart from "./components/Chart";
import Selector from "./components/Selector";
import VolumeSlider from "./components/Slider";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    selectedChart: "DayChart",
    soundlevels: {
      DayChart: [
        { name: "8AM", "Decibel Level": 80 },
        { name: "10AM", "Decibel Level": 48 },
        { name: "12AM", "Decibel Level": 32 },
        { name: "2PM", "Decibel Level": 68 },
        { name: "4PM", "Decibel Level": 92 },
        { name: "6PM", "Decibel Level": 56 },
        { name: "8PM", "Decibel Level": 31 },
      ],
      WeekChart: [
        { name: "Monday", "Decibel Level": 100 },
        { name: "Tuesday", "Decibel Level": 83 },
        { name: "Wednesday", "Decibel Level": 64 },
        { name: "Thursday", "Decibel Level": 24 },
        { name: "Friday", "Decibel Level": 80 },
        { name: "Saturday", "Decibel Level": 85 },
        { name: "Sunday", "Decibel Level": 40 },
      ],
      MonthChart: [
        { name: "Day 5", "Decibel Level": 12 },
        { name: "Day 10", "Decibel Level": 80 },
        { name: "Day 15", "Decibel Level": 35 },
        { name: "Day 20", "Decibel Level": 40 },
        { name: "Day 25", "Decibel Level": 100 },
        { name: "Day 30", "Decibel Level": 80 },
      ],
      YearChart: [
        { name: "Jan", "Decibel Level": 12 },
        { name: "Feb", "Decibel Level": 80 },
        { name: "Mar", "Decibel Level": 30 },
        { name: "Apr", "Decibel Level": 90 },
        { name: "May", "Decibel Level": 50 },
        { name: "Jun", "Decibel Level": 40 },
        { name: "Jul", "Decibel Level": 20 },
        { name: "Sep", "Decibel Level": 75 },
        { name: "Oct", "Decibel Level": 93 },
        { name: "Nov", "Decibel Level": 82 },
        { name: "Dec", "Decibel Level": 40 },
      ],
    },
  };
  handleButtonClick = (myChart) => {
    this.setState({ selectedChart: myChart });
    return <Chart data={this.state.soundlevels[this.state.selectedChart]} />;
  };
  render() {
    return (
      <header className="App-header">
        {/* <VolumeSlider /> */}
        <Selector onButtonClick={this.handleButtonClick} />
        <Chart data={this.state.soundlevels[this.state.selectedChart]} />
      </header>
    );
  }

  updateSoundLevels = () => {
    console.log("update");

    //I am aware this is not the proper way of having sending in/using new data, just did it to test whether the update worked properly
    let newDayLevel = [
      { name: "8AM", "Decibel Level": 100 },
      { name: "10AM", "Decibel Level": 30 },
      { name: "12AM", "Decibel Level": 24 },
      { name: "2PM", "Decibel Level": 94 },
      { name: "4PM", "Decibel Level": 60 },
      { name: "6PM", "Decibel Level": 35 },
      { name: "8PM", "Decibel Level": 8 },
    ];
    let newWeekLevel = [
      { name: "Monday", "Decibel Level": 95 },
      { name: "Tuesday", "Decibel Level": 40 },
      { name: "Wednesday", "Decibel Level": 32 },
      { name: "Thursday", "Decibel Level": 64 },
      { name: "Friday", "Decibel Level": 90 },
      { name: "Saturday", "Decibel Level": 100 },
      { name: "Sunday", "Decibel Level": 60 },
    ];
    let newMonthLevel = [
      { name: "Day 5", "Decibel Level": 4 },
      { name: "Day 10", "Decibel Level": 90 },
      { name: "Day 15", "Decibel Level": 8 },
      { name: "Day 20", "Decibel Level": 60 },
      { name: "Day 25", "Decibel Level": 90 },
      { name: "Day 30", "Decibel Level": 100 },
    ];
    let newYearLevel = [
      { name: "Jan", "Decibel Level": 32 },
      { name: "Feb", "Decibel Level": 45 },
      { name: "Mar", "Decibel Level": 74 },
      { name: "Apr", "Decibel Level": 40 },
      { name: "May", "Decibel Level": 23 },
      { name: "Jun", "Decibel Level": 23 },
      { name: "Jul", "Decibel Level": 60 },
      { name: "Sep", "Decibel Level": 34 },
      { name: "Oct", "Decibel Level": 73 },
      { name: "Nov", "Decibel Level": 82 },
      { name: "Dec", "Decibel Level": 69 },
    ];

    this.setState((prevState) => ({
      soundlevels: {
        ...prevState.soundlevels,
        DayChart: newDayLevel,
        WeekChart: newWeekLevel,
        MonthChart: newMonthLevel,
        YearChart: newYearLevel,
      },
    }));
    console.log("DayChart:", this.state.soundlevels.DayChart);
  };

  componentDidMount() {
    setInterval(this.updateSoundLevels, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default App;
