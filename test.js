
// file system
const fs = require("fs");
import dataService from "./src/services/dataService.js";

// defining a JavaScript object
const users = [
    {
      _id: "664ae8ff87fa9e0d2227f717",
      name: "Buffalo Zoo",
      thumbnail: "http://res.cloudinary.com/dxjfmwr5n/image/upload/v1716185344/discover716/buffalo-zoo.jpg.jpg",
      address: "334 Piston St, NY, 14305",
      website: "https://www.google.com",
      phone: "716-334-5784",
      email: "buffalo-zoo@gmail.com",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero. Interdum consectetur libero id faucibus nisl tincidunt eget. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Tincidunt nunc pulvinar sapien et ligula. Enim facilisis gravida neque convallis a cras semper auctor neque. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Purus in massa tempor nec feugiat nisl. Vulputate ut pharetra sit amet aliquam id diam maecenas. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Et leo duis ut diam.\r\n\r\nFusce id velit ut tortor. Quisque egestas diam in arcu cursus euismod quis viverra. Blandit libero volutpat sed cras ornare. Scelerisque in dictum non consectetur a erat nam at. Sit amet consectetur adipiscing elit duis tristique. Sem viverra aliquet eget sit. Orci dapibus ultrices in iaculis nunc sed augue lacus. Proin sagittis nisl rhoncus mattis rhoncus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Neque viverra justo nec ultrices dui sapien eget.\r\n\r\nAliquet bibendum enim facilisis gravida neque convallis a. At quis risus sed vulputate odio ut enim blandit volutpat. Aliquet risus feugiat in ante metus dictum at tempor commodo. Nulla malesuada pellentesque elit eget gravida cum sociis. Dui ut ornare lectus sit. Consequat nisl vel pretium lectus quam id leo in. Sit amet justo donec enim. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Non blandit massa enim nec dui nunc. Fames ac turpis egestas sed. Id ornare arcu odio ut sem nulla pharetra diam sit. Euismod elementum nisi quis eleifend quam. Nulla at volutpat diam ut venenatis tellus in metus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Etiam dignissim diam quis enim. Cras sed felis eget velit aliquet sagittis id consectetur.",
      amenities: [],
      __v: 0
    },
    {
      _id: "664b23ace4df1dbd70b04257",
      name: "Bubble Tea",
      thumbnail: "http://res.cloudinary.com/dxjfmwr5n/image/upload/v1716185529/discover716/curtiss.png.png",
      address: "334 Piston St, NY, 14305",
      website: "https://www.google.com",
      phone: "716-334-5784",
      email: "nationalday@gmail.com",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero. Interdum consectetur libero id faucibus nisl tincidunt eget. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Tincidunt nunc pulvinar sapien et ligula. Enim facilisis gravida neque convallis a cras semper auctor neque. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Purus in massa tempor nec feugiat nisl. Vulputate ut pharetra sit amet aliquam id diam maecenas. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Et leo duis ut diam.\r\n\r\nFusce id velit ut tortor. Quisque egestas diam in arcu cursus euismod quis viverra. Blandit libero volutpat sed cras ornare. Scelerisque in dictum non consectetur a erat nam at. Sit amet consectetur adipiscing elit duis tristique. Sem viverra aliquet eget sit. Orci dapibus ultrices in iaculis nunc sed augue lacus. Proin sagittis nisl rhoncus mattis rhoncus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Neque viverra justo nec ultrices dui sapien eget.\r\n\r\nAliquet bibendum enim facilisis gravida neque convallis a. At quis risus sed vulputate odio ut enim blandit volutpat. Aliquet risus feugiat in ante metus dictum at tempor commodo. Nulla malesuada pellentesque elit eget gravida cum sociis. Dui ut ornare lectus sit. Consequat nisl vel pretium lectus quam id leo in. Sit amet justo donec enim. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Non blandit massa enim nec dui nunc. Fames ac turpis egestas sed. Id ornare arcu odio ut sem nulla pharetra diam sit. Euismod elementum nisi quis eleifend quam. Nulla at volutpat diam ut venenatis tellus in metus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Etiam dignissim diam quis enim. Cras sed felis eget velit aliquet sagittis id consectetur.",
      amenities: [],
      __v: 0
    },
    {
      _id: "664b28b0c649a93744330f04",
      name: "Brown County Park",
      thumbnail: "http://res.cloudinary.com/dxjfmwr5n/image/upload/v1716185529/discover716/curtiss.png.png",
      address: "1413 E Washington St",
      website: "https://www.google.com",
      phone: "716-334-5784",
      email: "slmthang23@gmail.com",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero. Interdum consectetur libero id faucibus nisl tincidunt eget. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Tincidunt nunc pulvinar sapien et ligula. Enim facilisis gravida neque convallis a cras semper auctor neque. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Purus in massa tempor nec feugiat nisl. Vulputate ut pharetra sit amet aliquam id diam maecenas. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Et leo duis ut diam.\r\n\r\nFusce id velit ut tortor. Quisque egestas diam in arcu cursus euismod quis viverra. Blandit libero volutpat sed cras ornare. Scelerisque in dictum non consectetur a erat nam at. Sit amet consectetur adipiscing elit duis tristique. Sem viverra aliquet eget sit. Orci dapibus ultrices in iaculis nunc sed augue lacus. Proin sagittis nisl rhoncus mattis rhoncus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Neque viverra justo nec ultrices dui sapien eget.\r\n\r\nAliquet bibendum enim facilisis gravida neque convallis a. At quis risus sed vulputate odio ut enim blandit volutpat. Aliquet risus feugiat in ante metus dictum at tempor commodo. Nulla malesuada pellentesque elit eget gravida cum sociis. Dui ut ornare lectus sit. Consequat nisl vel pretium lectus quam id leo in. Sit amet justo donec enim. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Non blandit massa enim nec dui nunc. Fames ac turpis egestas sed. Id ornare arcu odio ut sem nulla pharetra diam sit. Euismod elementum nisi quis eleifend quam. Nulla at volutpat diam ut venenatis tellus in metus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Etiam dignissim diam quis enim. Cras sed felis eget velit aliquet sagittis id consectetur.",
      amenities: [],
      __v: 0
    },
    {
      _id: "664b2916c649a93744330f06",
      name: "Independence Day",
      thumbnail: "http://res.cloudinary.com/dxjfmwr5n/image/upload/v1716185529/discover716/curtiss.png.png",
      address: "334 Piston St, NY, 14305",
      website: "https://www.indy.com",
      phone: "716-334-5784",
      email: "nationalday@gmail.com",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero. Interdum consectetur libero id faucibus nisl tincidunt eget. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Tincidunt nunc pulvinar sapien et ligula. Enim facilisis gravida neque convallis a cras semper auctor neque. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Purus in massa tempor nec feugiat nisl. Vulputate ut pharetra sit amet aliquam id diam maecenas. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Et leo duis ut diam.\r\n\r\nFusce id velit ut tortor. Quisque egestas diam in arcu cursus euismod quis viverra. Blandit libero volutpat sed cras ornare. Scelerisque in dictum non consectetur a erat nam at. Sit amet consectetur adipiscing elit duis tristique. Sem viverra aliquet eget sit. Orci dapibus ultrices in iaculis nunc sed augue lacus. Proin sagittis nisl rhoncus mattis rhoncus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Neque viverra justo nec ultrices dui sapien eget.\r\n\r\nAliquet bibendum enim facilisis gravida neque convallis a. At quis risus sed vulputate odio ut enim blandit volutpat. Aliquet risus feugiat in ante metus dictum at tempor commodo. Nulla malesuada pellentesque elit eget gravida cum sociis. Dui ut ornare lectus sit. Consequat nisl vel pretium lectus quam id leo in. Sit amet justo donec enim. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Non blandit massa enim nec dui nunc. Fames ac turpis egestas sed. Id ornare arcu odio ut sem nulla pharetra diam sit. Euismod elementum nisi quis eleifend quam. Nulla at volutpat diam ut venenatis tellus in metus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Etiam dignissim diam quis enim. Cras sed felis eget velit aliquet sagittis id consectetur",
      amenities: [],
      __v: 0
    },
    {
      _id: "664b2b35c649a93744330f10",
      name: "Go Kart",
      thumbnail: "http://res.cloudinary.com/dxjfmwr5n/image/upload/v1716202292/discover716/Screenshot%202024-01-04%20013921.png.png",
      address: "334 Piston St, NY, 14305",
      website: "https://www.go.com",
      phone: "716-334-5784",
      email: "aaa@gmail.co",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero. Interdum consectetur libero id faucibus nisl tincidunt eget. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Tincidunt nunc pulvinar sapien et ligula. Enim facilisis gravida neque convallis a cras semper auctor neque. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Purus in massa tempor nec feugiat nisl. Vulputate ut pharetra sit amet aliquam id diam maecenas. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Et leo duis ut diam.\r\n\r\nFusce id velit ut tortor. Quisque egestas diam in arcu cursus euismod quis viverra. Blandit libero volutpat sed cras ornare. Scelerisque in dictum non consectetur a erat nam at. Sit amet consectetur adipiscing elit duis tristique. Sem viverra aliquet eget sit. Orci dapibus ultrices in iaculis nunc sed augue lacus. Proin sagittis nisl rhoncus mattis rhoncus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Neque viverra justo nec ultrices dui sapien eget.\r\n\r\nAliquet bibendum enim facilisis gravida neque convallis a. At quis risus sed vulputate odio ut enim blandit volutpat. Aliquet risus feugiat in ante metus dictum at tempor commodo. Nulla malesuada pellentesque elit eget gravida cum sociis. Dui ut ornare lectus sit. Consequat nisl vel pretium lectus quam id leo in. Sit amet justo donec enim. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Non blandit massa enim nec dui nunc. Fames ac turpis egestas sed. Id ornare arcu odio ut sem nulla pharetra diam sit. Euismod elementum nisi quis eleifend quam. Nulla at volutpat diam ut venenatis tellus in metus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Etiam dignissim diam quis enim. Cras sed felis eget velit aliquet sagittis id consectetur.",
      amenities: [],
      __v: 0
    },
    {
      _id: "664b3b10b5f62e663b3f0c97",
      name: "Cat",
      thumbnail: "http://res.cloudinary.com/dxjfmwr5n/image/upload/v1716206351/discover716/IMG_1098.jpeg.jpg",
      address: "445 E Washington ",
      website: "https://www.google.com",
      phone: "7163524476",
      email: "cat773@gmail.com",
      about: "This is a cat.",
      amenities: [],
      __v: 0
    }
  ]

// converting user to JSON
// const userJSON = JSON.stringify(user);



// writing the JSON string content to a file
// fs.writeFile("../data.json", userJSON, (error) => {
// // throwing the error
//     // in case of a writing problem
//     if (error) {

//         // logging the error
//         console.error(error);
//         throw error;
//     }

//     console.log("cache.json written correctly");
// });






// // reading a JSON file asynchronously
// fs.readFile("cache.json", (error, data) => {
//     // if the reading process failed,
//     // throwing the error
//     if (error) {
//         // logging the error
//         console.error(error);

//         throw err;
//     }

//     // parsing the JSON object
//     // to convert it to a JavaScript object
//     const user = JSON.parse(data);

//     // printing the JavaScript object
//     // retrieved from the JSON file
//     console.log(user);
// });


// cache
function cache(cacheName, data) {

    try {
        // convert data to JSON
        data = JSON.stringify(data, null, 4); // Indented 4 spaces

        // use fs to write
        fs.writeFileSync(cacheName, data);

        console.log(`Cached => ${cacheName}`);
    } catch (err) {

        console.error(`Cached => ${cacheName} failed.`);
        throw err;
    }
}


// read cache
function readCache(cacheName) {
        

    try {
        // read data from JSON file
        // store in jsonData
        const jsonData = fs.readFileSync(cacheName);

        // parse JSON into Object
        const cachedata = JSON.parse(jsonData);

        // log
        console.log(`Read Cache => ${cacheName}.`);

        // return the cache data
        return cachedata

    } catch (err) {

        console.error(`Read Cache => ${cacheName} failed.`);

        throw err;
    }
    

}



cache('slm.json',users);
// console.log(readCache('slm.json'));


dataService.fetchAll("events").then(data => console.log(data));