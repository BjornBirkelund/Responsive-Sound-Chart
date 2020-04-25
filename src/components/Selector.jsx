import React, { Component } from "react";
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";

const b1Style = {
  borderColor: "white",
  borderWidth: "2px",
  borderRight: "none"
};
const b2Style = {
  borderColor: "white",
  borderWidth: "2px",
  borderLeft: "none",
  borderRight: "none"
};
const b3Style = {
  borderColor: "white",
  borderWidth: "2px",
  borderLeft: "none",
  borderRight: "none"
};
const b4Style = {
  borderColor: "white",
  borderWidth: "2px",
  borderLeft: "none"
};

class Selector extends Component {
  render() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup
          size="lg"
          type="radio"
          name="options"
          defaultValue={1}
        >
          <ToggleButton
            value={1}
            style={b1Style}
            variant="outline-light"
            onClick={e => {
              this.props.onButtonClick("DayChart");
            }}
          >
            Day
          </ToggleButton>
          <ToggleButton
            value={2}
            style={b2Style}
            variant="outline-light"
            onClick={e => {
              this.props.onButtonClick("WeekChart");
            }}
          >
            Week
          </ToggleButton>
          <ToggleButton
            value={3}
            style={b3Style}
            variant="outline-light"
            onClick={e => {
              this.props.onButtonClick("MonthChart");
            }}
          >
            Month
          </ToggleButton>
          <ToggleButton
            value={4}
            style={b4Style}
            variant="outline-light"
            onClick={e => {
              this.props.onButtonClick("YearChart");
            }}
          >
            Year
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}

export default Selector;
