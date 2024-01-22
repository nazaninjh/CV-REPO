
import { useState, useEffect } from "react";
import json from '../../serverData/db.json'
export default function CreatePracticalInfo() {
    const [practicalField, setPracticalField] = useState({
        companyName: '',
        positionTitle:'',
        responsibility:'',
        workingDate: ''
    });
    function handleChange (e, type) {
        const targetValue =  e.target.value
        switch (type) {
            case 'companyName':
                setPracticalField({
                    ...practicalField,
                    companyName: targetValue
                })
                break;
            case 'positionTitle':
                setPracticalField({
                    ...practicalField,
                    positionTitle: targetValue
                })
                break;
            case 'responsibility':
                setPracticalField({
                    ...practicalField,
                    responsibility: targetValue
                })
                break;
            case 'workingDate':
                setPracticalField({
                    ...practicalField,
                    workingDate: targetValue
                })
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        function sendToJson () {
            
            json.userInfo.practical = practicalField
        }
        sendToJson()
       

    }, [practicalField])
    return (
        <>
        <fieldset>
            <label htmlFor="companyName">Your Company Name: </label>
            <input type="text" name="companyName" id="companyName"
            value={practicalField.companyName} onChange={(e) => handleChange(e, e.target.id)}/>
            <label htmlFor="positionTitle">Title Of Your Position: </label>
            <input type="text" name="positionTitle" id="positionTitle"
            value={practicalField.positionTitle} onChange={(e) => handleChange(e, e.target.id)}/>
            <label htmlFor="responsibility">Your Responsibilities: </label>
            <input type="text" name="responsibility" id="responsibility"
            value={practicalField.responsibility} onChange={(e) => handleChange(e, e.target.id)}/>
            <label htmlFor="workingDate">Start Of Working: </label>
            <input type="date" name="workingDate" id="workingDate"
            value={practicalField.workingDate} onChange={(e) => handleChange(e, e.target.id)}/>
        </fieldset>
        </>
    )
}