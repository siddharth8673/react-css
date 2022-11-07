import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <>
      <form className="form">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <FormGroup className="form__group">
            <input type="text" placeholder="From address" required></input>
          </FormGroup>
          <FormGroup className="form__group">
            <input type="text" placeholder="To address" required></input>
          </FormGroup>
          <FormGroup className="form__group">
            <input type="date" placeholder="Journey date" required></input>
          </FormGroup>
          <FormGroup className="form__group">
            <input
              className="journey__time"
              type="time"
              placeholder="Journey time"
              required
            ></input>
          </FormGroup>
          <FormGroup className="select__group">
            <select>
              <option value="ac">Ac car</option>
              <option value="non-ac">NonAc car</option>
            </select>
          </FormGroup>
          <FormGroup className="form__group">
            <button className="btn find__car-btn">Find Car</button>
          </FormGroup>
        </div>
      </form>
    </>
  );
};

export default FindCarForm;
