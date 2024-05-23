

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



export default {
    getCookie,
    setCookie
}