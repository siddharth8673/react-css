import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const quikLinks = [
    {
      path: "/about",
      display: "About",
    },
    {
      path: "#",
      display: "Privacy Policy",
    },
    {
      path: "/cars",
      display: "Car Listing",
    },
    {
      path: "/blogs",
      display: "Blog",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo mb-4">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-3">
                  <i class="ri-car-line"></i>
                  <span>
                      Rent Car <br /> Service
                    </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              optio voluptate dolore quia aspernatur consequatur reiciendis
              dicta veritatis deleniti maiores. Commodi, tempore magnam? Sint
              perspiciatis doloremque architecto quis aperiam quia!
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quikLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Zindabazar,Sylhet,Bangladesh</p>
              <p className="office__info">phone:+ 65565 65656</p>
              <p className="office__info">Email:mubib5532@gmail.com</p>
              <p className="office__info">office: Time: 10am - 7pm</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Newsletter</h5>
              <p className="office__info">Subscribe our Newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email"></input>
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>CopyRight {year}, Devlope by
                Car rent. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
