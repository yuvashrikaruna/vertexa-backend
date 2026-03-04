import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import Demo from "./pages/Demo";
import Login from "./pages/Login";
import FreeTrial from "./pages/FreeTrial";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
function App() {
 const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });

  return () => unsubscribe();
}, []);

  return (
    
      <Routes>

       
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="demo" element={<Demo />} />
        </Route>

        
        <Route path="/login" element={<Login />} />
        <Route path="/free-trial" element={<FreeTrial />} />

       
        <Route
  path="/dashboard"
  element={
    loading ? null : user ? <Dashboard /> : <Navigate to="/login" />
  }
/>
      </Routes>
   
  );
}

export default App;