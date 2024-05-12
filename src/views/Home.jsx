import NavBar from "../components/NavBar.jsx";
import Homepage from "../components/Homepage.jsx";
import Footer from "../components/Footer.jsx";
import WelcomePopUp from "../components/WelcomePopUp.jsx";


export default function Home({isMobile}) {
    return (
        <div id="main-layout">
            <WelcomePopUp />
            <NavBar isMobile={isMobile} />
            <Homepage isMobile={isMobile} />
            <Footer isMobile={isMobile} />
        </div>
    );
}