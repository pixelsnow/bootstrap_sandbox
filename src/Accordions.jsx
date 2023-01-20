import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";

const Accordions = () => {
  return (
    <div class="accordion" id="accordionExample">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>This will be open by default</Accordion.Header>
          <Accordion.Body>Heya</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What is the meaning of the universe, life and everything?
          </Accordion.Header>
          <Accordion.Body>42</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Accordions;
