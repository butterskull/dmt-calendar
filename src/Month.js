import React from "react";
import Months from "./months.json";

const Month = () => (
  <>
    {Months.map(month => (
      <MonthCard monthName={month.name} key={month.id} />
    ))}
  </>
);

class MonthCard extends React.Component {
  render() {
    console.log("Month :" + this.props.monthName);
    return (
      <div className="Month" key={this.props.key}>
        <p>{this.props.monthName}</p>
        <div>days</div>
      </div>
    );
  }
}

export default Month;
