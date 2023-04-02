// Import Hooks
import { useState, useEffect } from "react";
// Import Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";
// Import Bootstrap Icons
import { ArrowRightCircle } from "react-bootstrap-icons";
// Import animate.css
import "animate.css";
// Import Track Visibility
import TrackVisibility from "react-on-screen";
// Import Assets
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const textsToRotate = ["Web Developer", "Web Design", "UI/UX Designer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100); // interval (how fast a letter comes)
  const period = 2000; // transition between each words

  // Typing Effect Animation
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker); // clear interval
    };
  }, [text]); // use effect everytime the text gets updated

  const tick = () => {
    let i = loopNum % textsToRotate.length;
    let fullText = textsToRotate[i];
    let updatedText = isDeleting // if current text is deleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    // Update text
    setText(updatedText);

    // If on deletion
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2); // faster delta speed for deletion
    }
    // If fully typed
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // set delta back to normal
    }
    // If fully deleted
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(100);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          {/* Text Sectoion */}
          <Col xs={12} md={6} xl={7}>
            {/* animation */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Rhina Kim `}
                    <span className="wrap">{text}</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button onClick={() => console.log("connect")}>
                      Let's Connect
                      <ArrowRightCircle size={25} />
                    </button>
                  </h1>
                </div>
              )}
            </TrackVisibility>
          </Col>
          {/* Floating Image Section */}
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header floating icon" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
