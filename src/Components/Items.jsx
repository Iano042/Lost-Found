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

function Items() {
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  const cardData = [
    {
      image: lost2,
      title: "Bike",
      description: "Lost",
      dateFound: formattedDate,
    },
    {
      image: lost3,
      title: "Shoes",
      description: "Lost",
      dateFound: formattedDate,
    },
    {
      image: lost4,
      title: "Bike",
      description: "Lost",
      dateFound: formattedDate,
    },
    {
      image: lost5,
      title: "Bike",
      description: "Lost",
      dateFound: formattedDate,
    },
    {
      image: lost6,
      title: "Bike",
      description: "Lost",
      dateFound: formattedDate,
    },
    {
      image: lost7,
      title: "Bike",
      description: "Lost",
      dateFound: formattedDate,
    },
    {
      image: lost8,
      title: "Bike",
      description: "Lost",
      dateFound: formattedDate,
    },
    {
      image: lost9,
      title: "Bike",
      description: "Lost",
      dateFound: formattedDate,
    },
  ];
  return (
    <div>
      <Row>
        {cardData.map((card, index) => (
          <Card
            style={{ width: "18rem", margin: "2px", borderadius: "5px" }}
            className="card"
            key={index}
          >
            <Card.Img
              variant="top"
              src={card.image}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <Card.Text>{card.dateFound}</Card.Text>

              <Button variant="primary" style={{ backgroundColor: "green" }}>
                Claim Item
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default Items;
