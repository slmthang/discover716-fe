
import "./Login.scss";
import auth from "../../services/auth";
import { useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import dataService from '../../services/dataService';

function Login() {

  const navigateTo = useNavigate();

  // submitted
  const [submitted, setSubmitted] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandler = (e) => {

    setUsername(e.target.value);
  }

  const passwordHandler = (e) => {

    setPassword(e.target.value);
  }

  
  // loginHandler
  const loginHandler = async (e) => {

    // prevent default
    e.preventDefault();

    window.scrollTo(0, 0);

    setSubmitted(true);

    const loginInfo = {
      username,
      password
    }

    // auth login
    const user = await auth
                  .login(loginInfo)
                    .then(data => {

                      alert(`Successful Logged In!`);
                      setSubmitted(false);
                      return data;
                    })
                      .catch(err => {
                        alert(`Logging in Failed. Try again.`);
                        console.log("Logging in Failed: ", err);
                        setSubmitted(false);
                      })

    // store logged in status in sessionStorage
    sessionStorage.setItem('token', user.token);
    sessionStorage.setItem('loggedIn', user.loggedIn);

    // set token for request headers
    // dataService.setToken(sessionStorage.getItem('token'));

    navigateTo(`/submit`);
  }


  return (
    <>
      <form onSubmit={loginHandler} id='logInForm'>

        {
          !submitted ?
            <>
              <h1>Log In</h1>
              <section id='inputs' className='center'>
                <p>
                  <label htmlFor="username">Username: </label>
                  <input type="text" id='username' name='username' onChange={usernameHandler} required/>
                </p>
                  
                <p>
                  <label htmlFor="password">Password: </label>
                  <input type="password" id='password' name='password' onChange={passwordHandler} required/>
                </p>
              </section>
              <section id='submit'>
                <button type="submit">Upload</button>
              </section> 
            </>
            
            : <h1 style={{minHeight: "40rem"}} className="center">
                <ReactLoading type="spinningBubbles" color="#323b8c" />
              </h1>
        }
        
      </form>
    </>
  )
}

export default Login;