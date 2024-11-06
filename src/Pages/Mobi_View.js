import React, {useState,useEffect} from 'react'
import "./Mobi_View.css"
import MobPopup from '../Components/Mobi_C/MobPopup'
import MTitle from '../Components/Mobi_C/MTitle'



const Mobi_View = ({ show, setShow } ) => {
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
    <div className="Mobi_bar">
			<h1 style={{ marginLeft: "28px", marginTop: "16px" }}>Pocket Notes</h1>
			<button className='mobi_btn' onClick={handleClick} >
          <p style={{ fontSize: "20px" }}> + Create Notes group</p> </button> 
		  
			<div className="m_title">
				{tags.length > 0 ? (
					tags.map((tag, index) => (
						<MTitle
							show={show}
							setShow={setShow}
							tag={tag}
							key={index}
						/>
					))
				) : (
					<></>
				)}
			</div>
			{showPop && (
				<div className="mobi_pop">
					<MobPopup
						onClose={handleClose}
            isOpen={showPop}
						grpNameMain={grpNameMain}
						setGrpNameMain={setGrpNameMain}
					/>
				</div>
			)}
		</div>
  )
}

export default Mobi_View