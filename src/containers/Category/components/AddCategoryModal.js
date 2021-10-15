import React from "react";
import Input from "../../../components/UI/Input/";
import Modal from "../../../components/UI/Modal";
import { Row, Col } from "react-bootstrap";
const AddCategoryModal = (props) => {
  const {
    show,
    handleClose,
    modalTitle,
    categoryName,
    setCategoryName,
    parentCategoryId,
    setParentCategoryId,
    categoryList,
    handleCategoryImage,
  } = props;
  return (
    <Modal show={show} handleClose={handleClose} modalTitle={modalTitle}>
      <Row>
        <Col>
          <Input
            value={categoryName}
            placeholder={`New category`}
            onChange={(e) => setCategoryName(e.target.value)}
            className="form-control-sm"
          />
        </Col>
        <Col>
          <select
            className="form-control form-control-sm"
            onChange={(e) => setParentCategoryId(e.target.value)}
            value={parentCategoryId}
          >
            <option>Select Category</option>
            {categoryList.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </select>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="file"
            name="categoryImage"
            onChange={handleCategoryImage}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default AddCategoryModal;
