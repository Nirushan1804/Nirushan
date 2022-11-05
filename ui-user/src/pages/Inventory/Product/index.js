import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Women from "../../../assets/images/Inventory/women.png";
import Men from "../../../assets/images/Inventory/men.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Product(props) {
  console.log(props.match.params.id);

  const [data, setData] = useState();

  axios
    .get("http://localhost:4000/api/v1/SubCategory")
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  const [searchTerm, setSearchTerm] = useState(props.match.params.id);

  return (
    <>
      <Container style={{ maxWidth: "1150px" }}>
        <center>
          <h1 style={{ fontSize: "50px", margin: "10px" }}>
            Products 
          </h1>
        </center>
        <Row
          className="text-justify"
          style={{ paddingTop: "20px", paddingBottom: "30px" }}
        >
          {data
            ? data.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (val.Category.includes(searchTerm)) {
                return val;
              }
            }).map((item) => (
                <Col style={{ textAlign: "center" }}>
                  <Link to={`/ProductType/${item.SubCategory}`}>
                    <img src={item.Image} alt="product" width={200} style={{borderRadius:10}}/>
                    <h1
                      style={{
                        padding: "20px",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      {item.SubCategory}
                    </h1>
                  </Link>
                </Col>
              ))
            : "Loading..."}
        </Row>
      </Container>
    </>
  );
}

export default Product;
