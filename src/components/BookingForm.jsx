import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmed");
  };

  const handleChange = (e) => {
    setDate(e.target.value);
    props.dispatch(e);
  };
  return (
    <header>
      <section className="container mt-5 mb-5 form-container">
        <form action="" onSubmit={handleSubmit}>
          <fieldset className=" ms-5 mt-3 mb-3">
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                type="date"
                id="book-date"
                value={date}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="book-time">Select a Time:</label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                type="number"
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                name=""
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
