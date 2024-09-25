import { useState } from "react";
import "./styles/Form.css";
import { validateEmail } from "./utils/helpers";



function Form() {
    // Stating variables
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


// This function checks if each of the fields of the form are completed.
    const handleMouseEnter = (field) => {
        if ((field === "userName" && !userName) || 
            (field === "email" && !email) || 
            (field === "message" && !message)) {
            setErrorMessage('This field is required!');
        } else {
            setErrorMessage('');
        }
    };

    // This function uses the herlper to check of the email is correct.
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email is not valid!');
            return;
        }
        alert(`Thanks ${userName}, you will be contacted shortly at ${email}`);
        setUserName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");

    };

    return (
        <div className="container"> 
            
            <h1>
                CONTACT
            </h1>

            <form className="form" 

            

            onSubmit={handleFormSubmit}>
                <h2>Name:</h2>
                <input
                    type="text"
                    name="userName"
                    value={userName}
                    placeholder="Your name here"
                    onChange={handleInputChange}
                    onMouseEnter={() => handleMouseEnter("userName")}
                    
                />
                <h2>Email address:</h2>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Your email here"
                    onChange={handleInputChange}
                    onMouseEnter={() => handleMouseEnter("email")}
                    
                />
                <h2>Message:</h2>
                <textarea 
                    type="text"
                    name="message"
                    value={message}
                    placeholder= "Write your message here"
                    onChange={handleInputChange}
                    onMouseEnter={() => handleMouseEnter("message")}
                    
                />
                <button type="submit">Submit</button>
            </form>
        
                <div>
                    <p>{errorMessage}</p>
                </div>
            
        </div>
    );
}

export default Form;