import { useState } from "react";
import "./styles/Form.css";
import { validateEmail } from "./utils/helpers";

function Form() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "userName") {
            setUserName(inputValue);
        } else if (inputType === "email") {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
        setErrorMessage('');
    };

    const handleMouseEnter = (field) => {
        if ((field === "userName" && !userName) || 
            (field === "email" && !email) || 
            (field === "message" && !message)) {
            setErrorMessage('This field is required!');
        } else {
            setErrorMessage('');
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is not valid!');
            return;
        }

        // El form se enviará automáticamente al correo con Formsubmit
        alert(`Thanks ${userName}, your message has been sent!`);
        setUserName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");

        // Envía el formulario manualmente
        document.getElementById("contact-form").submit();
    };

    return (
        <div className="container"> 
            <h1>CONTACT</h1>

            <form
                id="contact-form"
                className="form"
                action="https://formsubmit.co/mjose.alve@gmail.com"
                method="POST"
                onSubmit={handleFormSubmit}
            >
                <h2>Name:</h2>
                <input
                    type="text"
                    name="userName"
                    value={userName}
                    placeholder="Your name here"
                    onChange={handleInputChange}
                    onMouseEnter={() => handleMouseEnter("userName")}
                    required
                />

                <h2>Email address:</h2>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Your email here"
                    onChange={handleInputChange}
                    onMouseEnter={() => handleMouseEnter("email")}
                    required
                />

                <h2>Message:</h2>
                <textarea
                    name="message"
                    value={message}
                    placeholder="Write your message here"
                    onChange={handleInputChange}
                    onMouseEnter={() => handleMouseEnter("message")}
                    required
                />

                {/* Puedes ocultar campos extra con inputs hidden */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />

                <button type="submit">Submit</button>
            </form>

            <div>
                <p>{errorMessage}</p>
            </div>
        </div>
    );
}

export default Form;
