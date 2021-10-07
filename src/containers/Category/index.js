/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory,addCategory } from "../../actions";
import Input from "../../components/UI/Input/";
function Category(props) {
  const category = useSelector((state) => state.category);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const [categoryImage, setCategoryImage] = useState("");

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const renderCategories = (categories) => {
    //use of Data Structure
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category._id}>
          {category.name}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };

  const handleClose = () => {
    const form=new FormData();
    form.append('name',categoryName);
    form.append('parentId',parentCategoryId);
    form.append('categoryImage',categoryImage);
    dispatch(addCategory(form));
    // const cat ={
    //     categoryName,
    //     parentCategoryId,
    //     categoryImage
    // };
    // console.log(cat);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };
  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Category</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>
              {renderCategories(category.categories)}
              {/* {JSON.stringify(createCategoryList(category.categories))} */}
            </ul>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={categoryName}
            placeholder={`New category`}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <select
            className="form-control"
            onChange={(e) => setParentCategoryId(e.target.value)}
            value={parentCategoryId}
          >
            <option>Select Category</option>
            {createCategoryList(category.categories).map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </select>
          <input
            type="file"
            name="categoryImage"
            onChange={handleCategoryImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export default Category;
