import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp=()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    useEffect( () => {
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/");
        }
    },[])

    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    })

    const collectData= async ()=>{
        console.log(name,email,password);
        let result = await fetch('http://localhost:5000/register',{
            method: 'post',
            body: JSON.stringify({name,email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
         result=await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
    }
    return(
        <div className='register'>
            <h2> Registration Form </h2>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder=' Your Name'/>
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder=' Your E-mail'/>
            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder=' Your Password'/>
            <button onClick={collectData} className='submit' type='button'> Submit </button>
        </div>
    )
}

export default SignUp;