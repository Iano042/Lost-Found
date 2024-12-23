import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ClaimItem() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="full names" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Item Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button className="primary">Submit</Button>
      </Form>
    </div>
  );
}

export default ClaimItem;
