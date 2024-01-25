
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    !user && navigate("/login", { replace: true });
  }, []);
  return (
    <>
      <div className="jumbotron">
        <h1 style={{color:'darkblue'}}>Welcome {user ? user.name : null}</h1>
        <hr className="my-4" />
      </div>
      <br/><br/><br/>
      <p style={{ fontStyle: 'italic',fontSize:'20px'}}>
  Welcome to Nexa!
  <br />Your one-stop solution for effortlessly organizing and managing your contacts.
  <br />Stay connected and keep your contacts in order with ease. 
  Explore our features and simplify the way you manage your network of connections.
</p>



    </>
  );
};

export default Home;
