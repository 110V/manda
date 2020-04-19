import React, { useState } from 'react';

import style from './GamePage.module.css';
import {User} from './MsgList';
import ChatInput from './ChatInput';
import GamePageTopSection from './GamePageTopSection';
import GamePageDownSection from './GamePageDownSection';



interface Props{
  
}

interface Msg{
  type:string,
  user:User;
  content:string;
}


const GamePage:React.FC = ()=>{
  
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const addMsg = (type:string, user:User, content:string) => {
    setMsgs(msgs.concat({ type, user, content }));
  };
  const onSend = (content:string) => {
    addMsg("msg", { nick: "110v" }, content);
  }

  return (
    <div className = {style.Container} >
      <div className = {style.Title}>
        <button className = {style.Logout}>{"LOGOUT<"}</button>
        <div className = {style.Logo}><img src={"/logo/whole_small.png"}/></div>

      </div>
      <GamePageTopSection className = {style.Top} />
      <GamePageDownSection className = {style.Down} />
    </div>
  );
}

export default GamePage;
