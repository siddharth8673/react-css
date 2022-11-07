import React from "react";
import  "../../styles/services-list.css";
import { Col } from "reactstrap";
import servicesData from "../../assets/data/serviceData.js";

const ServicesList = () => {
  return (<>
  {
    servicesData.map((item)=>(
      <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">   
      <span className="mb-3">
        <i class={item.icon}/>
      </span>
      <h6>
        {item.title}
      </h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
    ))
  }
  </>)
}

export default ServicesList
