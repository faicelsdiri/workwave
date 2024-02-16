import "./App.css";

import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import AdminDashboard from "./Components/AdminDashboard";
import EmployeDashboard from "./Components/EmployeDashboard";
import SocieteDashboard from "./Components/SocieteDashboard";
import { useEffect, useState } from "react";
import { get_auth_user } from "./Redux/actions";
import SocieteManager from "./Components/SocieteManager";

function App() {
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
  

  useEffect(() => {
    if (typeuser === "admin") {
      navigate(`/admindashboard/${_id}`);
    } else if (typeuser === "societe") {
      navigate(`/societedashboard/${_id}`);
    } else if (typeuser === "candidat") {
      navigate(`/employeedashboard/${_id}`);
    } else if (typeuser === "") {
      navigate("/home");
    }
  }, [typeuser, _id, navigate]);

  return (
    <div>
 
      <Routes>
        {/* <Route path={`/admindashboard/:_id/societemanager`} element={<SocieteManager />} />  */}
        <Route path={`/admindashboard/:_id`} element={<AdminDashboard />} />
        <Route path={`/societedashboard/:_id`} element={<SocieteDashboard />} />
        <Route path={`/empolyedashboard/:_id`} element={<EmployeDashboard />} />
        <Route path={`/home`} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
// //
// // <Route path="/" element={<TestTypeuser /> }></Route>
// //    {/* <TestTypeuser />  */}
// //
//   <div className="App">
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       {typeuser === "admin" && navigate(`/admindashboard/${_id}`)} (

//         <Route path={`/admindashboard/:_id`} element={<AdminDashboard />} />
//       ) : typeuser === "candidat" ? (
//         <Route
//           path={`/empolyedashboard/${_id}`}
//           element={<EmployeDashboard />}
//         ></Route>
//       ) : typeuser === "societe" ? (
//         <Route
//           path={`/societedashboard/${_id}`}
//           element={<SocieteDashboard />}
//         ></Route>
//       ) : (
//         <Route path={`/home`} element={<Home />}></Route>
//       )}

//       {/* <Route path='/aa'   element ={<App/>}  ></Route>

// <Route path='/societedashboard/:iduser' element ={ <AdminDashboard/> }></Route>
// <Route path='/empolyedashboard/:iduser' element ={ <AdminDashboard/> }></Route> */}

//     </Routes>
//   </div>
