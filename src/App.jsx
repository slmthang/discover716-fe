
// components
import {useState, useEffect} from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Event from "./components/Event";
import AddEvent from "./components/AddEvent";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>Hello</div>,
      },
      {
        path: '/foo',
        element: <div>foo</div>,
      },
      {
        path: '/bar',
        element: <div>foo</div>,
      }
    ],
  },
]);



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
          <Route path="event" element={<Event/>} />
          <Route path="addEvent" element={<AddEvent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
