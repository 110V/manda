import React, { useState } from 'react';
import style from './NicknameInput.module.css';

interface Props{
  onPlay:Function;
}


const NicknameInput:React.FC<Props> = (props)=> {
    const [nickname,setNickname] = useState("");
  return (
    <div className = {style.NicknameInput}>
        <input className = {style.TextInput} type="text" onChange={(e)=>{setNickname(e.target.value)}} />
        <button className = {style.Button} onClick={()=>{if(props.onPlay)props.onPlay(nickname)}}>PLAY!</button>
    </div>
  );
}

export default NicknameInput;
