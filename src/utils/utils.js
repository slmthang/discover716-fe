

// import

const getCookie = (cookie) => {
    return document.cookie
            .split("; ")
                .find((row) => row.startsWith(cookie))
                    ?.split("=")[1];
}

const setCookie = (cookieName, cookieValue, timer, path = '/') => {
    document.cookie = `${cookieName}=${cookieValue}; max-age=${timer}; path=${path}`;
}


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


export default {
    getCookie,
    setCookie,

    cache,
    readCache
}