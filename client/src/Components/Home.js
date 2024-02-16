
 
import Footer from './Footer';
import Nav from './Nav';
import AdminDashboard from "./AdminDashboard"

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_auth_user } from '../Redux/actions';
import { useNavigate } from 'react-router';
import SocieteDashboard from './SocieteDashboard';
import EmployeDashboard from './EmployeDashboard';
 


function Home() {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  

  // useEffect(() => {
  //   dispatch(get_auth_user());
  // }, []);  

  // if (user.typeuser === "admin") {
  //   return <AdminDashboard />;
  // } else if (user.typeuser === "candidat") {
  //   return <EmployeDashboard />;
  // } else if (user.typeuser === "societe") {
  //   return <SocieteDashboard />;
  // }

  return (
    <div >
    <Nav/>
      
      <div style={{ paddingTop: "20px", marginTop: "2%" }}>
 <h1>list Offre</h1>
        {/* <AdminDashboard/> */}



        <Footer/>
      </div>
    </div>

  );
}

export default Home;
