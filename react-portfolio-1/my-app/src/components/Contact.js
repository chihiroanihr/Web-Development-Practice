// Import Hooks
import { useState } from "react";
// Import Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";
// Import Assets
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  // Form fields
  const formInitDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  // State for storing form details
  const [formDetails, setFormDetails] = useState(formInitDetails);
  // State for submit button
  const [buttonText, setButtonText] = useState("Send");
  // State for API response whether message was sent or not
  const [status, setStatus] = useState({});

  // Handle storing form information
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails, // rest of the form fileds are intact
      [category]: value, // only updates the field indicated in the arguments
    });
  };

  // Handle Submit Button
  // asynchronous since we are making rquest to API
  const handleSubmit = async (event) => {
    // prevent reloading the page when user submits
    event.preventDefault();
    // change button status
    setButtonText("Sending...");

    // send message
    let response = await fetch("https://localhost:4000/contact", {
      method: "POST",
      Headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    // get response in JSON format
    let result = response.json();
    // process the response
    if (result.code === 200) {
      setStatus({
        success: true,
        message: "Message sent successfully.",
      });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    }

    // set button status back to normal once sending is done
    setButtonText("Send");
    // initialize form input fields
    setFormDetails(formInitDetails);
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          {/* Image Thumbnail Column */}
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          {/* Form Column */}
          <Col md={6}>
            <h2>Get In Touch</h2>
            {/* call "handleSubmit" function when submit button clicked */}
            <form onSubmit={handleSubmit}>
              <Row>
                {/* first name input column */}
                <Col sm={6} className="px-sm-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(event) =>
                      onFormUpdate("firstName", event.target.value)
                    }
                  />
                </Col>
                {/* last name input column */}
                <Col sm={6} className="px-sm-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(event) =>
                      onFormUpdate("lastName", event.target.value)
                    }
                  />
                </Col>
                {/* email input column */}
                <Col sm={6} className="px-sm-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(event) =>
                      onFormUpdate("email", event.target.value)
                    }
                  />
                </Col>
                {/* phone number input column */}
                <Col sm={6} className="px-sm-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(event) =>
                      onFormUpdate("phone", event.target.value)
                    }
                  />
                </Col>
                {/* messages input column */}
                <Col className="d-flex flex-column align-items-center px-sm-1">
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(event) =>
                      onFormUpdate("message", event.target.value)
                    }
                  ></textarea>
                  {/* Submit Button */}
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {/* Status Message Column */}
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
