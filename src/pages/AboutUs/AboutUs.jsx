
import "./AboutUs.scss";
import contactIntroImg from "../../assets/7.jpeg";

function AboutUs() {
    return (
        <div id="aboutUs-cont" className="center box-shadow ">
            <div id="aboutUs">

                <div className="center">
                    <h1>Discover716</h1>
                    <img src={contactIntroImg} alt="picture of some people from discover716" />
                </div>

                <h2>Discover716 is non-profit organization with a two-pronged mission.</h2>

                <p>First, we want to <span className="textlight">help small businesses</span> and the non-profit community thrive by helping them market themselves and building their brand recognition, knowing that many are resource-constrained, especially due to the pandemic. </p>
                <br />
                <p>Second, we are creating internships for college students in a collaborative work environment to help these small businesses and not-for-profits. College students across a multitude of disciplines – <span className="textlight">marketing, technology, graphic arts, journalism</span>, and so on – gain invaluable experience with Discover716 helping meet the needs of our “clients.” Mentors help guide the students, but the students have tremendous latitude to tap their creativity and build their portfolio as they worked to build the brand of those who needed our assistance. Your contribution is essential to helping us fulfill our mission.</p>
            </div>
                
        </div>
    );
}


export default AboutUs;