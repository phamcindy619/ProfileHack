"use client";
import { useState } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function VolunteerForm() {
  const [inputs, setInputs] = useState({});
  const [date, setDate] = useState(new Date());

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    setTextarea(event.target.value)

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  const [textarea, setTextarea] = useState(
    "Describe your volunteer experience here"
  );

  return (
    <form onSubmit={handleSubmit}>

      <label> Title of Volunteer:
      <input 
        type="text" 
        name="title" 
        value={inputs.title || ""} 
        onChange={handleChange}
      />
      </label>

      <label> Location:
      <input 
        type="text" 
        name="location" 
        value={inputs.location || ""} 
        onChange={handleChange}
      />
      </label>

      <label>Start Date:
      <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
      </label>

      <label>End Date:
      <DatePicker selected={enddate} onChange={(date) => setEndDate(date)} />
      </label>
       
      <label>Description of Volunteer Experience:
      <textarea value={textarea} onChange={handleChange} />
      </label>

      <input type="submit" />
    </form>
  )
}

export default VolunteerForm;
