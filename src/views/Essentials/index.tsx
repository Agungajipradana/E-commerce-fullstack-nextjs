import styles from "./Essentials.module.scss";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import imageCard1 from "../../assets/images/essentials/men.jpeg";
import imageCard2 from "../../assets/images/essentials/woman.jpeg";
import imageCard3 from "../../assets/images/essentials/kids.jpg";
import Image from "next/image";

const EssentialsView = () => {
  return (
    <>
      <div className={styles.essentials}>
        <h1>The Essentials</h1>
        <CardGroup className={styles.essentials__cardGroup}>
          <Card>
            <Button variant="light" className="position-absolute top-5  m-3">
              Men
            </Button>
            {/* <Card.Img variant="top" src="../../assets/images/essentials/men.jpeg" /> */}
            <Image src={imageCard1} alt="" style={{ width: "auto", height: "80vh" }} />
          </Card>
          <Card>
            <Button variant="light" className="position-absolute top-5  m-3">
              Woman
            </Button>
            {/* <Card.Img variant="top" src="../../assets/images/essentials/men.jpeg" /> */}
            <Image src={imageCard2} alt="" style={{ width: "auto", height: "80vh" }} />
          </Card>
          <Card>
            <Button variant="light" className="position-absolute top-5  m-3">
              Kids
            </Button>
            {/* <Card.Img variant="top" src="../../assets/images/essentials/men.jpeg" /> */}
            <Image src={imageCard3} alt="" style={{ width: "auto", height: "80vh" }} />
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default EssentialsView;
