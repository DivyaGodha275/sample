import React, { useState } from "react";

const weatherData = [
  { day: 0, temp: 68, image: "🌬️", message: "WINDY" },
  { day: 1, temp: 74, image: "☀️", message: "SUNNY" },
  { day: 2, temp: 83, image: "☀️", message: "SUNNY" },
  { day: 3, temp: 75, image: "🌥️", message: "MOSTLY CLOUDY" },
  { day: 4, temp: 82, image: "🌤️", message: "PARTLY CLOUDY" },
  { day: 5, temp: 81, image: "🌧️", message: "RAIN" },
  { day: 6, temp: 90, image: "☀️", message: "SUNNY" },
];

const Implementation = () => {
  const [startDate, setStartDate] = useState("2023-07-02");
  const [endDate, setEndDate] = useState("2023-07-08");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Date Range: ${startDate} to ${endDate}`);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Forecast</h2>
      <form onSubmit={handleSubmit}>
        <label>
          From:{" "}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label style={{ marginLeft: "10px" }}>
          To:{" "}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button type="submit" style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </form>
      <div style={{ display: "flex", marginTop: "20px", gap: "10px" }}>
        {weatherData.map((day) => (
          <div
            key={day.day}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
              width: "100px",
            }}
          >
            <h4>{["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][day.day]}</h4>
            <h3>{day.temp}°</h3>
            <div style={{ fontSize: "24px" }}>{day.image}</div>
            <p>{day.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Implementation;
