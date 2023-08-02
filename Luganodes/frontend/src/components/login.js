import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login" style={{padding:"0%",margin:"0%",background: "#152238"}}>
            <div style={{padding:"0%",margin:"0%",background: "#152238",zIndex:-1}}>
                <img style={{padding:"0%",marginLeft:"3%",marginTop:"7%",opacity:"0.8",background: "#152238",zIndex:-1,height:"600px",width:"1430px"}} src='images.png'/>
            </div>
            <div style={{margin:"0%",padding:"10px",background: "#152238",zIndex:2,top:"50%",left:"50%",textAlign:"center",transform:"translate(-50%,-50%)",zIndex:2,position:"absolute",borderRadius:"66px"}}>
                <h1 style={{color:"white",fontFamily:"Fredoka One",fontWeight:400,fontSize:"64px",lineHeight:"77px",textAlign:"center"}}>Login</h1>

                <form action="POST">
                    <br></br>
                    <input style={{borderRadius:"50px",color:"black",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"730px",textAlign:"center",backgroundColor:"#0091ab"}} type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                    <br></br>
                    <br></br>
                    <input style={{borderRadius:"50px",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"730px",textAlign:"center",backgroundColor:"#0091ab"}} type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                    <br></br>
                    <br></br>
                    <input style={{backgroundColor:"white",fontFamily:"Fredoka One",boxShadow: "3px 8px 4px rgba(70, 70, 70, 0.33)",borderRadius: "40",height:"50px",textAlign: "center",justifyContent:"center",width:"100px"}} type="submit"  onClick={submit} />
                </form>
                <br></br>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link
                        style={{ 
                            backgroundColor: "white", 
                            fontFamily: "Fredoka One", 
                            boxShadow: "3px 8px 4px rgba(70, 70, 70, 0.33)", 
                            height: "50px", 
                            width: "100px", 
                            textDecoration: "none", 
                            color: "black", 
                            textAlign: "center",
                            display: "flex",             // Added flex display
                            alignItems: "center",       // Center vertically
                            justifyContent: "center",   // Center horizontally
                            margin: "0 auto"
                        }}
                        to="/signUp"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
            <br></br>

        </div>
    )
}

export default Login