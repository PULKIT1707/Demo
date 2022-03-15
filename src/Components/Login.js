import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';
import credentials from '../data/Credentials.json';
import { useNavigate } from 'react-router';


const Login = (props) => {    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useNavigate();
    const loginFunction = (e) => {
        e.preventDefault();
        debugger
        credentials.map((val) => {
            if(val.email === email){
                if(val.password === password){
                    setError(null);
                    return history.push("/");
                    // return history.push("/RewardPage");
                }
            }
            setError("Invalid User");
            return ;
        });
        // console.log(isAuth);
    }

  return (
    <div className="loginDiv">
        <div className='loginIcon'>

        </div>
        <form action="" onSubmit={loginFunction}>
            <div>
                <TextField id="emailId" label="Email" variant="outlined" type="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <TextField id="passwordId" label="Password" variant="outlined" type="password" autoComplete="off" value={[password]} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div>
                <Button variant="contained" type="submit" >Log In</Button>
                {error && (
                    <Alert severity="error" onClick={() => setError(null)}>
                    {props.error || error}
                    </Alert>
                )}
            </div>
        </form>
    </div>
  )
}

export default Login