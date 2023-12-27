// react hooks
import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
// create contextAPI for product 
export const surveyContext = createContext();
// custom context hook 
export function useSurveyContext(){
    const value=useContext(surveyContext);
    return value;
}


// custom Provider
export function SurveyContext({children}){
    const [surveyData, setSurveyData] = useState([]);
    axios.defaults.withCredentials = true;

    // useEffect(() => {
    //     axios.get('http://localhost:3001/surveys')
    //     .then(items => setItem(items.data)) 
    //     .catch(err => console.log(err))
    //     console.log("### ", items.Survey);
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://survey-form-mern-api.vercel.app/api/surveys');
            setSurveyData(response.data.surveys);
            console.log("### ", surveyData); 
        } 
        catch (error) {
            console.error('Error fetching survey data:', error);
        }
        };

        fetchData();
    }, []);


    return(
        <surveyContext.Provider  value={{surveyData}}>
            {children}
        </surveyContext.Provider> 
    );
}
