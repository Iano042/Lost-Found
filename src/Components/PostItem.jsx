import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function PostItem() {
  return (
    <>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <b>Name of item</b>
        </InputGroup.Text>
        <Form.Control aria-label="First name" />
      </InputGroup>
      <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          <b>Description of lost item</b>
        </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          <b>Where found</b>
        </Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
}

export default PostItem;
