import { ProductsProps } from "@/types";
import styles from "./DetailProductNikeMen.module.scss";
import Image from "next/image";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DetailProductNikeMenView = ({ nikeMen }: { nikeMen: ProductsProps }) => {
  const [activeSize, setActiveSize] = useState<string | null>(null);

  const toggleSize = (size: string) => {
    if (activeSize === size) {
      setActiveSize(null);
    } else {
      setActiveSize(size);
    }
  };

  function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{nikeMen.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h6>Description</h6>
            <p>{nikeMen.description}</p>
          </div>
          <div>
            <h6>Product Details</h6>
            <ul>
              <li>{nikeMen.sole}</li>
              <li>Colour Shown: {nikeMen.color}</li>
              <li>Style: {nikeMen.style}</li>
              <li>Country/Region of Origin: {nikeMen.country}</li>
            </ul>
          </div>
          <div>
            <h6>{nikeMen.titleOrigins}</h6>
            <p>{nikeMen.origins}</p>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

  function ViewProductDetails() {
    const [modalShow, setModalShow] = useState(false);

    return (
      <>
        <Button onClick={() => setModalShow(true)} className={styles.productDetail__button__view__product}>
          View Product Details
        </Button>

        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }

  return (
    <>
      <h1 className={styles.title}>Detail Product</h1>
      <div key={nikeMen?.id} className={styles.productDetail}>
        <div className={styles.productDetail__between}>
          <div>
            <Image src={nikeMen?.image && nikeMen.image} alt={nikeMen?.name} width={300} height={300} priority className={styles.productDetail__image} />
          </div>
          <div className={styles.productDetail__desc}>
            <h4 className={styles.productDetail__name}>{nikeMen?.name}</h4>
            <p className={styles.productDetail__category}>{nikeMen?.category}</p>
            <p className={styles.productDetail__price}>
              {nikeMen?.price &&
                nikeMen.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
            </p>
            <div className={styles.productDetail__selectSize}>
              <p className={styles.productDetail__selectSize__p}>Select Size</p>
              <p>Size Guide</p>
            </div>
            <div className={styles.productDetail__size}>
              {nikeMen.size?.map((size) => (
                <div key={size}>
                  <button className={`${styles.productDetail__size__button} ${activeSize === size.toString() ? styles.activeSizeButton : ""}`} onClick={() => toggleSize(size.toString())}>
                    EU {size}
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.productDetail__button}>
              <button className={styles.productDetail__button__addToCart}>Add to Cart</button>
              <button className={styles.productDetail__button__buyNow}>Buy Now</button>
            </div>
            <div className={styles.productDetail__button__view}>
              {/* <button className={styles.productDetail__button__view__product}>View Product Details</button> */}
              <ViewProductDetails />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProductNikeMenView;
