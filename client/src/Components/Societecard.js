import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
 



function Societecard({elm}) {
 
 


  return (
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
      <Card.Title> {elm.name }</Card.Title>
      <Card.Text> {elm.phoneNumbre } </Card.Text>
      <Card.Text> {elm.email } </Card.Text>
      <Card.Text> { elm.phoneNumbre} </Card.Text>
      <Card.Text> { elm.Adress} </Card.Text>
      
      
    </Card.Body>
    <Card.Footer
     
    >
        <div  style={{display: "flex", margin :"5px"}} >
        <Button variant="outline-danger"   style={{width: "100px",      height: "38px", marginTop:"10px"}}>Delete</Button>
        
        
        </div>
    </Card.Footer>
  </Card>
  )}
export default Societecard;