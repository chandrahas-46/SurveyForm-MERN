import { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

// render homepage
export function Home(){
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [nationality, setNationality] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAddress] = useState();
    const [message, setMessage] = useState();
    // const apiUrl = `${window.location.origin}/api/surveys`;
    // 'http://localhost:3001/api/surveys'

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/api/surveys`, {name, gender, nationality, email, phoneNumber, address, message})
        .then(result => {console.log(result)
            toast.success('Survey completed successfully!');
            setName(null);
            setGender(null);
            setNationality(null);
            setEmail(null);
            setPhoneNumber(null);
            setAddress(null);
            setMessage(null);
        }) 
        .then(() => {
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        })
        .catch(err => {
            console.log(err);
            toast.error('Survey submission failed. Please try again.');
        });
    }

    // return component
    return(
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="bg-white p-3 rounded w-50">
                    <h2>Survey Form Submission</h2>
                    {/* Popup message */}
                    
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label htmlFor="email"><strong>Name</strong> </label>
                            <input type="text" placeholder="Enter Your Name" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="email"><strong>Gender</strong> </label>
                            <input type="text" placeholder="Enter Your Gender" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setGender(e.target.value)} />
                        </div>
                        
                        <div class="mb-3">
                            <label htmlFor="email"><strong>Nationality</strong> </label>
                            <input type="text" placeholder="Enter Your Nationality" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setNationality(e.target.value)} />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="email"><strong>Email</strong> </label>
                            <input type="text" placeholder="Enter Your Email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="email"><strong>Phone Number</strong> </label>
                            <input type="text" placeholder="Enter Your Phone Number" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        
                        <div class="mb-3">
                            <label htmlFor="email"><strong>Address</strong> </label>
                            <input type="text" placeholder="Enter Your Address" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setAddress(e.target.value)} />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="email"><strong>Message</strong> </label>
                            <input type="text" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setMessage(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 rounded-0">Submit</button>
                    </form>

                </div>
            </div>
        </>
    );
}

