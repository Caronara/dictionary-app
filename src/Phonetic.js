import React from "react";
import "./Phonetic.css";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton } from "@mui/material";


export default function Phonetic(props) {
  
function handleClick(event){
  let audio = new Audio(props.phonetic.audio);
  return(
     audio.play()
  );
}

  return (
    <div className="Phonetic">
      <span className="button">
        <IconButton aria-label="listen" color="inherit" onClick={handleClick} >
          <VolumeUpIcon  />
        </IconButton>
      </span>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
