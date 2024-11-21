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
        <div className="button d-flex justify-content-md-evenly ">
          <Button
            variant="primary"
            size="lg"
            active
            onClick={function () {
              navigate("/Post");
            }}
          >
            Post Item
          </Button>
          <Button variant="secondary" size="lg" active>
            Find Item
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;