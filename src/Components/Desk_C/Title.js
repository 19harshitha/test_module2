import React from 'react'
import "./Title.css";


const Title = ({tag, show,setShow}) => {
 
  const shortName = tag[0].name
  .split(" ")
  .map((word) => word.slice(0, 2))
  .join("")
  .toUpperCase();
  const newTag = tag[0].name
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
  const handleTagClick = () => {
    setShow(tag[0].name);
  };

  return (
    <div
      onClick={handleTagClick}
      className={`title_logo ${
        show === tag[0].name ? "highlight_title" : null
      }`}
    >
      <div className="logo_" style={{ backgroundColor: tag[0].color }}>
        {shortName}
      </div>
      <div>{newTag}</div>
    </div>
  )
}

export default Title