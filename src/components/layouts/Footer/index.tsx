import { RiFacebookBoxFill, RiInstagramFill, RiTwitterXFill, RiYoutubeFill } from "react-icons/ri";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 link-secondary">
              <RiTwitterXFill className={style.icon} />
            </a>
            <a href="" className="me-4 link-secondary">
              <RiInstagramFill className={style.icon} />
            </a>
            <a href="" className="me-4 link-secondary">
              <RiFacebookBoxFill className={style.icon} />
            </a>
            <a href="" className="me-4 link-secondary">
              <RiYoutubeFill className={style.icon} />
            </a>
          </div>
        </section>

        <section className={style.footer}>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className={`col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ${style.footer__row}`}>
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>FIND A STORE
                </h6>
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>BECOME A MEMBER
                </h6>
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>STUDENT DISCOUNTS
                </h6>
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>Send Us Feedback
                </h6>
              </div>

              <div className={`col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ${style.footer__row}`}>
                <h6 className="text-uppercase fw-bold mb-4">GET HELP</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Order Status
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Delivery
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Returns
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
              </div>

              <div className={`col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ${style.footer__row}`}>
                <h6 className="text-uppercase fw-bold mb-4">ABOUT</h6>
                <p>
                  <a href="#!" className="text-reset">
                    News
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Investors
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Sustainability
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> Jakarta, JKT 10012, INA
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> + 62 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> + 62 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={`text-center p-4 ${style.footer__copyright}`}>
          © 2023 Created By Agung Aji,{" "}
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            All Rights Reserved
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
