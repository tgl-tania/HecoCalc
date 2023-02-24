import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "../css/login.css";
import UserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import AWS from "aws-sdk";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error,setError] = useState(false);

  const navigateToHome = () => {
    navigate("/dashboard");
  };

  let style;
  if(!error){
     style = {
        "& label.Mui-focused": {
          borderBottomcolor: '#FF931E',
          color:'#FF931E',
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: '#FF931E'
        },
        
      
    }
  }
  else{
     style = {
      "& .MuiFormLabel-root":{
        color:'#E50000'

      },
      "& label.MuiFormLabel-root.Mui-focused":{
        color:'#FF931E'

      },
      
      "& .MuiInput-underline:after": {
        borderBottomColor: '#FF931E',
        color:'black'
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: '#E50000',
        color:'black'
      },
      
    
  }
  }
  

  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: function (result) {
        setError(false);
        console.log("SUCCESS");
        user.getUserData(function(err, userData) {
          if (err) {
            alert(err.message || JSON.stringify(err));
            return;
          }
          console.log(userData);
        });
        // navigateToHome();
        var accessToken = result.getAccessToken().getJwtToken();

        var idToken = result.idToken.jwtToken;

        AWS.config.region = "eu-west-2";
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "eu-west-2:fca66400-f2b5-4b3b-bee7-2d01ea34e734",
          Logins: {
            "cognito-idp.eu-west-2.amazonaws.com/eu-west-2_D4H1dwVyg": idToken,
          },
        });

        AWS.config.credentials.get(function (err) {
          if (err) return console.error(err);
          else console.log(AWS.config.credentials);

          var s3 = new AWS.S3({
            apiVersion: "2006-03-01",
            params: { Bucket: "alancompany" },
          });

          s3.listObjects({ Delimiter: "/" }, function (err, data) {
            console.log(err, data);
          });
        });
      },

      onFailure: (err) => {
        console.log("Error Test");
        console.log(err);
        setError(true);
        setEmail("");
        setPassword("");
      },
    });
  };

  return (
    <>
      <div className="login-container">
        <div className="leftSide">
          <div className="Main">HecoCalc</div>
          <div className="Sub">by HecoAnalytics</div>
        </div>
        <div className="rightSide">
          <img
            src="./assets/hecologo.png"
            alt="jsx-a11y/alt-text"
            onClick={navigateToHome}
          />

          <div className="signInBox">
            <div className="Title">Sign In</div>
            <TextField
              id="standard-basic"
              label="Enter Email..."
              variant="standard"
              size="50px"
              value={email}
              sx={style}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Enter Password..."
              variant="standard"
              value={password}
              sx={style}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="loginButton" type="submit" onClick={onSubmit}>
              SIGN IN
            </button>
          </div>
        </div>
        <div className="Footer">
          Don't have an account? Reach out to contact@HecoAnalytics.com
        </div>
      </div>
    </>
  );
}

export default Login;
