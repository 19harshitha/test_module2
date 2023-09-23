import { useState, useEffect } from "react";   
import Mobi_View from './Pages/Mobi_View'
import Desk_View from './Pages/Desk_View';
import Content_m from './Components/Mobi_C/Content_m'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [dimension, setDimension] = useState(window.innerWidth);
  const [show, setShow] = useState("");
	const [notes, setNotes] = useState([]);
  useEffect(() => {
		setShow(localStorage.getItem("show") || "");
	}, [show]);
  const checkDimension = () => {
		setDimension(window.innerWidth);
	};

	window.addEventListener("resize", checkDimension);



  return (
    <div className="App">
      {dimension > 500 ? (
				<Desk_View />
			) : (
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<Mobi_View show={show} setShow={setShow} />}
						/>
						<Route
							path="/notes"
							element={
								<Content_m
									show={show}
									setShow={setShow}
									notes={notes}
									setNotes={setNotes}
								/>
							}
						/>
					</Routes>
				</BrowserRouter>
			)}
    </div>
  )
}

export default App