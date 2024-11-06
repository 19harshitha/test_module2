import React, { useEffect, useState } from "react";
import './deskContent.css'
import deskNote from './deskNote'
import enter from "../../assets/enter.png"

function Content_d( {notes, setNotes, show} ) {
    const [text, setText] = useState("");
    const [iconColor, setIconColor] = useState("#fff");
    const [pairs, setPairs] = useState("");
  const [showTag, setShowTag] = useState("");
  
    useEffect(() => {
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
    }, [show, setNotes]);
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleNotes();
        }
      };
      const handleNotes = () => {
        if (!text) {
          return;
        }
        const notes = JSON.parse(localStorage.getItem(show)) || [];
        const newNoteObj = {
          id: Date.now(),
          title: show,
          content: text,
          date: new Date().toLocaleDateString("en-GB", {
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
      return (
        <div className="dt_notes">
          <div className="dt_not">
            <div
              className="dt_color"
              style={{ backgroundColor: iconColor }}
            >
              {pairs}
            </div>
            <div >{showTag}</div>
      </div>
      <div className="dt_content">
        {notes && notes.length > 0
          ? notes.map((note, index) => (
              <deskNote key={index} note={note} />
            ))
          : null}
      </div>
      <div className="dt_input">
        <textarea
          value={text}
          placeholder="Enter your text here"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter}  onClick={handleNotes} />
      </div>
    </div>
  );
}
export default Content_d;

