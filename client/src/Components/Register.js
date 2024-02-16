import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  TextField,
  FormControl, 
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import axios from 'axios';
import { Grid } from '@mui/material';
import Button from "@mui/material/Button";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../Redux/actions";

const steps = [
  "Enter email and password",
  "Select user type and enter contact information",
  "Enter  information",
  "Enter  information",
];

function Register() {
  const [activeStep, setActiveStep] = useState(0);

  const [email, setEmail] = useState("");
  const [motDePasse, setmotDePasse] = useState("");
  const [typeuser, setTypeuser] = useState("societe");
  const [phoneNumbre, setPhoneNumber] = useState("");
  const [Adress, setAddress] = useState("");
  //const [profilPicture,setProfilPicture] =useState("")

  
  const [domaine, setdomaine] = useState("");

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sexe, setSexe] = useState("");
  const [age, setAge] = useState("");
  const [skills, setSkills] = useState("");
  const [certificat, setCertificates] = useState("");
  const [experience, setExperience] = useState("");
  const [langue, setLangue] = useState("");

  //image uploadcode 

  const [uploading, setUploading] = useState(false);
  const [profilPicture, setImage] = useState("");
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

  //register
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const register_user_employe = () => {
    const newUser = {
      email, 
      motDePasse ,
      profilPicture,
       typeuser,
       phoneNumbre,
       Adress,
       employe :{nom,prenom,sexe,skills,certificat,experience,langue,age

       }
    }


    console.log(newUser)
    dispatch(register(newUser))
    handleClose();
    navigate("/")
  }
  const register_user_societe = () => {
    const newUser = {
      email, 
      motDePasse ,
      profilPicture,
       typeuser,
       phoneNumbre,
       Adress,
       societe :{nom,domaine
       }
    }


    console.log(newUser)
    dispatch(register(newUser))
    handleClose();
    navigate("/")
  }
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };


  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              onChange={(e) => setmotDePasse(e.target.value)}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="user type"
                name="userType"
                value={typeuser}
                onChange={(e) => setTypeuser(e.target.value)}
              >
                <FormControlLabel
                  value="societe"
                  control={<Radio />}
                  label="Societe"
                />
                <FormControlLabel
                  value="candidat"
                  control={<Radio />}
                  label="candidat"
                />
              </RadioGroup>
            </FormControl>

            <TextField
              label="Phone Number"
              value={phoneNumbre}
              fullWidth
              margin="normal"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <TextField
              label="Address"
              value={Adress}
              fullWidth
              margin="normal"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        );
      case 2:
        return (
          <div>
            {typeuser === "societe" ? (
              <div>
                <TextField
                  label="Company name"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setNom(e.target.value)}
                />
                <TextField label="domaine" fullWidth margin="normal" onChange={(e) => setdomaine(e.target.value)} />
              </div>
            ) : (
              <div>
                <TextField
                  label="Nom"
                  value={nom}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setNom(e.target.value)}
                />
                <TextField
                  label="Prenom"
                  value={prenom}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setPrenom(e.target.value)}
                />
                <RadioGroup
                  row
                  aria-label="user sexe"
                  name="usersexe"
                  value={sexe}
                  onChange={(e) => setSexe(e.target.value)}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
                
                <TextField
                  label="Age"
                  fullWidth
                  value={age}
                  margin="normal"
                  onChange={(e) => setAge(e.target.value)}
                />
                <Grid item xs={12}>
              <>
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
              </>
            </Grid>
                
              </div>
            )}
          </div>
        );
      case 3:
        return (
          <div>
            {typeuser === "societe" ? (
              <div>
               <Grid item xs={12}>
              <>
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
              </>
            </Grid>
              </div>
            ) : (
              <div>
                <TextField
                  label="Skills"
                  value={skills}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setSkills(e.target.value)}
                />
                <TextField
                  label="Certificates"
                  value={certificat}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setCertificates(e.target.value)}
                />
                <TextField
                  label="Language"
                  value={langue}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setLangue(e.target.value)}
                />
                <TextField
                  label="Experience"
                  value={experience}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            )}
          </div>
        );

      default:
        return "Unknown step";
    }
  };

  return (
    <div>
      <Button variant="outlined" color="error" onClick={handleShow}>
        Register
      </Button>

      <Modal isOpen={show} style={customStyles} contentLabel="Example Modal">
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            margin: "20px",
            boxShadow: "0 1px 5px rgba(0, 0, 0, 0.5)",
            background: "#eaecef",
            height: "600px",
            width: "1000px",
          }}
        >
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            style={{ background: "#eaecef" }}
          >
            {steps.map((label) => (
              <Step key={label} style={{ background: "#eaecef", }}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",

              margin: "20px",
              boxShadow: "0 1px 5px rgba(0, 0, 0, 0.5)",
              height:"400px",
              background: "#eaecef",
            }}
          >
            {activeStep === steps.length ? (
              <div>
                <p>All steps completed - you're finished!</p> 
                <div>
      <p>All steps completed - you're finished!</p>
      {typeuser === "societe" ? (
        <Button onClick={register_user_societe}>Submit</Button>
      ) : (
        <Button onClick={register_user_employe}>Submit</Button>
      )}
    </div>
              </div>
            ) : (
              <div>
                {getStepContent()}
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
        
        
      </Modal>
    </div>
  );
}
export default Register;

// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Form, Badge } from "react-bootstrap";

// import NavBar from "./NavBar";
// import Footer from "./Footer";
// function Register() {
//   return (
//     <div>
//       <NavBar />
//       <div
//         style={{
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           padding: "20px",

//           margin: "20px",
//           boxShadow: "0 1px 5px rgba(0, 0, 0, 0.5)",

//           background: "#eaecef",
//           position: "50%",
//         }}
//       >
//         <h1>
//           Register<Badge bg="secondary"></Badge>
//         </h1>
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Full name</Form.Label>
//             <Form.Control type="text" placeholder="Enter Full name" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasic">
//             <Form.Label>Username</Form.Label>
//             <Form.Control type="text" placeholder="username" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasic">
//             <Form.Label>Phone Numbre</Form.Label>
//             <Form.Control type="Numbre" placeholder="Phone Numbre" />
//           </Form.Group>

//           <Form.Group
//             className="mb-3"
//             controlId="typeuser"
//             style={{ marginLeft: "45%", marginRight: "45%" }}
//           >
//             <Form.Check
//               type="radio"
//               label="Candidate"
//               name="userType" // Add a name attribute to group the radio buttons
//             />
//             <Form.Check
//               type="radio"
//               label="Company"
//               name="userType" // Add the same name attribute to group the radio buttons
//             />
//           </Form.Group>
//         </Form>
//         <Button variant="primary">Next</Button>
//       </div>
//       <div style={{ paddingTop: "20px", marginTop: "10%" }}>
//         <Footer />
//       </div>
//     </div>
//   );
// }
// export default Register;
