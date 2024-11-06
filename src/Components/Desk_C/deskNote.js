import React from 'react'


function Nodt_d( {note}) {
  return (
    
         <div style={{
          display:"flex",
          justifyContent:"space-between",
          gap:"1vw",
          alignItems:"center",
          minHeight:"15vh",
          width:"76vw",
          backgroundColor:"#f7ecdc"
         }}>
      <div style={{
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
          minHeight:"15vh",
          width:"15vw",
          backgroundColor:"#f7ecdc"
         
      }}>
        <div style={{fontSize:"1rem",fontWeight:"600",margin:"1vh"}}>{note.date}</div>
        <div style={{fontSize:"1rem",fontWeight:"600"}}>{note.time}</div>
      </div>
      <div style={{
        minHeight:"15vh",width:"50vw",textAlign:"left", margin:"20px"
      }}>
        <p style={{marginTop:"8.5px"}}>{note.content}</p>
      </div>
    </div>
  )
}

export default Nodt_d