import React from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigate = useNavigate();
    const handleLogin = async ()=> {
        console.log("email,password", email,password);
        let result = await fetch('http://localhost:5000/login',{
        method:"post",
        body:JSON.stringify({email,password}),
        headers: {
            "Content-Type": "application/json"
        }
    });
    result = await result.json();
    console.log(result);
    if(result.auth){
       localStorage.setItem("user",JSON.stringify(result.user));
       localStorage.setItem("token",JSON.stringify(result.auth));
       navigate("/Products");
    }else{
        alert("enter correct details");
    }

    }
    return (
        <div className='login'>
        <h3> Login Please </h3>
        <input type="text" className="inputBox" placeholder="E-mail" 
        onChange={(e)=>setEmail(e.target.value)} value={email} /> 
        <input type="password" className="inputBox" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button onClick={handleLogin} className="button" > Submit </button>
        </div>
    )
}

export default Login;