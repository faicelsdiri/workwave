import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter,FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    
    <div style={{ backgroundColor: "#d6d8db", padding: "20px 0", color: "#495057", position: "fixed", bottom: 0, height:"100px",width: "100%" }}>
    <Container>
      <Row>
        <Col md={6}>
          {/* Logo Section */}
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img src="https://i.ibb.co/BskXH2h/logo-no-background.png" alt="logo-no-background" border="0" width="200" height="50px" />
            <p className="my-3" style={{ width: '500px' }}>
            Navigate Your Future
            </p>
          </a>
        </Col>
        <Col md={6}>
          {/* Follow Us Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
            <h5 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Follow Us</h5>
            <div className="d-flex">
              <div className="me-3">
                <FaFacebookF size={30} style={{ color: '#3b5998' }} />
              </div>
              <div className="me-3">
                <FaTwitter size={30} style={{ color: '#00acee' }} />
              </div>
              <div>
                <FaInstagram size={30} style={{ color: '#e4405f' }} />
              </div>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>

    <Container>
      <span className="text-muted">
        © {new Date().getFullYear()} WorkWave. All rights reserved.
      </span>
    </Container>
  </div>
  );
}

export default Footer;


