import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/DatePicker.css"

const GetDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div id="dateDiv" class="date">
        <h4 id="dob">Date of birth</h4>
        <p id="dobInfo">
          This will not be shown publicly. Confirm your age to receive the
          appropriate experience.
        </p>
        <DatePicker
          dateFormat="MM/dd/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </>
  );
};

export default GetDatePicker;
