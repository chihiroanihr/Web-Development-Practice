// Import Bootstrap Components
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="project-imgbox">
        <img src={imgUrl} alt="project thumbnail" />
        <div className="project-texts">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
