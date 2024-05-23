
import "./Submit.scss";
import dataService from '../../services/dataService';
import { useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

function Submit() {

  const navigateTo = useNavigate();

  // state
  const [formType, setFormType] = useState('event');

  // submitted
  const [submitted, setSubmitted] = useState(false);

  // upoload Event
  const uploadEvent = (e) => {

    // prevent default
    e.preventDefault();

    window.scrollTo(0, 0);

    setSubmitted(true);

    const fd = new FormData(e.target);

    // create a new event
    dataService
      .create(fd)
        .then(data => {

          alert(`Successful Submission.`);
          setSubmitted(false);
        })
          .catch(err => {

            alert(`Submission Failed. Try again.`);
            console.log("Submission Error Failed: ", err);
            setSubmitted(false);
          })

    // redirect to display page
    navigateTo(`/display/${formType}`)
  }

  // select handler
  const selectHandler = (e) => {
    setFormType(e.target.value);
  }

  return (
    <>
      <form onSubmit={uploadEvent} id='eventInfoForm'>

        {
          !submitted ?
            <>
              <h1>Upload Page</h1>
              <section id='inputs' className='center'>
                <p>
                  <label htmlFor="type">Type: </label>
                  <select name="type" id="type" onChange={selectHandler}>
                    <option value="events">Event</option>
                    <option value="places">Place</option>
                    <option value="restaurants">Restaurant</option>
                    <option value="hotels">Hotel</option>
                  </select>
                </p>
                <p>
                  <label htmlFor="name">Name: </label>
                  <input type="text" id='name' name='name' required/>
                </p>

                {formType=="event" ? (
                  <>
                    <p>
                      <label htmlFor="date">Date: </label> 
                      <input type="date" id='date' name='date' required/>
                    </p>
                    <p>
                      <label htmlFor="startTime">Start Time: </label>
                      <input type="time" id='startTime' name='startTime' required/>
                    </p>
                    <p>
                      <label htmlFor="endTime">End Time: </label>
                      <input type="time" id='endTime' name='endTime' required/>
                    </p>
                  </>
                ) : null}
                  
                <p>
                  <label htmlFor="address">Address: </label>
                  <input type="location" id='address' name='address' required/>
                </p>
                <p>
                  <label htmlFor="email">Email: </label>
                  <input type="email" id='email' name='email'/>
                </p>
                <p>
                  <label htmlFor="phone">Phone: </label>
                  <input type="tel" id='phone' name='phone'/>
                </p>
                <p>
                  <label htmlFor="website">Website: </label>
                  <input type="url" id='website' name='website'/>
                </p>
                <p>
                  <label htmlFor="thumbnail">Thumbnail: </label>
                  <input type="file" id='thumbnail' name='thumbnail' required/>
                </p>
                <p>
                  <label htmlFor="description">Description: </label>
                  <textarea type="textarea" id='about' name='about' maxLength='10000'/>
                </p>
              </section>
              <section id='submit'>
                <button type="submit">Upload</button>
              </section> 
            </>
            
            : <h1 style={{minHeight: "40rem"}} className="center">
                <ReactLoading type="spinningBubbles" color="#323b8c" />
              </h1>
        }
        
      </form>
    </>
  )
}

export default Submit;