import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { updateempolye } from "../Redux/actions";
 

function UpdateEmpolyeModal({ item }) {
    const [profilPicture, setImage] = useState("");

  const [uploading, setUploading] = useState(false);

  const [email, setEmail] = useState(item.email);
  const [phoneNumbre, setPhoneNumber] = useState(item.phoneNumbre);
  const [Adress, setAddress] = useState(item.Adress);

  const [nom, setNom] = useState(item.employe.nom);
  const [prenom, setPrenom] = useState(item.employe.prenom);
  const [sexe, setSexe] = useState(item.employe.sexe);
  const [age, setAge] = useState(item.employe.age);
  const [skills, setSkills] = useState(item.employe.skills);
  const [certificat, setCertificates] = useState(item.employe.certificat);
  const [experience, setExperience] = useState(item.employe.experience);
  const [langue, setLangue] = useState(item.employe.langue);

  const updatec = () => {
    const updetedempolye = {
      phoneNumbre,
      email,
      Adress,
      profilPicture,

      employe: {
        nom,
        prenom,
        sexe,
        age,
        skills,
        certificat,
        experience,
        langue,
      },
    };
    dispatch(updateempolye(item._id, updetedempolye));
    alert("empolye updated");
    handleClose();
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
  <table>
    <tbody>
      <tr>
        <td><b>Nom</b></td>
        <td><Form.Control type="text" placeholder="Nom" onChange={(e) => setNom(e.target.value)} value={nom} /></td>
      </tr>
      <tr>
        <td><b>Prénom</b></td>
        <td><Form.Control type="text" placeholder="Prénom" onChange={(e) => setPrenom(e.target.value)} value={prenom} /></td>
      </tr>
      <tr>
        <td><b>Email</b></td>
        <td><Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email} /></td>
      </tr>
      <tr>
        <td><b>Phone Number</b></td>
        <td><Form.Control type="number" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumbre} /></td>
      </tr>
      <tr>
        <td><b>Address</b></td>
        <td><Form.Control type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={Adress} /></td>
      </tr>
      <tr>
        <td><b>Sexe</b></td>
        <td>
          <Form.Check
            type="radio"
            label="Male"
            value="male"
            checked={sexe === "male"}
            onChange={(e) => setSexe(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Female"
            value="female"
            checked={sexe === "female"}
            onChange={(e) => setSexe(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td><b>Age</b></td>
        <td><Form.Control type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} value={age} /></td>
      </tr>
      <tr>
        <td><b>Skills</b></td>
        <td><Form.Control type="text" placeholder="Skills" onChange={(e) => setSkills(e.target.value)} value={skills} /></td>
      </tr>
      <tr>
        <td><b>Certificates</b></td>
        <td><Form.Control type="text" placeholder="Certificates" onChange={(e) => setCertificates(e.target.value)} value={certificat} /></td>
      </tr>
      <tr>
        <td><b>Experience</b></td>
        <td><Form.Control type="text" placeholder="Experience" onChange={(e) => setExperience(e.target.value)} value={experience} /></td>
      </tr>
      <tr>
        <td><b>Language</b></td>
        <td><Form.Control type="text" placeholder="Language" onChange={(e) => setLangue(e.target.value)} value={langue} /></td>
      </tr>
      <tr>
        <td><b>Profile Picture</b></td>
        <td>
          {profilPicture ? (
            <img src={profilPicture} width="100%" style={{ margin: "8px 0" ,height:"20px" , width : "20px" }}  alt="profile" />
          ) : (
            <div style={{ margin: "8px 0" }}>{!uploading ? "Upload Image For Profile" : "Loading..."}</div>
          )}
          <input accept="image/*" type="file" onChange={uploadProfileImage} />
        </td>
      </tr>
    </tbody>
  </table>
</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={updatec}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UpdateEmpolyeModal;
