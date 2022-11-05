import React from "react";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <Container style={{maxWidth:"1150px"}}>
      <h1>Home</h1>
      <a href="/Inventory">Products</a>
    </Container>
  );
}

export default Home;
