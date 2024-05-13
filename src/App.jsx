
// components
import {useState, useEffect} from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Event from "./components/Event";
import AddEvent from "./components/AddEvent";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {

  /* Checks If the Device is Mobile or Not */
  // set initial screen size
  let initScreen;

  if (window.screen.width < 1200 || window.innerWidth < 1200) {
      initScreen = true;
  } else {
      initScreen = false;
  }

  // open-close mobile-burger-menu
  let [isMobile, setIsMobile] = useState(initScreen);

  // screen resize handler
  const screenResizeHandler = function() {
      if (window.screen.width < 1200 || window.innerWidth < 1200) {
          setIsMobile(true);
      } else {
          setIsMobile(false);
      }
  }

  // listen for screen resize
  useEffect(() => {
      
      window.addEventListener("resize", screenResizeHandler);
  })

  // return
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isMobile={isMobile}/>} >
          <Route index element={<Homepage/>} />
          <Route path="/event/:eventId" element={<Event/>} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
