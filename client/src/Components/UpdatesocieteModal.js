import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { updatesociete } from "../Redux/actions";

function UpdatesocieteModal({item}) {

    const [nom, setNom] = useState(item.societe.nom);
  const [email, setEmail] = useState(item.email);
  

  const [domaine, setdomaine] = useState(item.societe.domaine);

  const [phoneNumbre, setPhoneNumber] = useState(item.phoneNumbre);
  const [Adress, setAddress] = useState(item.Adress);
  const [profilPicture, setImage] = useState("");

  const [uploading, setUploading] = useState(false);


  const updatec = () => {
    const updetedsociete = {
        phoneNumbre,
        email,
        Adress,
        profilPicture,
        societe:{
        nom,
        domaine}
        
        
    };
    dispatch(updatesociete(item._id, updetedsociete));
    alert("societe updated");
   handleClose()
  };

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setUploading(true);
    axios
      .post("/users/", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        marginTop: "10px",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <Button variant="outline-light" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <b> Name :</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder=" Name"
              onChange={(e) => {
                setNom(e.target.value);
              }}
              value={nom}
            
            />
            <br></br>

            <Form.Label>
              <b>Email :</b>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <br></br>

            <Form.Label>
              <b>Phone Number :</b>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              value={phoneNumbre}
            />
            <br></br>
            <Form.Label>
              <b> Domaine :</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder=" domaine"
              onChange={(e) => {
                setdomaine(e.target.value);
              }}
              value={domaine}
            />
            <br></br>
            <Form.Label>
              <b> Adress</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder=" Adress"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={Adress}
            />
            <br></br>
            {profilPicture ? (
                  <img
                    src={profilPicture}
                    width="100%"
                    style={{ margin: "8px 0" }}
                    height="150px"
                    alt="product"
                  />
                ) : (
                  <div style={{ margin: "8px 0" }}>
                    {!uploading ? "Upload Image For Profile" : "Loading ..."}
                  </div>
                )}
                <div>
                  Select File
                  <input
                    accept="image/*"
                    type="file"
                    onChange={uploadProfileImage}
                  />
                </div>
            <br></br>
            

            

            
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={updatec} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UpdatesocieteModal;
