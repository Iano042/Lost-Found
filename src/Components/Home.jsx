import Button from "react-bootstrap/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="img-bg">
        <div className="description">
          <h1>Description:</h1>
          <p>Post and Claim Lost Items</p>
        </div>
        <div className="buttonHome d-flex justify-content-md-evenly">
          <Button
            style={{ marginTop: "200px" }}
            variant="primary"
            size="lg"
            active
            onClick={() => navigate("/Post")}
          >
            Post Item
          </Button>
          
          
        </div>
      </div>
    </div>
  );
}

export default Home;
