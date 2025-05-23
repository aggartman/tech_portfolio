import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "contact", name, email, message}),
        }).then(() => alert("Message sent successfully!")).catch((error) => alert(error));
    }

    return(
        <section id={"contact"} className="relative">
            <div className="container">
                <div className="googleMapComponent">
                    <iframe
                        width="100%"
                        height="100%"
                        title="Map"
                        className="googleMap"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=7644+royal+ln+dallas&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"/>
                </div>
                <div className="personalInformation">
                    <div className="addressInfo">
                        <h2 className="address">ADDRESS</h2>
                        <p className="address">7644 Royal Ln. <br /> Dallas, TX 75231 </p>
                    </div>
                    <div className="contactInfo">
                        <h2 className="emailTitle">Email</h2>
                        <a className="email">aggrizer@gmail.com</a>
                        <h2 className="phoneTitle">PHONE</h2>
                        <p className="phone">123-456-7890</p>
                    </div>
                </div>
                <div className="contactForm">
                    <form name="contact" onSubmit={handleSubmit}>
                        <h2 className="contactFormTitle">CONTACT</h2>
                        <div className="contactFormName">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="contactFormInput" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="contactFormEmail">
                            <label htmlFor="email">Email:</label>
                            <input type="text" className="contactFormInput" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="contactFormMessage">
                            <label htmlFor="message">Message:</label>
                            <input type="text" className="contactFormInput" id="message" name="message" onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <button type="submit" className="contactFormSubmit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}