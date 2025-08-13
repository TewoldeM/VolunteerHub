import React, { useState } from "react";
import ReactDOM from "react-dom";
import TimezoneSelect, { type ITimezone } from "react-timezone-select";

const TimeZoneSelecter = () => {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  return (
    <div className="App">
      {/* <h2>react-timezone-select</h2> */}
      <blockquote>TimeZone</blockquote>
      <div className="select-wrapper dark:bg-gray-600">
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
          className="dark:bg-gray-900 dark:text-gray-800"
        />
      </div>
    </div>
  );
};

export default TimeZoneSelecter;
