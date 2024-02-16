import "../App.css";
import Footer from "./Footer";

import Home from "./Home";
import { Route, Routes } from "react-router-dom";

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import AdminDashboard from "./AdminDashboard";
import EmployeDashboard from "./EmployeDashboard";
import SocieteDashboard from "./SocieteDashboard";
import { useEffect, useState } from "react";
import { get_auth_user } from "../Redux/actions";

function TestTypeuser() {
  const [typeuser, setTypeuser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [_id, setid] = useState("");

  useEffect(() => {
    dispatch(get_auth_user());
  }, [dispatch]);

  useEffect(() => {
    if (user && user.typeuser) {
      setTypeuser(user.typeuser);
      setid(user._id);
    }
  }, [user]);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/aa" element={<App />}></Route> */}
        {typeuser === "admin" ? (
          <Route path={`/admindashboard/${_id}`} element={<AdminDashboard />} />
        ) : typeuser === "candidat" ? (
          <Route
            path={`/empolyedashboard/${_id}`}
            element={<EmployeDashboard />}
          ></Route>
        ) : typeuser === "societe" ? (
          <Route
            path={`/societedashboard/${_id}`}
            element={<SocieteDashboard />}
          ></Route>
        ) : (
          <Route path={`/`} element={<Home />}></Route>
        )}

        {/* <Route path='/aa'   element ={<App/>}  ></Route>
  
  <Route path='/societedashboard/:iduser' element ={ <AdminDashboard/> }></Route>
  <Route path='/empolyedashboard/:iduser' element ={ <AdminDashboard/> }></Route> */}
      </Routes>
    </div>
  );
}

export default TestTypeuser ;