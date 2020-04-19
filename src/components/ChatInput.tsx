
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import style from './ChatInput.module.css';


interface Props{
    className:string;
    onSend?:Function;
}

const ChatInput:React.FC<Props> = (props)=> {
    const [inputVal,setInputVal] = useState("");
    const send = () => {
        if (inputVal == "") {
            return;
        }
        if (props.onSend) {
            props.onSend(inputVal);
            setInputVal("");
        }
    }

    return (
        <div className={classnames(props.className,style.ChatInput)}>
            <input className={style.Input} value={inputVal} onChange={(e) => { setInputVal(e.target.value) }}></input>
            <button className={style.SendBtn} onClick={send}>SEND</button>
        </div>
    );
}

export default ChatInput;

