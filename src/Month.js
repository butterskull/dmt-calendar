import React from "react";
import Months from "./months.json";
import Day from "./Day";

const Month = () => (
  <>
    {Months.map((month, i) => (
      <MonthCard
        monthName={1 + i + " " + month.name}
        commonName={month.commonName}
        key={i}
      />
    ))}
  </>
);

class MonthCard extends React.Component {
  render() {
    console.log("Month :" + this.props.monthName);
    return (
      <div className="Month" key={this.props.key}>
        <p>
          {this.props.monthName} : {this.props.commonName}
        </p>
        <Day />
      </div>
    );
  }
}

export default Month;
