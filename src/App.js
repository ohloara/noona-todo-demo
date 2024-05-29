import {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from './route/PrivateRoute';
import api from "../src/utils/api";

function App() {
  const [user,setUser] = useState(null);
  const getuser = async () =>{
    try{
      const storedToken = sessionStorage.getItem("token");
      if(storedToken){
        const response = await api.get("/user/me");
        setUser(response.data.user);
      }
    }catch(err){
      setUser(null);
    }
  }

  useEffect(()=>{
    getuser();
  },[]);

  return (
    <Routes>
      <Route 
        path="/" 
          element={
            <PrivateRoute user={user}>
              <TodoPage/>
            </PrivateRoute>
          }
        />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>} />
    </Routes>
  );
}

export default App;
