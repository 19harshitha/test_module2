import sideBar from '../Components/Desk_C/sideBar'
import Poster from "../Components/Desk_C/Poster";
import deskContent from '../Components/Desk_C/deskContent'
import React,{useState} from "react";


function Desk_View() {
    const [show, setShow] = useState("");
	const [notes, setNotes] = useState([]);
	return (
		<div style={{width:"100vw",height:"100vh",display:"flex"}}>
			<sideBar show={show} setShow={setShow} />
			{show.length > 0 ? (
				<deskContent
					notes={notes}
					setNotes={setNotes}
					show={show}
					setShow={setShow}
				/>
			) : (
				<Poster/>
			)}
		</div>
	);
};
    
    export default Desk_View;
