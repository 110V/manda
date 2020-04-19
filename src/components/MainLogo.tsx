import React, { useState, useEffect } from 'react';
import style from './MainLogo.module.css';

interface MainLogoProps{
    play:boolean;
}
interface AlphabetProps{
    play:boolean;
    delay:number;
    index:number;
}



const MainLogo:React.FC<MainLogoProps> = (props)=> {
    const alphabets = [0,0.1,0.05,0.015,0.07];;
    return (
        <div className={style.MainLogo}>
            {alphabets.map((delay,index) => (<Alphabet delay={delay} index = {index} play={props.play} />))}
        </div>
    );
}

const Alphabet:React.FC<AlphabetProps> = (props) =>{
    const animateStyle = {
        animationPlayState: props.play ? "running" : "paused",
        animationDelay: props.delay+"s",
    }
    return (
        <span><img className = {style.Alphabet} src={"/logo/sliced" + (props.index + 1) + ".png"} style={animateStyle} /></span>
    )
}

export default MainLogo;
