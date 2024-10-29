import React, { useState } from "react";
import DatePicker from "../DatePicker";

const Datepicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ height: "360px" }}>
      <h2>Date Picker Example</h2>
      <DatePicker className="custom-datepicker" onChange={handleDateChange} />
      <p>
        Selected Date:{" "}
        {selectedDate ? selectedDate.toLocaleDateString() : "None"}
      </p>
    </div>
  );
};

export default Datepicker;
