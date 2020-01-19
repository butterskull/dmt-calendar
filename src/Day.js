import React from "react";

const days = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30"
];

const Day = () => (
  <>
    {days.map((day, i) => (
      <DayBlock dayName={day} key={i} />
    ))}
  </>
);

class DayBlock extends React.Component {
  render() {
    console.log("Day :" + this.props.dayName);
    return (
      <div className="Day" key={this.props.key}>
        <p>{this.props.dayName}</p>
      </div>
    );
  }
}

export default Day;
