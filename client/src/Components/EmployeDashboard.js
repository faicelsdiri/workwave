
 
import Footer from './Footer';
import Nav from './Nav';
import AdminDashboard from "./AdminDashboard"

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_auth_user } from '../Redux/actions';
import { useNavigate } from 'react-router';
 


function EmployeDashboard() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  useEffect(() => {
    dispatch(get_auth_user());
  }, []);   

  return (
    <div >
    <Nav/>
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
        }}
      >
        <h1>Employe Dashboard</h1>
      </div>
        <Footer/>
      
    </div>

  );
}

export default EmployeDashboard;
