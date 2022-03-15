import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    const [userDetails, setUserDetails] = useState({
        email : "",
        password : ""
    });
    
    const [confirmPassword, setConfirmPassword] = useState("");
    const [status, setStatus] = useState([]);

    const handleDetails = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserDetails({...userDetails, [name] : value});
    }

    const signUpFunction = (e) => {
        e.preventDefault();
        if(userDetails.password === confirmPassword){
            setStatus(["SignUp Successful"]);
            console.log(status);
        } else {
            setStatus(["SignUp Failed"]);
            console.log(status);
        }
    }
  return (
    <>
    <form action="" onSubmit={signUpFunction}>
            <div>
                <TextField id="emailId" label="Email" name="email" variant="outlined" type="email" autoComplete="off" value={userDetails.email} onChange={handleDetails} />
            </div>
            <div>
                <TextField id="passwordId" label="Password" name="password" variant="outlined" type="password" autoComplete="off" value={[userDetails.password]} onChange={handleDetails} />
            </div>
            <div>
                <TextField id="confirmPasswordId" label="Confirm Password" variant="outlined" type="password" autoComplete="off" value={[confirmPassword]} onChange={(e)=>setConfirmPassword(e.target.value)} />
            </div>
            <div>
                <Button variant="contained" type="submit" >Submit</Button>
            </div>
        </form>
        </>
  )
}

export default Signup