import { useState, useEffect } from "react"
import json from '../../serverData/db.json'
export default function CreatePersonalInfo() {
    const [personalField, setPersonalfield] = useState({
        name: '',
        email:'',
        phone:''
    });
    function handleChange (e, type) {
        const targetValue =  e.target.value
        switch (type) {
            case 'name':
                setPersonalfield({
                    ...personalField,
                    name: targetValue
                })
                break;
            case 'email':
                setPersonalfield({
                    ...personalField,
                    email: targetValue
                })
                break;
            case 'phone':
                setPersonalfield({
                    ...personalField,
                    phone: targetValue
                })
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        function sendToJson () {
            json.userInfo.personal = personalField
        }
        sendToJson()
       

    }, [personalField])
    return (
        <>
        <fieldset>
            <label htmlFor="name">Your Name: </label>
            <input type="text" name="userName" id="name"
            value={personalField.name} onChange={(e) => handleChange(e, e.target.id)}/>
            <label htmlFor="email">Your Email: </label>
            <input type="email" name="userEmail" id="email"
            value={personalField.email} onChange={(e) => handleChange(e, e.target.id)}/>
            <label htmlFor="phone">Your Phone Number: </label>
            <input type="tel" name="userPhone" id="phone"
            value={personalField.phone} onChange={(e) => handleChange(e, e.target.id)}/>
        </fieldset>
        </>
    )
}