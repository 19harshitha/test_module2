import Sidebar from '../Components/Desk_C/Sidebar'
import Poster from "../Components/Desk_C/Poster";
import DeskContent from '../Components/Desk_C/DeskContent'
import React,{useState} from "react";


function Desk_View() {
    const [show, setShow] = useState("");
	const [notes, setNotes] = useState([]);
	return (
		<div style={{width:"100vw",height:"100vh",display:"flex"}}>
			<Sidebar show={show} setShow={setShow} />
			{show.length > 0 ? (
				<DeskContent
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
