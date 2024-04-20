import React, { useState } from 'react'

export default function About() {
const [myStyle, setmyStyle]= useState({
    color:'white',
    backgroundColor:'black'
})
const [btnText, setbtnText] = useState("Enable Light Mode")

const toggleStyle = () =>{
    if(myStyle.color === 'white'){
        setmyStyle({
            color:'black',
            backgroundColor:'white'}
        )
        setbtnText("Enable Dark Mode")
    }
    else{
        setmyStyle(
            {
            color:'white',
            backgroundColor:'black'}
        )
        setbtnText("Enable Light Mode")
    }
}
    return (
    <>
    <div className='container my-5'>

    <h1>Dark Mode</h1>
     <div className="card" style={{ width: '18rem'}}>
      <div className="card-body" style={myStyle}>
        <h5 className="card-title">Huzaifa Shoukat</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-outline-dark" onClick={toggleStyle}>{btnText}</button>
      </div>
    </div>
    </div>
    </>
  )
}
