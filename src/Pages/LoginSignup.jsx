import React, { useState } from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true);

  // Store registered users in local state for demo (in real apps, use backend)
  const [users, setUsers] = useState([]);
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', agree: false });
  const [signinData, setSigninData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (isSignup) {
      setSignupData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    } else {
      setSigninData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Switch between forms and clear fields
  const handleSwitch = (signup) => {
    setIsSignup(signup);
    setSignupData({ name: '', email: '', password: '', agree: false });
    setSigninData({ email: '', password: '' });
    setMessage('');
  };

  // Handle Sign Up
  const handleSignup = (e) => {
    e.preventDefault();
    // Check for unique email and name
    const exists = users.some(
      user => user.email === signupData.email || user.name === signupData.name
    );
    if (exists) {
      setMessage('Name or Email already exists. Please use a different one.');
      return;
    }
    if (!signupData.agree) {
      setMessage('You must agree to the Terms & Conditions.');
      return;
    }
    setUsers([...users, { ...signupData }]);
    setMessage('Sign up successful! You can now log in.');
    setSignupData({ name: '', email: '', password: '', agree: false });
    setIsSignup(false);
    
  };

  // Handle Sign In
  const handleSignin = (e) => {
    e.preventDefault();
    const user = users.find(
      user =>
        user.email === signinData.email &&
        user.password === signinData.password
    );
    if (user) {
      setMessage(`Welcome back, ${user.name}! You are now logged in.`);
    } else {
      setMessage('Invalid email or password.');
    }
    setSigninData({ email: '', password: '' });
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isSignup ? "Sign Up" : "Sign In"}</h1>
        {message && <div className="loginsignup-message">{message}</div>}
        <form onSubmit={isSignup ? handleSignup : handleSignin}>
          <div className="loginsignup-fields">
            {isSignup && (
              <input
                type="text"
                name="name"
                id="signup-name"
                placeholder='Enter your name'
                value={signupData.name}
                onChange={handleChange}
                required
              />
            )}
            <input
              type="email"
              name="email"
              id={isSignup ? "signup-email" : "login-email"}
              placeholder='Enter your email'
              value={isSignup ? signupData.email : signinData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              id={isSignup ? "signup-password" : "login-password"}
              placeholder='Enter your password'
              value={isSignup ? signupData.password : signinData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className='loginsignup-btn' type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
        </form>
        <p className='loginsignup-login'>
          {isSignup ? (
            <>Already have an account? <span onClick={() => handleSwitch(false)}>Login here</span></>
          ) : (
            <>Don't have an account? <span onClick={() => handleSwitch(true)}>Sign up here</span></>
          )}
        </p>
        {isSignup && (
          <div className="loginsignup-agree">
            <input
              type="checkbox"
              name='agree'
              id='signup-agree'
              checked={signupData.agree}
              onChange={handleChange}
            />
            <p> By continuing, I agree to the Terms & Conditions and Privacy Policy.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginSignup;