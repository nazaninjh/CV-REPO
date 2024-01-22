import CreatePersonalInfo from './components/createpersonal';
import CreateEducationInfo from './components/createeducation';
import CreatePracticalInfo from './components/createpractical';
import './style/style.css'
import { useEffect } from 'react';
import json from '../serverData/db.json'
export default function App() {
  
  function readJson(e) {
    e.preventDefault()
    console.log(json)
  }
 
  return (
    <div className="container">
      <form>
        <legend>General Information</legend>
        <CreatePersonalInfo />
        <legend>Education Experience</legend>
        <CreateEducationInfo />
        <legend>Practical Experience</legend>
        <CreatePracticalInfo />
        <button onClick={readJson}>Submit</button>
      </form>
    </div>
  )
}