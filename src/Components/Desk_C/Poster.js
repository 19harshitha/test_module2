import React  from 'react'
import pre from "../../assets/pre.png";
import Vector from "../../assets/Vector.png";


const Poster = () => {
    return (
        <div className='board'>
            
        <img src={pre} height={"270px"} width={"520px"}
          style={{ marginTop: "140px", marginLeft: "20px" }} />
        <p style={{ marginLeft: "20px", fontSize: "40px" }}>Pocket Notes</p>
        <p style={{ marginLeft: "24px", fontSize: "18px", color: "#292929" }}>Send and receive messages without keeping your phone online.</p>
        <p style={{ marginLeft: "24px", fontSize: "18px", color: "#292929" }}>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        <p style={{ marginLeft: "24px", fontSize: "18px", marginTop: "70px", color: "#292929" }}>
          <img src={Vector} height={"20px"} width={"17px"}/> end-to-end encrypted</p>
     
            </div>
    )
}
export default Poster;