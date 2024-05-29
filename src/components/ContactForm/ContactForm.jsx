
import "./ContactForm.scss";

function ContactForm() {
    return (

        <div id="contact-form-cont" className="center box-shadow">
            <form action="https://formspree.io/f/xleqponl" className="contact-form center glass" method="POST">

                <h1>Contact Us by filling the form below.</h1>

                <div id="fields">
                    <div className="input-control name-email">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="input-control">
                        <input type="text" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="input-control">
                        <textarea name="message" cols="30" rows="10" placeholder="Enter Message Here..."></textarea>
                    </div>
                    <div className="submit-btn center">
                        <button type="submit">Send</button>
                    </div>
                </div>
                
            </form>
        </div>
        
    );
}


export default ContactForm;