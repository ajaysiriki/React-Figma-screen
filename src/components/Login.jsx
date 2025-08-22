 import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
  
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
 
    if (message) {
      setMessage('');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    setMessage(''); 

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Login successful! Redirecting...');  
       
        if (formData.rememberMe) {
          localStorage.setItem('token', data.data.token);
        }
        
        setTimeout(() => {
          window.location.href = '/dashboard';  
        }, 1500);
        console.log('Login successful:', data);
      } else {
        setErrors({ general: data.message });
      }
    } catch (error) {
      setErrors({ general: 'Something went wrong. Please try again.' });
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="login-container">
      { }
      <header className="login-header">
        <div className="logo">
          <span className="logo-text">Digital</span>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </nav>
      </header>

      <div className="login-wrapper">
        <div className="login-form-container">
          <div className="login-content">
            <h1>Artificial Intelligence Driving Results For The Travel Industry</h1>
            <p>Welcome back! Please login to your account.</p>
            
            { }
            {message && <div className="success-message">{message}</div>}
            { }
            {errors.general && <div className="error-message general">{errors.general}</div>}
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-section">
                <div className="section-title">
                  <span className="icon">◆</span>
                  <span>Email section</span>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={errors.password ? 'error' : ''}
                  />
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                
                <div className="remember-forgot">
                  <div className="remember-me">
                    <input
                      type="checkbox"
                      id="remember"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
                
                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="login-button"
                    disabled={loading}
                  >
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                  <button 
                    type="button" 
                    className="signup-button"
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              
              <div className="social-login">
                <p>Or login with</p>
                <div className="social-buttons">
                  <button className="social-btn facebook">
                    Facebook
                  </button>
                  <button className="social-btn linkedin">
                    LinkedIn
                  </button>
                  <button className="social-btn google">
                    Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div className="illustration-container">
          <img 
            src="src/assets/cycle.png" 
            alt="Person riding bicycle" 
            className="illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;