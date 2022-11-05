import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState } from "react";

function Index() {
  const [data, setData] = useState();

  axios
    .get("http://localhost:4000/api/v1/Category")
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <Container style={{ maxWidth: "1150px" }}>
        <center>
          <h1 style={{ fontSize: "50px", margin: "10px" }}>Products</h1>
        </center>
        <Row
          className="text-justify"
          style={{ paddingTop: "20px", paddingBottom: "30px" }}
        >
          {data
            ? data.map((item) => (
                <Col style={{ textAlign: "center" }} key={item.id}>
                  <a href={`Product/${item.Category}`}>
                    <img src={item.Image} alt="product" width={200} style={{borderRadius:10}}/>
                    <h1
                      style={{
                        padding: "20px",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      {item.Category}
                    </h1>
                  </a>
                </Col>
              ))
            : "Loading"}
        </Row>
      </Container>
    </>
  );
}

export default Index;
