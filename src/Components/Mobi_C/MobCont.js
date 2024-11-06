import React, { useEffect, useState } from "react";
import './mobCont.css'
import MobNote from "../Mobi_C/MobNote";
import enter from "../../assets/enter.png"
import Vec from "../../assets/Vec.png";
import { useNavigate } from "react-router-dom";

function Content_m( {notes, setNotes, show,setShow} ) {
    const [text, setText] = useState("");
    const [iconColor, setIconColor] = useState("#fff");
    const [pairs, setPairs] = useState("");
  const [showTag, setShowTag] = useState("");
  const navigate = useNavigate();

    useEffect(() => {
        setShow(localStorage.getItem("choice") || "");
    setNotes(JSON.parse(localStorage.getItem(show)) || []);
    const store = JSON.parse(localStorage.getItem("store"));
    const showGrp = store.find((group) => group.name === show);
    if (showGrp) {
        setIconColor(showGrp.color);
        setPairs(
          showGrp.name
            .split(" ")
            .map((word) => word.charAt(0))
            .join("")
            .toUpperCase()
        );
        setShowTag(
            showGrp.name
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          );
        }
    }, [show, setNotes,setShow]);
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleNotes();
          setText("");
        }
      };
      const handleNotes = (e) => {
        const notes = JSON.parse(localStorage.getItem(show)) || [];
        const newNoteObj = {
          id: Date.now(),
          title: show,
          content: text,
          date: new Date().toLocaleDateString({
            day: "numeric",
            month: "numeric",
            year: "numeric",
          }),
          time: new Date().toLocaleTimeString(),
        };
        notes.push(newNoteObj);
        localStorage.setItem(show, JSON.stringify(notes));
        setText("");
        setNotes(notes);
      };
      const handleChange = (e) => {
        setText(e.target.value);
      };
      const Back = () => {
		setShow("");
		navigate("/");
	};
      return (
        <div className="Mobi_notes">
          <div className="Mobi_title">
          <img src={Vec} alt="back"  onClick={Back} />
            <div
              className="Mobi_color"
              style={{ backgroundColor: iconColor }}
            >
              {pairs}
            </div>
            <div className="Mobi_text">{showTag}</div>
      </div>
      <div >
      {notes.length === 0 ? (
				<></>
				) : (
					<div>
						{notes.map((note, index) => (
							<MobNote key={index} note={note} />
						))}
					</div>
				)}
      </div>
      <div className="Mobi_input">
        <textarea
          value={text}
          placeholder="Enter your notes here"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter} alt="pic" onClick={handleNotes} />
      </div>
    </div>
  );
}
export default Content_m;

