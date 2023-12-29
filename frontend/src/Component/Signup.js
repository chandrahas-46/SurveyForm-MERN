import { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


// render homepage
export function Signup(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    // const apiUrl = `${window.location.origin}/register`;
    // 'http://localhost:3001/register'

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://survey-form-mern-api.vercel.app/register`, {name, email, password})
        .then(result => {
            console.log("FrontEnd SignUp: ",result);
            toast.success('Registration successful!');
            setName(null);
            setEmail(null);
            setPassword(null);
            navigate('/login');
        }) 
        .catch(err => {
            console.log(err);
            toast.error('Registration failed. Please try again.');
        });
    }

    // return component
    return(
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label htmlFor="email"><strong>Name</strong> </label>
                            <input type="text" placeholder="Enter Your Name" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="email"><strong>Email</strong> </label>
                            <input type="text" placeholder="Enter Your Email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="email"><strong>Password</strong> </label>
                            <input type="text" placeholder="Enter Password" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                        <p>Alredy Have an Account</p>
                        <Link to="/login">
                            <button type="submit" className="btn btn-default border w-100 bg-light rounded-0">Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

