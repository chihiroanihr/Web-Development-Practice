// Import Hooks
import { useState, useEffect } from "react";
// Import Bootstrap Components
import { Alert, Row, Col } from "react-bootstrap";

export const Newsletter = ({ onValidated, status, message }) => {
  // State for storing form details
  const [email, setEmail] = useState("");

  // Handle Submit Button
  const handleSubmit = (event) => {
    // if email contains @ sign then validate
    event.preventDefault();

    email &&
      email.indexOf("@") > -1 && // if email contains @ sign then validate
      onValidated({
        EMAIL: email,
      });
  };

  // Clear Forms: only happens if email registration is successful
  const clearFields = () => {
    setEmail("");
  };
  // Only if success then clear the form fields
  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  return (
    <Col lg={12}>
      <div className="newsletter-box">
        <Row>
          {/* Message and Status Column */}
          <Col xl={5} lg={6}>
            <h3>Subscribe to our Newsletter</h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          {/* Form Column */}
          <Col xl={7} lg={6}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-box">
                {/* Email Input */}
                <input
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={(event) => setEmail(event.target.value)}
                />
                {/* Submit Button */}
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
