
import "./Theme.scss";

export default function Theme({darkMode, setDarkMode}) {


    function clickHandler(x) {

        if (x) {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    }

    return (
        <button id="theme-btn" onClick={() => clickHandler(darkMode)}>
            {darkMode ? <i className="fa-solid fa-circle-half-stroke"></i> : <i className="fa-solid fa-circle-half-stroke fa-flip-horizontal"></i>}
        </button>
    )
}