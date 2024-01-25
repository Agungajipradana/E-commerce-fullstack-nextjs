import styles from "./ButtonViewProductDetails.module.scss";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalViewProductDetailProps {
  show: boolean;
  onHide: () => void;
  detailProduct: {
    name: string;
    description: string;
    sole: string;
    color: string;
    style: string;
    country: string;
    titleOrigins: string;
    origins: string;
  };
}

const ButtonViewProductDetails = ({ detailProduct }: { detailProduct: ModalViewProductDetailProps["detailProduct"] }) => {
  const [modalShow, setModalShow] = useState(false);

  const ModalViewProductDetail = ({ show, onHide, detailProduct }: ModalViewProductDetailProps) => {
    return (
      <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{detailProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h6>Description</h6>
            <p>{detailProduct.description}</p>
          </div>
          <div>
            <h6>Product Details</h6>
            <ul>
              <li>{detailProduct.sole}</li>
              <li>Colour Shown: {detailProduct.color}</li>
              <li>Style: {detailProduct.style}</li>
              <li>Country/Region of Origin: {detailProduct.country}</li>
            </ul>
          </div>
          <div>
            <h6>{detailProduct.titleOrigins}</h6>
            <p>{detailProduct.origins}</p>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      <Button onClick={() => setModalShow(true)} className={styles.productDetail__button__view__product}>
        View Product Details
      </Button>

      <ModalViewProductDetail show={modalShow} onHide={() => setModalShow(false)} detailProduct={detailProduct} />
    </>
  );
};

export default ButtonViewProductDetails;
