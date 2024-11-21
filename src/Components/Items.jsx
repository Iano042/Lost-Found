import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import lost2 from "../assets/lost2.jpeg";
import lost3 from "../assets/lost3.jpeg";
import lost4 from "../assets/lost4.jpeg";
import lost5 from "../assets/lost5.jpeg";
import lost6 from "../assets/lost6.jpeg";
import lost7 from "../assets/lost7.jpeg";
import lost8 from "../assets/lost8.jpeg";
import lost9 from "../assets/lost9.jpg";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Items() {
  const cardData = [
    {
      image: lost2,
      title: "Bike",
      description:
        "A modern light blue bike, fully functional with a deflated rear wheel.",
      dateFound: Date(),
    },
    {
      image: lost3,
      title: "Shoes",
      description: "A blue sneaker without laces",
      dateFound: Date(),
    },
    {
      image: lost4,
      title: "Watch",
      description: "Silver Rolex watch and with no defects.",
      dateFound: Date(),
    },
    {
      image: lost5,
      title: "Student ID",
      description: "E224/64688/2021",
      dateFound: Date(),
    },
    {
      image: lost6,
      title: "Journal Book",
      description: "Orange ,new in perfect condition. ",
      dateFound: Date(),
    },
    {
      image: lost7,
      title: "Phone",
      description: "Samsung Galaxy A03,4+64Gb storage",
      dateFound: Date(),
    },
    {
      image: lost8,
      title: "Backpack",
      description: "Grey,waterproof laptop bag",
      dateFound: Date(),
    },
    {
      image: lost9,
      title: "Glasses",
      description: "Blue-ray light glasses",
      dateFound: Date(),
    },
  ];
  return (
    <div>
      <Row>
        {cardData.map((card, index) => (
          <Card style={{ width: "18rem" }} className="card" key={index}>
            <Card.Img
              variant="top"
              src={card.image}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <Card.Text>{card.dateFound}</Card.Text>
              <Nav.Link>
                <Nav.Link as={Link} to="/ClaimItem">
                  <Button variant="primary">Claim Item</Button>
                </Nav.Link>
              </Nav.Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default Items;
