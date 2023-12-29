// import { useState } from "react";
import { useSurveyContext } from "../surveyContext";
// css styles
import styles from "../styles/home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// render homepage
export function SurveyList(){
    // product data 
    const { surveyData } = useSurveyContext();

    // return component
    return(
        <>
            {/* page header */}
            <div className={styles.header}>
                
                {/* search bar */}
                <h1>WELCOME to ADMIN Portal</h1>
                <div>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Nationality</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Address</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody className="table-info">
                        {   
                            surveyData
                            .map((item) => (
                                <tr>
                                    <td> {item.name} </td>
                                    <td> {item.gender} </td>
                                    <td> {item.nationality} </td>
                                    <td> {item.email} </td>
                                    <td> {item.phoneNumber} </td>
                                    <td> {item.address} </td>
                                    <td> {item.message} </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
                
            </div>

        </>
    );
}

