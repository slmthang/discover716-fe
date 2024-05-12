
import { useState } from 'react';
import eventService from '../services/eventService';
import "../scss/AddEvent.scss";


function AddEvent() {
  const [eventInfo, setEventInfo] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    address: "",
    website: "",
    thumbnail: "",
    description: "",
    email: "",
    phone: "",
    goingCount: 0
  })

  // handle inputs change on the form 
  const eventInfoFormHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, " : ", value);

    setEventInfo((eventInfo) => {
      return {
        ...eventInfo,
        [name]: value
      }
    })
  }

  // upoload Event
  const uploadEvent = (e) => {

    // prevent default
    e.preventDefault();

    // create a new event
    eventService
      .create(eventInfo)
      .then(data => {
        console.log("event added: ", data);
      })
  }

  return (
    <>
      <form onSubmit={uploadEvent} id='eventInfoForm'>
        <h1>Upload an Event</h1>
        <section id='inputs' className='center'>
          <p>
            <label htmlFor="title">Title: </label>
            <input type="text" id='title' name='title' onChange={eventInfoFormHandler}/>
          </p>
          <p>
            <label htmlFor="date">Date:</label> 
            <input type="text" id='date' name='date' onChange={eventInfoFormHandler}/>
          </p>
          <p>
            <label htmlFor="startTime">Start Time: </label>
            <input type="text" id='startTime' name='startTime' onChange={eventInfoFormHandler}/>
          </p>
          <p>
            <label htmlFor="endTime">End Time: </label>
            <input type="text" id='endTime' name='endTime' onChange={eventInfoFormHandler}/>
          </p>
          <p>
            <label htmlFor="address">Address: </label>
            <input type="text" id='address' name='address' onChange={eventInfoFormHandler}/>
          </p>
          <p>
            <label htmlFor="email">Email: </label>
            <input type="text" id='email' name='email' onChange={eventInfoFormHandler}/>
          </p>
          <p>
            <label htmlFor="phone">Phone: </label>
            <input type="text" id='phone' name='phone' onChange={eventInfoFormHandler}/>
          </p>
          <p>
            <label htmlFor="website">Website: </label>
            <input type="text" id='website' name='website' onChange={eventInfoFormHandler}/>
          </p>
          <p>
            <label htmlFor="thumbnail">Thumbnail: </label>
            <input type="text" id='thumbnail' name='thumbnail' onChange={eventInfoFormHandler}/>
          </p>
          <p>
            <label htmlFor="description">Description: </label>
            <textarea type="textarea" id='description' name='description' onChange={eventInfoFormHandler}/>
          </p>
        </section>
        <section id='submit'>
          <button type="submit">Upload</button>
        </section>
      </form>
    </>
  )
}

export default AddEvent;