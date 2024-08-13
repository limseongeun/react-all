import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container className="product-detail-area">
      <Row>
        <Col className="img-box" lg={5}>
          <img src={product?.img} alt="" />
        </Col>
        <Col lg={7} className="product-detail-info">
          <div>{product?.title}</div>
          <div>\ {product?.price}</div>
          <div>{product?.choice === true ? "Consicous choice" : ""}</div>
          <div>
            <Form.Select aria-label="사이즈 선택">
              <option>사이즈 선택</option>
              {product?.size.map((item, index) => (
                <option value={index + 1} key={index}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </div>
          <div>
            <Button variant="dark" type="button">
              추가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
