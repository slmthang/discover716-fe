
import "../scss/ContactUs.scss";

function ContactUs() {
    return (
        <form action="https://formspree.io/f/xleqponl" class="contact-form center" method="POST">

            <h1>Contact Us by filling the form below.</h1>

            <div id="fields">
                <div class="input-control name-email">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div class="input-control">
                    <input type="text" name="subject" placeholder="Subject" required />
                </div>
                <div class="input-control">
                    <textarea name="message" cols="30" rows="10" placeholder="Enter Message Here..."></textarea>
                </div>
                <div class="submit-btn center">
                    <button type="submit">Send</button>
                </div>
            </div>
                
        </form>
    );
}


export default ContactUs;