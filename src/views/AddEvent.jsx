
import NavBar from "../components/NavBar.jsx";
import AddEvent from "../components/AddEvent.jsx";
import Footer from "../components/Footer.jsx";


export default function Events({isMobile}) {
    return (
        <div id="main-layout">
            <NavBar isMobile={isMobile} />
            <AddEvent isMobile={isMobile} />
            <Footer isMobile={isMobile} />
        </div>
    );
}