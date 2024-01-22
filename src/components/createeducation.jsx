import { useEffect, useState } from "react"

import json from '../../serverData/db.json'
export default function CreateEducationInfo () {
    const [educationField, setEducationField] = useState({
        SchoolName: '',
        studyTitle:'',
        studyDate:''
    });
   
    function handleChange (e, type) {
        const targetValue =  e.target.value
        switch (type) {
            case 'schoolName':
                
                setEducationField({
                    ...educationField,
                    SchoolName: targetValue
                })
                break;
            case 'studyTitle':
                
                setEducationField({
                    ...educationField,
                    studyTitle: targetValue
                })
                break;
            case 'studyDate':
                
                setEducationField({
                    ...educationField,
                    studyDate: targetValue
                })
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        function sendToJson () {
            json.userInfo.education = educationField
        }
        sendToJson()
       

    }, [educationField])
    
    return (
        <>
        <fieldset>
            <label htmlFor="schoolName">Your School Name: </label>
            <input type="text" name="schoolName" id="schoolName"
            value={educationField.SchoolName} onChange={(e) => handleChange(e, e.target.id)}/>
            <label htmlFor="studyTitle">Title Of Your Study: </label>
            <input type="text" name="studyTitle" id="studyTitle"
            value={educationField.studyTitle} onChange={(e) => handleChange(e, e.target.id)}/>
            <label htmlFor="studyDate">Start Of study: </label>
            <input type="date" name="studyDate" id="studyDate"
            value={educationField.studyDate} onChange={(e) => handleChange(e, e.target.id)}/>
        </fieldset>
        </>
    )
}