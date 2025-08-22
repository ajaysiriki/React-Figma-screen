//  import React, { useState } from 'react'
 
//  const App = () => {

//  const[number,setNumber]=useState(0)
//   const Increment = ()=>{
//     if (number<10) {
//       setNumber(number+1)
//     }
//   }
//   const Decrement = ()=>{
//    if (number>0) {
//       setNumber(number-1)
//    }
//   }
//   return (

//     <>
//     <h>Counter-App</h>
//     <button onClick={Increment}> + </button> 
//      {number}
//     <button onClick={Decrement}> - </button>
//      </>
//    )
//  }
 
//  export default App


// import React, { useEffect} from 'react'

// const App = () => {
  
//  console.log("Render")
// useEffect(()=>{
//     console.log("render")
//   },[])
//   return (
//     <div>
//  <h1>useEffect example</h1>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

// const[color,setColor]=useState('Blue')
 
// const [car,setCar]=useState("Audi")
 
// return (
//     <>
//     <h>my favourite color is :{color}</h> <br></br>
//     <h>my favourite car : {car}</h>
//  </>
//   )
// }

// export default App



// import React, { useState } from "react";
// import { TextField, Button, Typography, Box, Paper, Link } from "@mui/material";
// import './App.css'

// export default function AuthForm() {
//   const [isSignup, setIsSignup] = useState(true);  
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (isSignup && !formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
//     if (formData.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";
//     if (isSignup && formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log(isSignup ? "Signup Data:" : "Login Data:", formData);
//       alert(isSignup ? "Signup Successful!" : "Login Successful!");
      
//     }
//   };

//   return (
//      <div className="auth-container">
//       <Paper elevation={3} className="auth-paper">
//         <Typography variant="h5" gutterBottom align="center">
//           {isSignup ? "Signup" : "Login"}
//         </Typography>
//         <form onSubmit={handleSubmit} className="auth-form">
//           {isSignup && (
//             <TextField
//               fullWidth
//               margin="normal"
//               label="Full Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               error={!!errors.name}
//               helperText={errors.name}
//             />
//           )}
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             error={!!errors.email}
//             helperText={errors.email}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             error={!!errors.password}
//             helperText={errors.password}
//           />
//           {isSignup && (
//             <TextField
//               fullWidth
//               margin="normal"
//               label="Confirm Password"
//               name="confirmPassword"
//               type="password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               error={!!errors.confirmPassword}
//               helperText={errors.confirmPassword}
//             />
//           )}
//           <Button type="submit" fullWidth variant="contained" className="auth-button">
//             {isSignup ? "Signup" : "Login"}
//           </Button>
//         </form>
//         <Typography variant="body2" align="center" className="auth-switch">
//           {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
//           <Link component="button" variant="body2" onClick={() => setIsSignup(!isSignup)}>
//             {isSignup ? "Login" : "Signup"}
//           </Link>
//         </Typography>
//       </Paper>
//     </div>
//   );
// }

 import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;