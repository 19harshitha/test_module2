import React, { useState,useEffect,useRef } from "react";
import './deskPopup.css';

function Popup_d( {isOpen,onClose,grpNameMain, setGrpNameMain}) {
  const popupRef = useRef(null);
  const [inpval, setInpval] = useState("");
  const [iconColor, setIconColor] = useState("");
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleInpval = (e) => {
    setInpval(e.target.value);
  };

  const handleColor = (e) => {
    const div = e.target;
    setIconColor(getComputedStyle(div).backgroundColor);
  };

  const handleSub = () => {
    const newGrp = { name: inpval, color: iconColor };
    setGrpNameMain([...grpNameMain, newGrp]);
    localStorage.setItem("store", JSON.stringify([...grpNameMain, newGrp])
    );
   onClose(); 
  };

  return (
    < div className={`box ${isOpen ? 'open' : ''}`} ref={popupRef} >
      <p className="pt">Create New Notes group</p>
      <div class="lab">
        Group Name <input type="text" placeholder="Enter your group name ..."
          onChange={handleInpval} name="inpval" />
      </div>
      <div className="color_box">
        <p className="ps">Choose color</p>
        <div >
          <div className="input_color">

            <span className={`color_1 ${iconColor === "rgb(179, 139, 250)" ? `highlight`:null
              }`} onClick={handleColor}></span>

            <span className={`color_2 ${iconColor === "rgb(255, 121, 242)" ? `highlight`:null
              }`} onClick={handleColor}></span>

            <span className={`color_3 ${iconColor === "rgb(67, 230, 252)" ? `highlight`:null
              }`} onClick={handleColor}></span>
            <span className={`color_4 ${iconColor === "rgb(241, 149, 118)" ? `highlight`:null
              }`} onClick={handleColor}></span>
            <span className={`color_5 ${iconColor === "rgb(0, 71, 255)" ? `highlight`:null
              }`} onClick={handleColor}></span>
            <span className={`color_6 ${iconColor === "rgb(102, 145, 255)" ? `highlight`:null
              }`} onClick={handleColor}></span>


          </div>
        </div>
      </div>
      <button className="btn" onClick={handleSub}
       disabled={inpval.length === 0}  >Create</button>
    </div>
  );
}
export default Popup_d;

