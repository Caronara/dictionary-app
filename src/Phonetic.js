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
      
        <IconButton className="button" aria-label="listen" color="primary" onClick={handleClick} >
          <VolumeUpIcon  />
        </IconButton>
      
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
