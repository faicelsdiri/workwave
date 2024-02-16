import Footer from "./Footer";
import Nav from "./Nav";

import { Card, Col, Row, Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserImage } from "../Redux/actions";

function SocieteDashboard() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { _id } = useParams();
  //get photo
  useEffect(() => {
    if (_id) {
      // Assuming you have the user's ID available in the Redux state
      dispatch(fetchUserImage(_id));
    }
  }, [dispatch, user]);
  const fullImagePath = `${process.env.REACT_APP_BACKEND_URL}${user.profilPicture}`;
  console.log(fullImagePath);

  const { id_societe } = useParams();
  const [title, setTitle] = useState("");

  const addjob = (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "20px",
        margin: "20px",
        boxShadow: "0 1px 5px rgba(0, 0, 0, 0.5)",
        boxSizing: "",
        background: "white",
      }}
    >
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title of Job</Form.Label>
          <Form.Control as="textarea" name="title" required />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description of Job</Form.Label>
          <Form.Control as="textarea" name="description" required />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="nb_poste">
              <Form.Label>Number of Poste</Form.Label>
              <Form.Control type="number" name="nb_poste" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="nb_candidates">
              <Form.Label>Number of Candidates</Form.Label>
              <Form.Control type="number" name="nb_candidates" required />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="deadline">
          <Form.Label>Deadline</Form.Label>
          <Form.Control type="text" name="deadline" required />
        </Form.Group>

        <Form.Group controlId="salaire">
          <Form.Label>Salaire</Form.Label>

          <Form.Control type="number" name="salaire" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );

  return (
    <div>
      <Nav />
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "10px",
          justifyContent: "center",
          // margin: "100px",
          width: "1000px",
          height: "80px",
          marginTop: "20px",
          marginBottom: "10px",
          marginLeft: "20%",
          marginRight: "",
          boxShadow: "0 1px 5px rgba(0, 0, 0, 0.5)",
          boxSizing: "",
          background: "#eaecef",
          textAlign: "center",
        }}
      >
        <h1>Societe Dashboard</h1>
        {user.profilPicture ? (
          <img alt="User Profile" src={fullImagePath} />
        ) : (
          <img alt="User Profile" />
        )}
      </div>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
          margin: "20px",
          boxShadow: "0 1px 5px rgba(0, 0, 0, 0.5)",
          boxSizing: "",
          background: "white",
        }}
      >
        <Card
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginLeft: "20px",
            width: "220px",
            height: "300px",
            backgroundColor: "transparent",
            borderColor: "black",
            borderWidth: "4px",
            borderRadius: "30px", // Adjust the value as needed
          }}
        >
          <Card.Body>
            <Card.Title> Offre d emploi </Card.Title>
            <Card.Img
              variant="top"
              style={{ width: "180px", height: "200px" }}
              src="https://www.aide-sociale.fr/wp-content/uploads/2024/01/site-recherche-emploi-25.jpeg"
            />
          </Card.Body>
        </Card>
        <Card
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginLeft: "20px",
            width: "220px",
            height: "300px",
            backgroundColor: "transparent",
            borderColor: "black",
            borderWidth: "4px",
            borderRadius: "30px", // Adjust the value as needed
          }}
        >
          <Card.Body>
            <Card.Title> My Offre </Card.Title>
            <Card.Img
              variant="top"
              style={{ width: "180px", height: "200px" }}
              src="https://img.freepik.com/vecteurs-premium/icone-poste-vacant-recherche-dans-style-comique-illustration-dessin-anime-vecteur-carriere-loupe-fond-isole-blanc-trouver-effet-eclaboussure-concept-entreprise-employeur_157943-10449.jpg"
            />
          </Card.Body>
        </Card>
        <Card
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginLeft: "20px",
            width: "220px",
            height: "300px",
            backgroundColor: "transparent",
            borderColor: "black",
            borderWidth: "4px",
            borderRadius: "30px", // Adjust the value as needed
          }}
        >
          <Card.Body>
            <Card.Title> Add Offre </Card.Title>
            <Card.Img
              variant="top"
              style={{ width: "180px", height: "200px" }}
              src="https://img.freepik.com/vecteurs-premium/icone-personnes-dessin-anime-dans-style-comique-utilisateurs-pictogramme-illustration-signe-plus-travail-equipe-personne-signe-concept-entreprise-splash_157943-9453.jpg?w=2000"
            />
          </Card.Body>
        </Card>
      </div>
      {addjob}

      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default SocieteDashboard;
