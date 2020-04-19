import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import classnames from 'classnames';
import style from './MsgList.module.css';

interface MsgListProps{
    className:string;
}

interface MsgProps{
    msgType:string;
    user:User;
    content:string;
}

export interface User{
    nick:string;
}



const MsgList: React.FC<MsgListProps> = props =>{
    return (
        <div className = {classnames(style.MsgList,props.className)}>
            <div style={{ width: "100%", height: "100%" }}>
                {/* {props.msgs.map(msg => (<Msg msgType={msg.type} user={msg.user} content={msg.content} />))} */}
            </div>
        </div>
    );
}

const Msg: React.FC<MsgProps> = props => {
    //유저정보를 받고 이름 클릭하면 메뉴 떠야됨 떠야됨 나중에 
    return(
        <div className = {"Msg"+props.msgType}>
            <span className = {style.Nick} >props.user.nick</span>
            <span className = {style.Content}>props.content</span>
        </div>
    )
}

export default MsgList;
