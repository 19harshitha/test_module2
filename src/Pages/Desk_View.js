import Pg1 from "../Components/Desk_C/Pg1";
import Poster from "../Components/Desk_C/Poster";
import Content_d from "../Components/Desk_C/Content_d";
import React,{useState} from "react";


function Desk_View() {
    const [show, setShow] = useState("");
	const [notes, setNotes] = useState([]);
	return (
		<div style={{width:"100vw",height:"100vh",display:"flex"}}>
			<Pg1 show={show} setShow={setShow} />
			{show.length > 0 ? (
				<Content_d
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
