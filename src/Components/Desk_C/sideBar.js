import React  from 'react'
import './sideBar.css'
import deskPopup from './deskPopup';
import { useState, useEffect } from 'react';
import Title from '../Desk_C/Title';

const Pg1 = ({ show, setShow } ) => {
  const [tags, setTags] = useState([]);
  const [showPop, setShowPop] = useState(false);
  const [grpNameMain, setGrpNameMain] = useState(
    localStorage.getItem("store") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("store");
    if (data) {
      setGrpNameMain(JSON.parse(data));
    } else {
      setGrpNameMain([]);
    }
  }, []);
  useEffect(() => {
    if (grpNameMain.length > 0) {
      const obj = JSON.parse(localStorage.getItem("store"));
      const res = Object.keys(obj).map((key) => [obj[key]]);
      setTags(res);
    }
  }, [grpNameMain]);
  const handleClick = () => {
    setShowPop(true);
  };

  const handleClose = () => {
    setShowPop(false);
  };

  return (
   
      
      <div className='left'>
        <h1 style={{ marginLeft: "28px", marginTop: "16px" }}>Pocket Notes</h1> 
        <button className='bot' onClick={handleClick} >
          <p style={{ fontSize: "20px" }}> + Create Notes group</p> </button>       
      
       <div >
        {tags.length > 0 ? (
          tags.map((tag, index) => 
          <Title 
          show={show}
							setShow={setShow}
          key={index} tag={tag} />)
        ) : (
          <></>
        )}
        </div>
      
      {showPop && (
        <div className="dt_popup">
          <deskPopup
            grpNameMain={grpNameMain}
            setGrpNameMain={setGrpNameMain}
            onClose={handleClose}
            isOpen={showPop}
          />
        </div>
      )}
   
    </div>
    
  )
}

export default Pg1