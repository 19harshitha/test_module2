import React from 'react'
import { useNavigate } from "react-router-dom";

const MTitle = ({tag,setShow}) => {
    const navigate = useNavigate();
    const shortName = tag[0].name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
    const newTag = tag[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

    const handleTagClick = () => {
        localStorage.setItem("choice", tag[0].name);
      setShow(tag[0].name);
      navigate("/notes");
    };
  return (
    <div
      onClick={handleTagClick}
      className="title_logo"  style={{gap:"4vh",width:"50vw"}} >
      <div className="logo_" style={{ backgroundColor: tag[0].color }}>
        {shortName}
      </div>
      <div >{newTag}</div>
    </div>
  )
}

export default MTitle