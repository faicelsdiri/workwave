import React, { useEffect, useState } from "react";
import { Card, Table, Button } from "react-bootstrap";

import Footer from "./Footer";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteempolye, deletesociete, get_employe, get_societe } from "../Redux/actions";
import UpdatesocieteModal from "./UpdatesocieteModal";
import UpdateEmpolyeModal from "./UpdateEmpolyeModal";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { _id } = useParams();

  const dispatch = useDispatch();

  const [societemgr, setSocietemanager] = useState("false");
  const [emplymgr, setemplymgr] = useState("false");

  const societe = useSelector((state) => state.societe);

  useEffect(() => {
    dispatch(get_societe());
  }, []);

  const empolye = useSelector((state) => state.empolye);
  useEffect(() => {
    dispatch(get_employe());
  }, []);

  const societemanager = (
    <div>
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
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow
            overflow: "hidden", // Hide overflowing content
            marginBottom: "20px", // Add some space at the bottom
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Numbre</th>
              <th>Adress</th>
              <th>Domaine</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {societe &&
              societe.map((item) => (
                <tr key={item._id}>
                  <td>{item.societe.nom}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumbre}</td>
                  <td>{item.Adress}</td>
                  <td>{item.societe.domaine}</td>
                  <td>
                    <UpdatesocieteModal item={item} />
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        const confirmDelete = window.confirm(
                          "Are you sure you want to delete?"
                        );
                        if (confirmDelete) {
                          dispatch(deletesociete(item._id));
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );

  const Empolyeemanager = (
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
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow
          overflow: "hidden", // Hide overflowing content
          marginBottom: "20px", // Add some space at the bottom
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Numbre</th>
            <th>Adress</th>
            <th>Sexe</th>
            <th>Age</th>
            <th>Certificat</th>
            <th>Skills</th>
            <th>Experience</th>
            <th>Language</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {empolye &&
            empolye.map((item) => (
              <tr key={item._id}>
                <td>{item.employe.nom}</td>
                <td>{item.employe.prenom}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumbre}</td>
                <td>{item.Adress}</td>
                <td>{item.employe.sexe}</td>
                <td>{item.employe.age}</td>
                <td>{item.employe.certificat}</td>
                <td>{item.employe.skills}</td>
                <td>{item.employe.experience}</td>
                <td>{item.employe.langue}</td>

                <td>
                  <UpdateEmpolyeModal item={item} />
                </td>
                <td>
                <Button
                      variant="outline-danger"
                      onClick={() => {
                        const confirmDelete = window.confirm(
                          "Are you sure you want to delete?"
                        );
                        if (confirmDelete) {
                          dispatch(deleteempolye(item._id));
                        }
                      }}
                    >
                      Delete
                    </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );

  societe && console.log(societe);

  return (
    <div>
      <Nav />
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "10px",
          margin: "100px",
          // Example height
          marginTop: "20px",
          marginBottom: "10px",
          boxShadow: "0 1px 5px rgba(0, 0, 0, 0.5)",
          boxSizing: "",
          background: "#eaecef",
          textAlign: "center",
        }}
      >
        <h1>Admin Dashboard</h1>
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
          onClick={() => {
            setSocietemanager(!societemgr);
          }}
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
            <Card.Title> Societe </Card.Title>
            <Card.Img
              variant="top"
              src="https://static.vecteezy.com/ti/vecteur-libre/p1/23382368-melanger-icone-pour-societe-vectoriel.jpg"
              style={{ width: "180px", height: "200px" }}
            />
          </Card.Body>
        </Card>
        <Card
          onClick={() => {
            setemplymgr(!emplymgr);
          }}
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
            <Card.Title> Empolyee </Card.Title>
            <Card.Img
              variant="top"
              style={{ width: "180px", height: "200px" }}
              src="https://cdn-icons-png.flaticon.com/512/912/912214.png"
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
            <Card.Title> Admin Manager </Card.Title>
            <Card.Img
              variant="top"
              src="https://cdn-icons-png.flaticon.com/512/3273/3273070.png"
              style={{ width: "180px", height: "200px" }}
            />
          </Card.Body>
        </Card>
      </div>

      {societemgr ? societemanager : <></>}
      {emplymgr ? Empolyeemanager : <></>}

      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
};
export default AdminDashboard;
