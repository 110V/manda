import React, { useState } from 'react';
import classnames from 'classnames'
import style from './GamePageDownSection.module.css';
import MsgList from './MsgList';
import ChatInput from './ChatInput';

interface Props{
    className:string;
}

const GamePageDownSection:React.FC<Props> = (props)=>{
    return (
        <div className={classnames(props.className,style.GamePageDownSection)}>
            <MsgList className={style.MsgList} />
            <ChatInput className={style.ChatInput} />
            <div className={style.QuestionList}>

            </div>
        </div>
    );
}

export default GamePageDownSection;