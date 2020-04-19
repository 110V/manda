import React, { useState } from 'react';
import style from './Hint.module.css';
import classnames from 'classnames';


interface Props{
    className:string;
    timeLeft:number;
    content:string;
    hintVisible:boolean;
    sec:number;
}


const Hint: React.FC<Props> = props =>{
    const hintVisible = !props.hintVisible;//임시로 !
    const getTimeText= (sec:number)=>{
        let secText: string = sec.toString();
        let min:number = Math.floor(sec/60);
        sec -= min*60;
        let minText : string = min.toString();
        
        if(min<10){
            minText = "0"+min;
        }
        if(sec<10){
            secText = "0"+sec;
        }
        return min+":"+sec; 
    }
    return (
        <div className={classnames(style.Hint, props.className)}>
            <div className={style.Title}>-힌트-</div>
            <div className={style.Content}>
                <div className = {classnames(style.Timer,hintVisible?style.FadeOut:style.FadeIn)}>{getTimeText(props.timeLeft)}</div>
                <div className = {classnames(style.Text,!hintVisible?style.FadeOut:style.FadeIn)}>{props.content}</div>
            </div>
        </div>
    );
}

export default Hint;