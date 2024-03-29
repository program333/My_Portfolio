import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";





function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img style={{ width: '100%', height: '100%', objectFit: 'cover' }} variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ textAlign: "justify" , fontSize:"2rem"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" , fontSize:"1.5rem"}}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" style={{ textAlign: "justify" , fontSize:"1.5rem"}}>
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px", fontSize:"1.5rem" }}
          >
            <CgWebsite style={{ textAlign: "justify" , fontSize:"1.5rem"}}/> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;