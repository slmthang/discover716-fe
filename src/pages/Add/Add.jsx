
import "./Add.scss";
import dataService from '../../services/dataService';


function AddEvent() {

  // upoload Event
  const uploadEvent = (e) => {

    // prevent default
    e.preventDefault();

    const fd = new FormData(e.target);

    console.log("Form Data: ", fd.get);

    // create a new event
    dataService
      .create(fd)
      .then(data => {
        console.log(`${fd.get("type")} added to db: `, data);
      })
  }

  // select handler
  const selectHandler = (e) => {
    setFormType(e.target.value);
    console.log("FormType: ", formType);
  }

  return (
    <>
      <form onSubmit={uploadEvent} id='eventInfoForm'>
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
            <input type="text" id='name' name='name'/>
          </p>

          {formType=="event" ? (
            <>
              <p>
                <label htmlFor="date">Date: </label> 
                <input type="date" id='date' name='date'/>
              </p>
              <p>
                <label htmlFor="startTime">Start Time: </label>
                <input type="time" id='startTime' name='startTime'/>
              </p>
              <p>
                <label htmlFor="endTime">End Time: </label>
                <input type="time" id='endTime' name='endTime'/>
              </p>
            </>
          ) : null}
            
          <p>
            <label htmlFor="address">Address: </label>
            <input type="location" id='address' name='address'/>
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
            <input type="file" id='thumbnail' name='thumbnail'/>
          </p>
          <p>
            <label htmlFor="description">Description: </label>
            <textarea type="textarea" id='about' name='about'/>
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