import React from 'react'

const MobNote = ({note}) => {
  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
     marginLeft:"20px",
      alignItems:"center",
      minHeight:"10vh",
      width:"95vw",
      backgroundColor:"#f7ecdc"
     }}>
      <div style={{
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
          minHeight:"10vh",
          width:"24vw",
          backgroundColor:"#f7ecdc"
         
      }}>
        <div style={{fontSize:"1rem",fontWeight:"600"}}>{note.date}</div>
        <div style={{fontSize:"1rem",fontWeight:"600"}}>{note.time}</div>
      </div>
      <div style={{
        minHeight:"15vh",width:"50vw",textAlign:"left", marginTop:"18px"
      }}>
        <p style={{marginTop:"8.5px"}}>{note.content}</p>
      </div>
    </div>
  )
}

export default MobNote